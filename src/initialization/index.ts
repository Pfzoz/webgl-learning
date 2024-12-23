import { cube } from "../objects/cube";
import { camera, renderer, scene } from "../primitives";

function load_objects() {
    scene.add(cube);
}

export default function init() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera.position.z = 5;

    load_objects();
}
