import { cube } from "../objects/cube";
import { camera, gameDiv, renderer, scene } from "../primitives";

function load_objects() {
    scene.add(cube);
}

function onResize() {
    const newWidth = gameDiv.getBoundingClientRect().width;
    const newHeight = gameDiv.getBoundingClientRect().height;
    camera.aspect = newWidth / newHeight;
    renderer.setSize(newWidth, newHeight);
}

export default function init() {
    onResize();
    window.addEventListener("resize", onResize);
    gameDiv.append(renderer.domElement);

    camera.position.z = 5;

    load_objects();
}
