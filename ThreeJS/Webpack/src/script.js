import "./style.css";
import * as THREE from "three";

const canvas = document.querySelector(".webgl");

/* ------------------------------ create scene ------------------------------ */
const scene = new THREE.Scene();

const geomatry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(geomatry, material);
scene.add(mesh);
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;
mesh.position.set(0, 0, 0);

// Scale
mesh.scale.x = 1;
mesh.scale.y = 0.5;
mesh.scale.z = 0.5;

//Rotation: Here on changing the x axis we change the direction on y axis z axis so its better to set order of rotation
mesh.rotation.reorder("YXZ");
mesh.rotation.y = Math.PI / 2 - 1;
// mesh.rotation.x = Math.PI / 2 - 1;
// mesh.rotation.z = Math.PI / 2 - 1;
/* ------------------------------- Create axis ------------------------------ */
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);
/* ------------------------- Set properties at once ------------------------- */
const sizes = {
  width: 900,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
//Move camera to the user side to see the camera
camera.position.z = 2;
// camera.position.z = 1;
// camera.position.z = 1;
scene.add(camera);

//Set the camera for the particular object
camera.lookAt(mesh.position);

const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
