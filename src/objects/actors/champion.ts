import { card } from "../meshes/card";
import CardType from "../../enums/cardtype";
import * as THREE from "three";
import { rotationAnimation } from "../../animations/rotation";
import { shakyAnimation } from "../../animations/shaky";

const champion = card(CardType.SPADES_10);

const championAnimationMixer = new THREE.AnimationMixer(champion);
const championRotateAction =
    championAnimationMixer.clipAction(rotationAnimation);
const championShakyAction = championAnimationMixer.clipAction(shakyAnimation);

export {
    champion,
    championAnimationMixer,
    championRotateAction,
    championShakyAction,
};
