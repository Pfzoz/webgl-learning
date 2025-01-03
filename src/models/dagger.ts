import * as THREE from "three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { scene } from "../primitives";

const gltfLoader = new GLTFLoader();

let loaded: boolean = false;
let dagger: THREE.Object3D | undefined = undefined;

const loadDagger = () => {
    gltfLoader.load(
        "/dagger_gltf/dagger.glb",
        function (gltf) {
            gltf.scene.name = "dagger";
            scene.add(gltf.scene);
            loaded = true;
            gltf.scene.translateY(1.2);
            gltf.scene.translateZ(1.8);
            gltf.scene.rotateZ(1.2);
            gltf.scene.rotateX(0.1);
            gltf.scene.rotateY(3.2);

            gltf.scene.scale.set(0.3, 0.3, 0.3);
            dagger = gltf.scene;
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

export { loadDagger, loaded as daggerLoaded, dagger };
