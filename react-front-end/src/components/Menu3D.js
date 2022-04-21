import React from "react";
import './Menu3D.scss'

import * as THREE from 'three';

export default function Menu(props) {

  let scene, camera, renderer, cube, hemiLight;

  const init = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 25, 25);

    // lighting
    hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4);
    scene.add(hemiLight);

    // const geometry = new THREE.BoxGeometry(2, 2, 2);
    // const geometry = new THREE.SphereGeometry( 15, 32, 16 );
    const geometry = new THREE.IcosahedronGeometry( 10, 1 );
    const material = new THREE.MeshLambertMaterial( {color: 0x3b8fa8} );
    cube = new THREE.Mesh( geometry, material );
    cube.position.set(0, 25, 0);
    scene.add(cube);

    // right cube
    const geometry1 = new THREE.BoxGeometry(10, 10, 10);
    const material1 = new THREE.MeshLambertMaterial( {color: 0x6c7b94} );
    const cube1 = new THREE.Mesh( geometry1, material1 );
    cube1.position.set(15, 25, 0);
    scene.add(cube1);

    // left cube
    const geometry2 = new THREE.BoxGeometry(10, 10, 10);
    const material2 = new THREE.MeshLambertMaterial( {color: 0x6c7b94} );
    const cube2 = new THREE.Mesh( geometry2, material2 );
    cube2.position.set(-15, 25, 0);
    scene.add(cube2);

    scene.add(new THREE.AxesHelper(500));

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    window.addEventListener('keydown', (e) => {
      if (e.key === "ArrowRight") {
        cube.rotation.y += 0.2;
      } else if (e.key === "ArrowLeft") {
        cube.rotation.y -= 0.2;
      }
    });
  };

  function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
  }

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  window.addEventListener('resize', onWindowResize, false);

  init();
  animate();

  return (
    <div class='menu-3d'>
      {/* <canvas>
      </canvas> */}
    </div>
    
  );
}