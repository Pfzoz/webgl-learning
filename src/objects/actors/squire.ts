import { card } from "../meshes/card";
import CardType from "../../enums/cardtype";
import { advanceReverseAnimation } from "../../animations/advanceReverse";
import * as THREE from "three";
const squire = card(CardType.DIAMONDS_5);

const squireAnimationMixer = new THREE.AnimationMixer(squire);
const squireAdvanceReverseAction = squireAnimationMixer.clipAction(
    advanceReverseAnimation,
);
squireAdvanceReverseAction.setLoop(THREE.LoopOnce, 1);

export { squire, squireAnimationMixer, squireAdvanceReverseAction };
