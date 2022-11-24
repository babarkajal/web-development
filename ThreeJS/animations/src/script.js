import "./style.css";
import * as THREE from "three";
import gsap from "gsap";

const canvas = document.querySelector(".webgl");

/* ------------------------------ create scene ------------------------------ */
const scene = new THREE.Scene();

/* ------------------------------ Creates Cubes ------------------------------ */
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(0.5, 0.5, 0.5),
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

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 2;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(sizes.width, sizes.height);

// let time = Date.now();
/* const clock = new THREE.Clock();
const tick = () => {
  // Common animation rate by using time
     const currentTime = Date.now();
    const deltaTime = currentTime - time;
    time = currentTime;
    // update objects
    mesh.position.x += 0.001 * deltaTime;

  // Get the time using Clock class of THREE
  const elapsedTime = clock.getElapsedTime();
    mesh.rotation.x = elapsedTime * Math.PI * 2;
  mesh.position.x = Math.sin(elapsedTime);
  camera.lookAt(mesh.position);

  //Now stable the cube and rorate the camera
    camera.position.x = elapsedTime;

  //Now

  //Render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};
tick(); */

/* -------------------------- Animation Using gsap -------------------------- */
gsap.to(mesh.position, { duration: 1, delay: 1, x: 1 });

const tick = () => {
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
