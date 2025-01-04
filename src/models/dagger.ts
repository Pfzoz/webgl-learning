import * as THREE from "three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { scene } from "../primitives";
import { stabAnimation } from "../animations/stab";
import { createFadeAnimation } from "../animations/fadeOut";
import { squire } from "../objects/actors/squire";
import { returnAnimation } from "../animations/return";

const gltfLoader = new GLTFLoader();

let loaded: boolean = false;
let dagger: THREE.Object3D | undefined = undefined;
let daggerMixer: THREE.AnimationMixer | undefined = undefined;
let daggerStabAction: THREE.AnimationAction | undefined = undefined;
let daggerFadeAction: THREE.AnimationAction | undefined = undefined;
let daggerReturnAction: THREE.AnimationAction | undefined = undefined;
let daggerOnLoad: () => void | undefined = undefined;
let setDaggerOnLoad = (onLoad: () => void) => {
    daggerOnLoad = onLoad;
};

const loadDagger = () => {
    gltfLoader.load(
        "/dagger_gltf/dagger.glb",
        function (gltf) {
            gltf.scene.name = "dagger";
            gltf.scene.visible = false;
            scene.add(gltf.scene);

            gltf.scene.translateY(1.2);
            gltf.scene.translateZ(2.8);
            gltf.scene.translateX(0.4);
            gltf.scene.rotateZ(1.2);
            gltf.scene.rotateX(0.1);

            gltf.scene.rotateY(3.2);

            gltf.scene.scale.set(0.3, 0.3, 0.3);

            dagger = gltf.scene;

            daggerMixer = new THREE.AnimationMixer(dagger);
            daggerStabAction = daggerMixer.clipAction(stabAnimation);
            daggerStabAction.setLoop(THREE.LoopOnce, 1);
            daggerStabAction.clampWhenFinished = true;
            daggerFadeAction = daggerMixer.clipAction(
                createFadeAnimation(squire.material),
            );
            daggerFadeAction.setLoop(THREE.LoopOnce, 1);
            daggerFadeAction.clampWhenFinished = true;
            daggerReturnAction = daggerMixer.clipAction(returnAnimation);
            daggerReturnAction.setLoop(THREE.LoopOnce, 1);
            daggerReturnAction.clampWhenFinished = true;

            daggerOnLoad && daggerOnLoad();
            loaded = true;
        },
        (xhr) => {
            // Called while loading is progressing
            console.log(
                `Model ${Math.round((xhr.loaded / xhr.total) * 100)}% loaded`,
            );
        },
        function (error) {
            console.error(error);
        },
    );
};

export {
    loadDagger,
    loaded as daggerLoaded,
    dagger,
    daggerStabAction,
    daggerMixer,
    daggerFadeAction,
    daggerReturnAction,
    setDaggerOnLoad,
};
