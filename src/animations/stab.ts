import * as THREE from "three";

const period = 0.1;
const descendDelta = -1.65;
const trackName = ".position[z]";
const descendTrack = new THREE.NumberKeyframeTrack(
    trackName,
    [0, period],
    [0, descendDelta],
);
const angleTrackName = ".position[x]";
const angleXTrack = new THREE.NumberKeyframeTrack(
    angleTrackName,
    [0, period],
    [0, -0.085],
);
const angleYTrack = new THREE.NumberKeyframeTrack(
    angleTrackName,
    [0, period],
    [0, -0.18],
);
const stabAnimation = new THREE.AnimationClip(
    "stab",
    period,
    [descendTrack, angleXTrack, angleYTrack],
    THREE.AdditiveAnimationBlendMode,
);

export { stabAnimation };
