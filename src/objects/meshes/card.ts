import * as THREE from "three";
import CardType from "../../enums/cardtype";
import { diamonds_5_texture, spades_10_texture } from "../../textures";
import { white } from "../../colors";

const cardGeometry = new THREE.BoxGeometry(2 * (2 / 3), 2, 0.01);

const cardTextureMap: Record<CardType, THREE.Texture> = {
    "0": spades_10_texture,
    "1": diamonds_5_texture,
};

const genericMaterials = [
    new THREE.MeshBasicMaterial({ color: white }), // Left edge
    new THREE.MeshBasicMaterial({ color: white }), // Right edge
    new THREE.MeshBasicMaterial({ color: white }), // Top edge
    new THREE.MeshBasicMaterial({ color: white }), // Bottom edge
];

const card = (cardType: CardType): THREE.Mesh => {
    const specificMaterials = [
        ...genericMaterials,
        new THREE.MeshBasicMaterial({ map: cardTextureMap[cardType] }),
        new THREE.MeshBasicMaterial({ color: white }),
    ];
    const mesh = new THREE.Mesh(cardGeometry, specificMaterials);

    return mesh;
};

export { card };
