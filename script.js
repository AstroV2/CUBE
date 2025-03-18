import * as THREE from 'three';

// Initialize Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('glitch-canvas') });
renderer.setSize(window.innerWidth, window.innerHeight);

// Create a simple geometry (example)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Color Glitch
    if (Math.random() < 0.2) {
        cube.material.color.setHSL(Math.random(), 1, 0.5);
    }

    // Position Glitch
    if (Math.random() < 0.2) {
        cube.position.x += (Math.random() - 0.5) * 0.5;
        cube.position.y += (Math.random() - 0.5) * 0.5;
        cube.position.z += (Math.random() - 0.5) * 0.5;
    } else {
        cube.position.set(0, 0, 0);
    }

    // Scale Glitch
    if (Math.random() < 0.1) {
        cube.scale.x = Math.random() * 2;
        cube.scale.y = Math.random() * 2;
        cube.scale.z = Math.random() * 2;
    } else {
        cube.scale.set(1, 1, 1);
    }

    // Rotation Glitch
    if (Math.random() < 0.1) {
        cube.rotation.x += Math.random() * Math.PI;
        cube.rotation.y += Math.random() * Math.PI;
        cube.rotation.z += Math.random() * Math.PI;
    }

    // More Glitch - Shearing
    if (Math.random() < 0.05) {
        cube.scale.x += (Math.random() - 0.5) * 0.5;
        cube.scale.y += (Math.random() - 0.5) * 0.5;
    }

    renderer.render(scene, camera);
}

animate();
