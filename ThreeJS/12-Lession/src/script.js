import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const tLoader = new THREE.TextureLoader();
const colorTex = new tLoader.load("/textures/door/color.jpg");
const alpha = new tLoader.load("/textures/door/alpha.jpg");
const height = new tLoader.load("/textures/door/height.jpg");
const normal = new tLoader.load("/textures/door/normal.jpg");
const metal = new tLoader.load("/textures/door/metalness.jpg");
const ambient = new tLoader.load("/textures/door/ambientOcclusion.jpg");
const rough = new tLoader.load("/textures/door/roughness.jpg");
const matCap = new tLoader.load("/textures/matcaps/9.png");
const gradient = new tLoader.load("/textures/gradients/3.jpg");
/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**--------------------------- MeshBasicMaterial --------------------------- 
/* const material = new THREE.MeshBasicMaterial();
//We can set color using color instance
material.map = colorTex;
material.color = new THREE.Color("yellow");
material.transparent = true;
material.opacity = 0.5;
material.alphaMap = alpha;
material.side = THREE.DoubleSide; */

/* --------------------------- MeshNormalMaterial --------------------------- 
const material = new THREE.MeshNormalMaterial();
material.flatShading = true; */

/* --------------------------- MeshMaptcapMaterial --------------------------- 
const material = new THREE.MeshMatcapMaterial();
material.matcap = matCap;
*/

/* ---------------------------- MeshDepthMaterial --------------------------- */

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
scene.add(new THREE.PointLight(0xffffff, 0.5));
const material = new THREE.MeshDepthMaterial();
const sphere = new THREE.Mesh(
  new THREE.SphereBufferGeometry(0.5, 16, 16),
  material
);

const plane = new THREE.Mesh(new THREE.PlaneBufferGeometry(1, 1), material);
scene.add(sphere, plane);

const torus = new THREE.Mesh(
  new THREE.TorusBufferGeometry(0.5, 0.2, 16, 32),
  material
);
torus.position.x = 1.5;
sphere.position.x = -1.5;
scene.add(sphere, plane, torus);

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
camera.position.z = 2;
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

  //rotate
  sphere.rotation.y = 0.1 * elapsedTime;
  plane.rotation.y = 0.1 * elapsedTime;
  torus.rotation.y = 0.1 * elapsedTime;
  sphere.rotation.x = 0.15 * elapsedTime;
  plane.rotation.x = 0.15 * elapsedTime;
  torus.rotation.x = 0.15 * elapsedTime;
  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
