import * as THREE from "three";

const period = 0.35;
const trackName = ".material.opacity";

const createFadeAnimation = (
    material: THREE.Material | THREE.Material[],
): THREE.AnimationClip => {
    const tracks = [];
    if (Array.isArray(material)) {
        material.forEach((material, index) => {
            if (material instanceof THREE.MeshLambertMaterial) {
                console.log(`.material[${index}].opacity`);
                tracks.push(
                    new THREE.NumberKeyframeTrack(
                        `.material[${index}].opacity`,
                        [0, period],
                        [1, 0],
                    ),
                );
            }
        });
    } else {
        if (material instanceof THREE.MeshLambertMaterial) {
            tracks.push(
                new THREE.NumberKeyframeTrack(
                    `.material.opacity`,
                    [0, period],
                    [1, 0],
                ),
            );
        }
    }
    const fadeAnimation = new THREE.AnimationClip("fade", period, tracks);
    return fadeAnimation;
};

export { createFadeAnimation };
