import * as THREE from "three";

const gameDiv = document.getElementById("gameDiv");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    gameDiv.getBoundingClientRect().width /
        gameDiv.getBoundingClientRect().height,
    0.1,
    1000,
);
const clock = new THREE.Clock();
const renderer = new THREE.WebGLRenderer();
const raycaster = new THREE.Raycaster();

export { scene, camera, renderer, clock, gameDiv, raycaster };
