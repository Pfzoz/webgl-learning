import * as THREE from "three";

const period = 0.8;
const rotationDelta = 0.05;
const trackName = ".rotation[y]";
const circularRotateY = new THREE.NumberKeyframeTrack(
    trackName,
    [0, period / 2, period],
    [rotationDelta, -rotationDelta, rotationDelta],
);
const circularRotateZ = new THREE.NumberKeyframeTrack(
    ".rotation[z]",
    [0, period / 2, period],
    [rotationDelta, -rotationDelta, rotationDelta],
);
const shakyAnimation = new THREE.AnimationClip("shake", period, [
    circularRotateY,
    circularRotateZ,
]);

export { shakyAnimation };
