import {
    MeshBasicMaterial,
    BoxGeometry,
    Mesh,
    SRGBColorSpace,
    TextureLoader,
    Vector3
} from 'three';

const textureLoader = new TextureLoader();
const cardGeo = new BoxGeometry(0.4, 0.6, 0.001);

const rock1Texture = textureLoader.load('./assets/rock1.jpg');
rock1Texture.colorSpace = SRGBColorSpace;

const rock2Texture = textureLoader.load('./assets/rock2.jpg');
rock2Texture.colorSpace = SRGBColorSpace;

const rock3Texture = textureLoader.load('./assets/rock3.jpg');
rock3Texture.colorSpace = SRGBColorSpace;

const rock4Texture = textureLoader.load('./assets/rock4.jpg');
rock4Texture.colorSpace = SRGBColorSpace;

const coverTexture = textureLoader.load('./assets/card.png');
coverTexture.colorSpace = SRGBColorSpace;

const paperTexture = textureLoader.load('./assets/paper.png');
paperTexture.colorSpace = SRGBColorSpace;

const scissorTexture = textureLoader.load('./assets/scissor.png');
scissorTexture.colorSpace = SRGBColorSpace;

const card1Mat = [
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial({map: paperTexture}),
    new MeshBasicMaterial({map: coverTexture})
];

const card2Mat = [
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial({map: rock1Texture}),
    new MeshBasicMaterial({map: coverTexture})
];

const card3Mat = [
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial({map: rock2Texture}),
    new MeshBasicMaterial({map: coverTexture})
];

const card4Mat = [
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial({map: rock3Texture}),
    new MeshBasicMaterial({map: coverTexture})
];

const card5Mat = [
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial({map: rock4Texture}),
    new MeshBasicMaterial({map: coverTexture})
];

const card6Mat = [
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial({map: scissorTexture}),
    new MeshBasicMaterial({map: coverTexture})
];

const CARDS = [];

const myCardsPositions = [
    new Vector3(0.5, 6.004, 4.21),
    new Vector3(0.25, 6.003, 4.17),
    new Vector3(0, 6.002, 4.15),
    new Vector3(-0.25, 6.001, 4.17),
    new Vector3(-0.5, 6, 4.21)
];

const myCardsRotations = [
    new Vector3(-Math.PI / 2, 0, -0.15),
    new Vector3(-Math.PI / 2, 0, -0.10),
    new Vector3(-Math.PI / 2, 0, 0),
    new Vector3(-Math.PI / 2, 0, 0.10),
    new Vector3(-Math.PI / 2, 0, 0.15)
];

function configureCard(card, pos, rot, rNumb, name) {
    card.name = name;
    card.castShadow = true;
    card.position.copy(pos[rNumb]);
    card.rotation.set(rot[rNumb].x, rot[rNumb].y, rot[rNumb].z);
    pos.splice(rNumb, 1);
    rot.splice(rNumb, 1);
    CARDS.push(card);
}

const minimum = 0;
let maximum1 = myCardsPositions.length - 1;
let randomNumber1 = Math.floor(Math.random() * (maximum1 - minimum + 1)) + minimum;

const card1 = new Mesh(cardGeo, card1Mat);
configureCard(card1, myCardsPositions, myCardsRotations, randomNumber1, 'hand playerCard1 paper');

const card2 = new Mesh(cardGeo, card2Mat);
maximum1 = myCardsPositions.length - 1;
randomNumber1 = Math.floor(Math.random() * (maximum1 - minimum + 1)) + minimum;
configureCard(card2, myCardsPositions, myCardsRotations, randomNumber1, 'hand playerCard2 rock');

const card3 = new Mesh(cardGeo, card3Mat);
maximum1 = myCardsPositions.length - 1;
randomNumber1 = Math.floor(Math.random() * (maximum1 - minimum + 1)) + minimum;
configureCard(card3, myCardsPositions, myCardsRotations, randomNumber1, 'hand playerCard3 rock');

const card4 = new Mesh(cardGeo, card4Mat);
maximum1 = myCardsPositions.length - 1;
randomNumber1 = Math.floor(Math.random() * (maximum1 - minimum + 1)) + minimum;
configureCard(card4, myCardsPositions, myCardsRotations, randomNumber1, 'hand playerCard4 rock');

const card5 = new Mesh(cardGeo, card5Mat);
maximum1 = myCardsPositions.length - 1;
randomNumber1 = Math.floor(Math.random() * (maximum1 - minimum + 1)) + minimum;
configureCard(card5, myCardsPositions, myCardsRotations, randomNumber1, 'hand playerCard5 rock');

const opponentCardsPositions = [
    new Vector3(0.5, 8.47, 2.5),
    new Vector3(0.25, 8.5, 2.501),
    new Vector3(0, 8.515, 2.502),
    new Vector3(-0.25, 8.5, 2.503),
    new Vector3(-0.5, 8.47, 2.504)
];

const opponentCardsRotations = [
    new Vector3(2 * Math.PI, Math.PI, 0.15),
    new Vector3(2 * Math.PI, Math.PI, 0.10),
    new Vector3(2 * Math.PI, Math.PI, 0),
    new Vector3(2 * Math.PI, Math.PI, -0.10),
    new Vector3(2 * Math.PI, Math.PI, -0.15)
];

let maximum2 = opponentCardsPositions.length - 1;
let randomNumber2 = Math.floor(Math.random() * (maximum2 - minimum + 1)) + minimum;;

const card6 = new Mesh(cardGeo, card6Mat);
configureCard(card6, opponentCardsPositions, opponentCardsRotations, randomNumber2, 'scissor');

const card7 = new Mesh(cardGeo, card2Mat);
maximum2 = opponentCardsPositions.length - 1;
randomNumber2 = Math.floor(Math.random() * (maximum2 - minimum + 1)) + minimum;
configureCard(card7, opponentCardsPositions, opponentCardsRotations, randomNumber2, 'rock');

const card8 = new Mesh(cardGeo, card3Mat);
maximum2 = opponentCardsPositions.length - 1;
randomNumber2 = Math.floor(Math.random() * (maximum2 - minimum + 1)) + minimum;
configureCard(card8, opponentCardsPositions, opponentCardsRotations, randomNumber2, 'rock');

const card9 = new Mesh(cardGeo, card4Mat);
maximum2 = opponentCardsPositions.length - 1;
randomNumber2 = Math.floor(Math.random() * (maximum2 - minimum + 1)) + minimum;
configureCard(card9, opponentCardsPositions, opponentCardsRotations, randomNumber2, 'rock');

const card10 = new Mesh(cardGeo, card5Mat);
maximum2 = opponentCardsPositions.length - 1;
randomNumber2 = Math.floor(Math.random() * (maximum2 - minimum + 1)) + minimum;
configureCard(card10, opponentCardsPositions, opponentCardsRotations, randomNumber2, 'rock');

export {CARDS, paperTexture, scissorTexture}