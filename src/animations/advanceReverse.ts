import * as THREE from "three";

const period = 0.7;
const advanceDelta = 0.05;
const trackName = ".position[y]";
const advanceTrack = new THREE.NumberKeyframeTrack(
    trackName,
    [0, (period / 10) * 4, (period / 10) * 5, period],
    [0, 0.4, -0.3, 0],
);
const advanceReverseAnimation = new THREE.AnimationClip(
    "advance-reverse",
    period,
    [advanceTrack],
    THREE.AdditiveAnimationBlendMode,
);

export { advanceReverseAnimation };
