import { champion } from "../objects/actors/champion";
import { squire } from "../objects/actors/squire";
import { camera, gameDiv, renderer, scene } from "../primitives";

function load_objects() {
    scene.add(champion);
    scene.add(squire);
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
