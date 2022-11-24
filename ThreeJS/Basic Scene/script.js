console.log(THREE);
/* ------------------------- Get the canvas element ------------------------- */
const canvas = document.querySelector(".webgl");

/* ----------------------- Create a scene using THREE ----------------------- */
const scene = new THREE.Scene();

/* --------------------------- Create box Geometry -------------------------- */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "#ff0000",
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

/* ----------------------------- Camera for View ---------------------------- */
const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
//Move camera to the user side to see the camera

camera.position.z = 3;
scene.add(camera);

/* -------------------------------- Renderer -------------------------------- */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
