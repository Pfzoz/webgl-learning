import * as THREE from "three";
import { camera, clock, renderer, scene } from "./primitives";
import init from "./initialization";
import { cube } from "./objects/cube";

function main_loop() {
    const delta = clock.getDelta();
    cube.rotateX(delta).rotateY(delta);
    renderer.render(scene, camera);
}

init();
renderer.setAnimationLoop(main_loop);
