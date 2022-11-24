import "./style.css";
import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const canvas = document.querySelector(".webgl");
const scene = new THREE.Scene();
const material = new THREE.MeshBasicMaterial({
  color: "yellow",
  wireframe: true,
});
// const mesh = new THREE.Mesh(
//   /*
//    * BoxGeometry has six parameters as x, y,z , noOfPartitions on x, noOfPartitions on y , noOfPartitions on z
//    */
//   new THREE.BoxGeometry(1, 1, 1, 8, 8, 8),
//   material
// );

/* ------------------------- Create our own geometry ------------------------ */
//Create Geometry
/* const triangle = new THREE.Geometry();
// Create vertices
const v1 = new THREE.Vector3(0, 0, 0);
triangle.vertices.push(v1);
const v2 = new THREE.Vector3(0, 1, 0);
triangle.vertices.push(v2);
const v3 = new THREE.Vector3(0.5, 0, 0);
triangle.vertices.push(v3);
const v4 = new THREE.Vector3(1, 0, 0);
triangle.vertices.push(v4);

//Create face
const face = new THREE.Face3(0, 1, 2);
triangle.faces.push(face);

const mesh = new THREE.Mesh(triangle, material); */

/* ---------------- Create Multiple triangles using for loop ---------------- */
/* const geometry = new THREE.Geometry();

for (let i = 0; i < 50; i++) {
  for (let j = 0; j < 3; j++) {
    geometry.vertices.push(
      new THREE.Vector3(
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4
      )
    );
  }
  let verticeIndex = i * 3;
  geometry.faces.push(
    new THREE.Face3(verticeIndex, verticeIndex + 1, verticeIndex + 2)
  );
} */

/* ------------------------- Create BufferedGeoMetry ------------------------ */
const position = new Float32Array([0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0]);
// First way to create vertices array
//First vertex
/* position[0] = 0;
position[1] = 0;
position[2] = 0;
//Second vertex
position[3] = 0;
position[4] = 1;
position[5] = 0;
//Third vertex
position[6] = 1;
position[7] = 0;
position[8] = 0; */
// Now send this array to BufferAttribute
const positionAttribute = new THREE.BufferAttribute(position, 4);
const geometry = new THREE.BufferGeometry();
geometry.setAttribute("position", positionAttribute);

const mesh = new THREE.Mesh(geometry, material);
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
