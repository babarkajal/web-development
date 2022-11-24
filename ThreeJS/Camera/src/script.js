import "./style.css";
import * as THREE from "three";
import gsap from "gsap";

const cursor = {
  x: 0,
  y: 0,
};

window.addEventListener("mousemove", (event) => {
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = -(event.clientY / sizes.height - 0.5);
});
const canvas = document.querySelector(".webgl");

/* ------------------------------ create scene ------------------------------ */
const scene = new THREE.Scene();

/* ------------------------------ Creates Cubes ------------------------------ */
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "yellow" })
);
scene.add(mesh);

const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);
/* ------------------------- Set properties at once ------------------------- */
const sizes = {
  width: 800,
  height: 600,
};

/* 
PerspectiveCamera has four parameters 
1. field of view 
2. aspect ratio -> width / height
*/
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  200
);

/* 
OrthoGraphic has six parameters 
1. direction(left, right,top,bottom)
2. near and far
*/

/* const aspectRatio = sizes.width / sizes.height;
const camera = new THREE.OrthographicCamera(
  -1 * aspectRatio,
  1 * aspectRatio,
  1,
  -1,
  0.1,
  100
); */
// camera.position.x = 2;
// camera.position.y = 2;
camera.position.z = 2;
scene.add(camera);
camera.lookAt(mesh.position);

const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(sizes.width, sizes.height);

const clock = new THREE.Clock();
const tick = () => {
  const time = clock.getElapsedTime();

  //Using this we can see only front and side faces of the cube
  //   camera.position.x = cursor.x * 4;
  //   camera.position.y = cursor.y * 4;

  //For exploring the back face we have to use sin and cos
  camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
  camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
  camera.position.y = cursor.y * 6;
  camera.lookAt(mesh.position);

  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
