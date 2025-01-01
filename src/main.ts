import * as THREE from "three";
import { camera, clock, renderer, scene } from "./primitives";
import init from "./initialization";
import { champion } from "./objects/actors/champion";

function main_loop() {
    const delta = clock.getDelta();

    champion.rotateX(delta).rotateY(delta);
    renderer.render(scene, camera);
}

init();
renderer.setAnimationLoop(main_loop);
