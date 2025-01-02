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
import { champion } from "./objects/actors/champion";

let pickedChampion: boolean = false;

function onClick(event) {
    const mouse = new THREE.Vector2();
    const boundingClientRect = gameDiv.getBoundingClientRect();
    const startWidth = window.innerWidth - boundingClientRect.width;
    const startHeight = window.innerHeight - boundingClientRect.height;
    mouse.x = ((event.clientX - startWidth) / boundingClientRect.width) * 2 - 1;
    mouse.y =
        -((event.clientY - startHeight) / boundingClientRect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(champion);
    if (intersects.length > 0 && !pickedChampion) {
        pickedChampion = true;
    } else if (pickedChampion) {
        pickedChampion = false;
    }
}

function main_loop() {
    const delta = clock.getDelta();
    renderer.render(scene, camera);
}

init();
renderer.domElement.addEventListener("click", onClick);
renderer.setAnimationLoop(main_loop);
