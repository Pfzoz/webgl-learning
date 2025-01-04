import * as THREE from "three";
import {
    camera,
    clock,
    gameDiv,
    raycaster,
    renderer,
    scene,
} from "./primitives";
import init from "./initialization";
import {
    champion,
    championAdvanceAction,
    championAnimationMixer,
    championShakyAction,
} from "./objects/actors/champion";
import {
    squire,
    squireAdvanceReverseAction,
    squireAnimationMixer,
    squireFadeAction,
} from "./objects/actors/squire";
import {
    dagger,
    daggerFadeAction,
    daggerLoaded,
    daggerMixer,
    daggerReturnAction,
    daggerStabAction,
    setDaggerOnLoad,
} from "./models/dagger";
import { playSlashSound } from "./audio/slash";

let pickedChampion: boolean = false;
let attacking: boolean = false;
let attacked: boolean = false;

function onKeyPress(event: KeyboardEvent) {
    if (event.key === "r") {
        dagger.visible = false;
        daggerStabAction.stop();
        daggerStabAction.reset();
        daggerFadeAction.stop();
        daggerFadeAction.reset();
        squireFadeAction.stop();
        squireFadeAction.reset();
        daggerReturnAction.stop();
        daggerReturnAction.reset();
        attacked = false;
    }
}

function onClick(event: MouseEvent) {
    const mouse = new THREE.Vector2();
    if (attacking || !daggerLoaded || attacked) {
        return;
    }
    const boundingClientRect = gameDiv.getBoundingClientRect();
    const startWidth = window.innerWidth - boundingClientRect.width;
    const startHeight = window.innerHeight - boundingClientRect.height;
    mouse.x = ((event.clientX - startWidth) / boundingClientRect.width) * 2 - 1;
    mouse.y =
        -((event.clientY - startHeight) / boundingClientRect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersectsChampion = raycaster.intersectObject(champion);
    if (intersectsChampion.length > 0 && !pickedChampion) {
        pickedChampion = true;
        championShakyAction.play();
    } else if (pickedChampion) {
        const intersectsSquire = raycaster.intersectObject(squire);
        if (intersectsSquire.length > 0) {
            attacking = true;

            championAdvanceAction.play();
            squireAdvanceReverseAction.play();
        }
        championShakyAction.stop();
        pickedChampion = false;
    }
}

function main_loop() {
    const delta = clock.getDelta();
    championAnimationMixer.update(delta);
    squireAnimationMixer.update(delta);
    if (daggerLoaded) {
        daggerMixer.update(delta);
    }
    renderer.render(scene, camera);
}

championAdvanceAction.getMixer().addEventListener("finished", ({ action }) => {
    if (action.getClip().name === "advance") {
        championAdvanceAction.stop();
        championAdvanceAction.reset();
        squireAdvanceReverseAction.stop();
        squireAdvanceReverseAction.reset();
        dagger.visible = true;
        daggerStabAction.play();
    }
});

squireFadeAction.getMixer().addEventListener("finished", ({ action }) => {
    if (action.getClip().name === "fade") {
        setTimeout(() => {
            daggerReturnAction.play();
            attacked = true;
            attacking = false;
        }, 300);
    }
});

setDaggerOnLoad(() => {
    daggerStabAction.getMixer().addEventListener("finished", ({ action }) => {
        if (action.getClip().name === "stab") {
            playSlashSound();
            setTimeout(() => {
                squireFadeAction.play();
            }, 300);
        }
    });
});

init();
document.addEventListener("keydown", onKeyPress, false);
renderer.domElement.addEventListener("click", onClick);
renderer.setAnimationLoop(main_loop);
