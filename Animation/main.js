import * as THREE from 'three';

//create the scene and position the camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5);
camera.position.z = 2;
camera.position.set(2, 3, 2); //this makes the cube look at an angle
camera.lookAt(2, 2, 0);

//creating the cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
let cube = new THREE.Mesh(geometry, material);

/*
//creating a dodecahedron
const geometry1 = new THREE.DodecahedronGeometry(0.8, 0);
const material1 = new THREE.MeshStandardMaterial({ color: 0xffffff });
let polygon = new THREE.Mesh(geometry1, material1);

//creating a sphere
const sphereGeometry = new THREE.SphereGeometry(0.7);
const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
*/

//create the renderer
let renderer, cubeColor, polyColor, sphereColor, rand, t;
let count = 0;

//boolean stuff for sceneBuild and animate
let firstClick = true;
let currentState;
var myEvent;

let updateState = new Function();

//error-catching functions
document.onkeydown = function (e) {
    myEvent = e || window.event;
}

document.querySelector('#run_button').addEventListener('click', call)

function call() {
    if (firstClick == true) {
        sceneBuild();
        callSynth();
    }
    else {
        callSynth();
    }
}

function sceneBuild() { //function called when "Animate" is pressed
    firstClick = !firstClick
    renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    document.getElementById("render").appendChild(renderer.domElement)
    currentState = 0;
    function animate() {
        requestAnimationFrame(animate);
        t += 1;
        rand = Math.random();
        updateState(myEvent);
        cube.material.color.set(cubeColor);
        //polygon.material.color.set(polyColor);
        //sphere.material.color.set(sphereColor);
        myEvent = "";
        renderer.clear();
        renderer.render(scene, camera);
    }
    animate();
}
function callSynth() {// get the object that we are dealing with
    scene.clear();

    // in progress: only have cube example for now
    reset(cube);
    scene.add(cube);

    const pointLight = new THREE.PointLight(0xfffffff);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const data = document.getElementById('codeText').value;
    let genCode =
        `(function (e){\n` + data + "})";
    updateState = eval(genCode);
    if (renderer != null && firstClick == false) {
        renderer.clear();
    }
}

function reset(c) {
    c.scale.set(1, 1, 1);
    c.position.set(2, 2, 0);
    c.rotation.set(0, 0, 0);
    t = 2;
    count = 2;
    cubeColor = 0xffffff;
    polyColor = 0xffffff;
    sphereColor = 0xffffff;
}

// Generated from TSL ChatGPT
// Functions
function rotateLeft(cube) {
    cube += 0.1;  // Increment y rotation, adjust the value based on needed rotation speed
    return cube;  // Return the new rotation for verification or further processing
}

function rotateRight(cube) {
    cube -= 0.1;  // Decrement y rotation, adjust the value based on needed rotation speed
    return cube;  // Return the new rotation for verification or further processing
}

function pressL(e) {
    if (e instanceof KeyboardEvent) {
        return e.keyCode === 37;
        console.log('pressL');
    }
}
function pressR(e) {
    if (e instanceof KeyboardEvent) {
        return e.keyCode === 39;
        console.log('pressR');
    }
}