import "./style.css";
import * as THREE from "three";
import { Camera, Vector3 } from "three";

const canvas = document.querySelector(".webgl");

/* ------------------------------ create scene ------------------------------ */
const scene = new THREE.Scene();
scene.background = new THREE.Color("black");

const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);
/* ------------------------- Set properties at once ------------------------- */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

const v1 = new Vector3(1, 1, 1);
const v2 = new Vector3();
console.log("Distance ", v2.distanceTo(v1));

//Move camera to the user side to see the camera
camera.position.z = 2;
camera.position.x = 0.1;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
