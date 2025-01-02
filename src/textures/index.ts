import * as THREE from "three";

const PLAYING_CARDS_TEXTURES_PATH: string = "/playing-cards/png";

const textureLoader = new THREE.TextureLoader();

const spades_10_texture = textureLoader.load(
    PLAYING_CARDS_TEXTURES_PATH + "/10_of_spades.png",
);
const diamonds_5_texture = textureLoader.load(
    PLAYING_CARDS_TEXTURES_PATH + "/5_of_diamonds.png",
);

export { spades_10_texture, diamonds_5_texture };
