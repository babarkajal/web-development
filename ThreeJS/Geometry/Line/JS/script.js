import "./style.css";
import * as THREE from "three";
import { BufferGeometry, WebGLRenderer } from "three";
const canvas = document.querySelector(".webgl");
const scene = new THREE.Scene();

//Set a color to the scene using Color class
scene.background = new THREE.Color("cyan");

const material = new THREE.LineBasicMaterial({
  color: "blue",
});

const camera = new THREE.PerspectiveCamera(75, 1000 / 800);
scene.add(camera);
camera.position.z = 10;

//Creates points
const points = [];
points.push(new THREE.Vector3(-5, 0, 0));
points.push(new THREE.Vector3(5, 0, 0));
const axisHelper = new THREE.AxesHelper();
scene.add(axisHelper);
//Set points
const geometry = new BufferGeometry().setFromPoints(points);
//Generate line
const line = new THREE.Line(geometry, material);
scene.add(line);

const renderer = new WebGLRenderer({ canvas: canvas });
renderer.setSize(1000, 800);
renderer.render(scene, camera);
