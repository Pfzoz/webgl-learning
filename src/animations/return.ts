import * as THREE from "three";

const period = 0.75;
const descendDelta = -1.65;
const rotationName = ".rotation[y]";

const rotationTrack = new THREE.NumberKeyframeTrack(
    rotationName,
    [0, period],
    [0, -7.5],
);
const rotationXTrack = new THREE.NumberKeyframeTrack(
    ".rotation[x]",
    [0, period],
    [0, -0.5],
);
// const rotationZrack = new THREE.NumberKeyframeTrack(
//     ".rotation[z]",
//     [0, period],
//     [0, 0],
// );
const ascendTrack = new THREE.NumberKeyframeTrack(
    ".position[z]",
    [0, period],
    [0, 7],
);

const returnAnimation = new THREE.AnimationClip(
    "return",
    period,
    [rotationTrack, ascendTrack, rotationXTrack],
    THREE.AdditiveAnimationBlendMode,
);

export { returnAnimation };
