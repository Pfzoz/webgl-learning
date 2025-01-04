import { card } from "../meshes/card";
import CardType from "../../enums/cardtype";
import { advanceReverseAnimation } from "../../animations/advanceReverse";
import * as THREE from "three";
import { createFadeAnimation } from "../../animations/fadeOut";
const squire = card(CardType.DIAMONDS_5);

const squireAnimationMixer = new THREE.AnimationMixer(squire);
const squireAdvanceReverseAction = squireAnimationMixer.clipAction(
    advanceReverseAnimation,
);
squireAdvanceReverseAction.setLoop(THREE.LoopOnce, 1);

const squireFadeAnimation = createFadeAnimation(squire.material);
const squireFadeAction = squireAnimationMixer.clipAction(squireFadeAnimation);
squireFadeAction.setLoop(THREE.LoopOnce, 1);
squireFadeAction.clampWhenFinished = true;

if (Array.isArray(squire.material)) {
    squire.material.forEach((material) => {
        if (material instanceof THREE.MeshLambertMaterial) {
            material.transparent = true;
        }
    });
}

export {
    squire,
    squireAnimationMixer,
    squireAdvanceReverseAction,
    squireFadeAction,
};
