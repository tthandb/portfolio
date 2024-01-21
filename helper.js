import { GLTFLoader } from '/node_modules/three/examples/jsm/loaders/GLTFLoader.js';

const scenePath = './static/scene.gltf'

export const LoadGLTFByPath = (scene) => {
    return new Promise((resolve, reject) => {
        // Create a loader
        const loader = new GLTFLoader();

        // Load the GLTF file
        loader.load(scenePath, (gltf) => {

            scene.add(gltf.scene);

            resolve();
        }, undefined, (error) => {
            reject(error);
        });
    });
};