import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

/**
 * Textures solution 1
 */
/* const image = new Image();
const texture = new THREE.Texture(image);
image.onload = () => {
  //after loading the image update the texture
  texture.needsUpdate = true;
};
image.src = "/textures/door/color.jpg"; */

/**
 * Textures solution 2
 */
const loadingManager = new THREE.LoadingManager();

//Listen to the loadingManager events
loadingManager.onStart = () => console.log("Loading manager OnStart");
loadingManager.onLoad = () => console.log("Loading manager Onload");
loadingManager.onProgress = () => console.log("Loading manager onProgress");
loadingManager.onError = () => console.log("Loading manager onError");

const textureLoader = new THREE.TextureLoader(loadingManager);
const colorTexture = textureLoader.load(
  "./textures/door/color.jpg",
  //Events for texture
  () => {
    console.log("Loaded completed");
  },
  () => {
    console.log("Progress");
  },
  () => {
    console.log("error");
  }
);

const alphaTexture = textureLoader.load("./textures/door/alpha.jpg");
const heightTexture = textureLoader.load("./textures/door/height.jpg");
const normalTexture = textureLoader.load("./textures/door/normal.jpg");
const ambient = textureLoader.load("./textures/door/ambientOcclusion.jpg");
const metal = textureLoader.load("./textures/door/metalness.jpg");
const rough = textureLoader.load("./textures/door/roughness.jpg");

/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Object
 */
const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ map: colorTexture });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

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
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 1;
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
