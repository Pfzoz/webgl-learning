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
} from "./objects/actors/squire";

let pickedChampion: boolean = false;
let attacking: boolean = false;

function onClick(event: MouseEvent) {
    const mouse = new THREE.Vector2();
    if (attacking) {
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
            championAdvanceAction
                .getMixer()
                .addEventListener("finished", ({ action }) => {
                    if (action.getClip().name === "advance") {
                        championAdvanceAction.stop();
                        championAdvanceAction.reset();
                        squireAdvanceReverseAction.stop();
                        squireAdvanceReverseAction.reset();
                        attacking = false;
                    }
                });
            console.log("play!");
        }
        championShakyAction.stop();
        pickedChampion = false;
    }
}

function main_loop() {
    const delta = clock.getDelta();
    championAnimationMixer.update(delta);
    squireAnimationMixer.update(delta);
    renderer.render(scene, camera);
}

init();
renderer.domElement.addEventListener("click", onClick);
renderer.setAnimationLoop(main_loop);
