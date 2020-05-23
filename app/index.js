import './index.scss';
import * as THREE from "three";

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1.0, 1000);

let renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;


// do your stuffs here
let planeGeometry = new THREE.PlaneBufferGeometry(2, 2, 4);
let planeMaterial = new THREE.MeshBasicMaterial({color: 0xa8e6cf});
let planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(planeMesh);


animate();

function animate() {
  requestAnimationFrame(animate);

  planeMesh.rotation.x += 0.1 * 0.08;
  planeMesh.rotation.y += 0.1 * 0.08;

  renderer.render(scene, camera);
}