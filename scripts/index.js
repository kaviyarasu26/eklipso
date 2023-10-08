import * as THREE from 'three';
import { OrbitControls } from '../src/jsm/controls/OrbitControls.js';
import { GLTFLoader } from '../src/jsm/loaders/GLTFLoader.js';
//import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';



let scene, camera, renderer, controls;
var Earth, Moon;
let background = document.getElementById('background');
function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 5000);
  camera.position.z = 1000;

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  background.appendChild(renderer.domElement);
  renderer.setClearColor(0x000000, 0);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener('change', render);



  const AmbientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(AmbientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 30);
  directionalLight.position.set(31, 0, 1);
  directionalLight.castShadow = true;
  scene.add(directionalLight);


  const loader = new GLTFLoader();
  loader.load('../model/Earth/Earth_1_12756.glb', function (gltf) {
    Earth = gltf.scene.children[0];
    Earth.scale.set(0.6, 0.6, 0.6);
    Earth.position.x = -400;
    scene.add(gltf.scene);
    animate();
  });
}


function animate() {
  renderer.render(scene, camera);
  Earth.rotation.y += 0.005;
  requestAnimationFrame(animate);
}

function render() {
  renderer.render(scene, camera);
}

init();
