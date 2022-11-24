import "./style.css";
import * as THREE from "three";
import { Camera } from "three";

const canvas = document.querySelector(".webgl");

/* ------------------------------ create scene ------------------------------ */
const scene = new THREE.Scene();
/* 
Create a group */
const group = new THREE.Group();
scene.add(group);

//Move entire group
group.position.y = 1;
group.scale.y = 1.5;
group.rotation.y = -0.5;

/* ------------------------------ Creates Cubes ------------------------------ */
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.5, 0.5, 0.5),
  new THREE.MeshBasicMaterial({ color: "green" })
);
group.add(cube1);
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(0.5, 0.5, 0.5),
  new THREE.MeshBasicMaterial({ color: "cyan" })
);
group.add(cube2);
cube2.position.x = -2;

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(0.5, 0.5, 0.5),
  new THREE.MeshBasicMaterial({ color: "pink" })
);
group.add(cube3);
cube3.position.x = 2;

const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);
/* ------------------------- Set properties at once ------------------------- */
const sizes = {
  width: 1500,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
//Move camera to the user side to see the camera
camera.position.z = 2;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
