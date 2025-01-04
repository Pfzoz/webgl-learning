import { daggerLoaded, loadDagger } from "../models/dagger";
import { champion } from "../objects/actors/champion";
import { squire } from "../objects/actors/squire";
import { camera, gameDiv, renderer, scene } from "../primitives";
import * as THREE from "three";

function load_objects() {
    const light = new THREE.AmbientLight(0xffffff, 4); // Soft white light
    scene.add(light);
    scene.add(champion);
    scene.add(squire);
    loadDagger();
}

function onResize() {
    const newWidth = gameDiv.getBoundingClientRect().width;
    const newHeight = gameDiv.getBoundingClientRect().height;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
}

export default function init() {
    onResize();
    window.addEventListener("resize", onResize);
    gameDiv.append(renderer.domElement);

    camera.position.z = 5;

    load_objects();

    champion.position.y = -1.3;
    squire.position.y = 1.3;
}
