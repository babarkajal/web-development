import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import gsap from "gsap";
import * as dat from "dat.gui";
import { AxesHelper } from "three";

/**
 * Create GUI
 */
const gui = new dat.GUI({ closed: true, width: 400 });
const parameters = {
  color: "#ff0000",
  spin: () => {
    gsap.to(mesh.rotation, { y: mesh.rotation.y + 1, duration: 2 });
  },
};
/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();
scene.add(new AxesHelper());
/**
 * Object
 */
const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: parameters.color });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
mesh.position.z = 0.5;
/**
 * add method
 * @params object
 * @params property
 * @params minimum
 * @params maximum
 * @params step or precision
 */
gui.add(mesh.position, "y", -3, 3, 0.01).name("Y axis");
// gui.add(mesh.position, "x", -3, 3, 0.01);
// gui.add(mesh.position, "z", -4, 9, 0.01);

// We can use min and max methods to add values
gui.add(mesh.position, "y").min(-2).max(2).step(0.01).name("elevation");

//Checkbox property
gui.add(mesh, "visible");
gui.add(mesh.material, "wireframe");

/**
 * For color: addColor method of parameters and change the material coloe on change
 */
gui.addColor(parameters, "color").onChange(() => {
  material.color.set(parameters.color);
});

/**
 * Spin: create a spin in parameters object
 */
gui.add(parameters, "spin");
/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 3;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
