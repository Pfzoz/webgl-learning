import * as THREE from "three";
import CardType from "../../enums/cardtype";
import { diamonds_5_texture, spades_10_texture } from "../../textures";

const cardGeometry = new THREE.BoxGeometry(1, 0.1, 1);
const cardMaterial = new THREE.MeshBasicMaterial({ map: spades_10_texture });

const cardTextureMap: Record<CardType, THREE.Texture> = {
    "0": spades_10_texture,
    "1": diamonds_5_texture,
};

const genericMaterials = [
    new THREE.MeshBasicMaterial({ color: 0x000000 }), // Left edge
    new THREE.MeshBasicMaterial({ color: 0x000000 }), // Right edge
    new THREE.MeshBasicMaterial({ color: 0x000000 }), // Top edge
    new THREE.MeshBasicMaterial({ color: 0x000000 }), // Bottom edge
];

const card = (cardType: CardType): THREE.Mesh => {
    const specificMaterials = [
        ...genericMaterials,
        new THREE.MeshBasicMaterial({ map: cardTextureMap[cardType] }),
    ];
    const mesh = new THREE.Mesh(cardGeometry, cardMaterial);

    return mesh;
};

export { card };
