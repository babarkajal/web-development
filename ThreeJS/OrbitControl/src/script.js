import "./style.css";
import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const canvas = document.querySelector(".webgl");
const scene = new THREE.Scene();
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "yellow", wireframe: true })
);
scene.add(mesh);

const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

const sizes = {
  width: window.outerWidth,
  height: window.outerHeight,
};

//When we change the screen change the sizes
window.addEventListener("resize", () => {
  //Update the size of viewport
  (sizes.width = window.outerWidth), (sizes.height = window.innerHeight);

  //Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

//Listen to the double click event
window.addEventListener("dblclick", () => {
  const fullScreen =
    document.fullscreenElement || document.webkitFullscreenElement;
  if (!fullScreen) {
    if (canvas.requestFullscreen) canvas.requestFullscreen();
    else canvas.requestWebkitFullscreen();
  } else {
    document.exitFullscreen();
  }
});

const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  200
);

camera.position.z = 2;
scene.add(camera);
camera.lookAt(mesh.position);

/* ----------------------------- Create Controls ---------------------------- */
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
const clock = new THREE.Clock();
const tick = () => {
  const time = clock.getElapsedTime();
  camera.lookAt(mesh.position);
  controls.update();

  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
