import { globalSound } from "../primitives";
import * as THREE from "three";

const audioLoader = new THREE.AudioLoader();

let loaded: boolean = false;
let play: () => void | undefined = undefined;

audioLoader.load("/audio/sword-slash-and-swing.mp3", function (buffer) {
    play = () => {
        globalSound.setBuffer(buffer);
        globalSound.setLoop(false);
        globalSound.setVolume(0.5);
        globalSound.play();
    };
    loaded = true;
});

export { loaded as slashSoundLoaded, play as playSlashSound };
