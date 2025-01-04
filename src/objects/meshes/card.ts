import * as THREE from "three";
import CardType from "../../enums/cardtype";
import { diamonds_5_texture, spades_10_texture } from "../../textures";
import { white } from "../../colors";

const cardHeight = 2;
const cardGeometry = new THREE.BoxGeometry(
    cardHeight * (2 / 3),
    cardHeight,
    0.01,
);

const cardTextureMap: Record<CardType, THREE.Texture> = {
    "0": spades_10_texture,
    "1": diamonds_5_texture,
};

const genericMaterials = [
    new THREE.MeshLambertMaterial({ color: white }), // Left edge
    new THREE.MeshLambertMaterial({ color: white }), // Right edge
    new THREE.MeshLambertMaterial({ color: white }), // Top edge
    new THREE.MeshLambertMaterial({ color: white }), // Bottom edge
];

const card = (cardType: CardType): THREE.Mesh => {
    const specificMaterials = [
        ...genericMaterials,
        new THREE.MeshLambertMaterial({ map: cardTextureMap[cardType] }),
        new THREE.MeshLambertMaterial({ color: white }),
    ];
    const mesh = new THREE.Mesh(cardGeometry, specificMaterials);

    return mesh;
};

export { card };
