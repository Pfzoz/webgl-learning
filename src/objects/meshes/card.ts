import * as THREE from "three";

const cardGeometry = new THREE.BoxGeometry(1, 0.1, 1);
const cardMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cardMesh = new THREE.Mesh(cardGeometry, cardMaterial);

export enum CardType {
    SPADES_10,
    DIAMONDS_10,
}

const card = (texture: CardType) => {};

export { card };
