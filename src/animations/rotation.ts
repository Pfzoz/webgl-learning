import * as THREE from "three";

const times = [0, 300],
    values = [0, 360];
const trackName = ".rotation[z]";
const track = new THREE.NumberKeyframeTrack(trackName, times, values);
const rotationAnimation = new THREE.AnimationClip("shake", 300, [track]);

export { rotationAnimation };
