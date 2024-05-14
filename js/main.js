import * as THREE from "three";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

scene.add(camera);
camera.position.z = 5;
camera.position.y += 3;


const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xfffff, 1); //bachground color
document.body.appendChild(renderer.domElement); //add the renderer to our html

// Créer les lumières une seule fois et les réutiliser
const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); // Lumière ambiante douce blanche
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); // Lumière directionnelle blanche
directionalLight.position.set(5, 10, 3);
scene.add(ambientLight, directionalLight);
const geometry = new THREE.BoxGeometry(1, 1, 1); //BoxGeometry is the shape of the object
const material = new THREE.MeshBasicMaterial({ color: "grey" }); //color of the object
const cube = new THREE.Mesh(geometry, material);

// var mtlLoader = new MTLLoader();
// mtlLoader.load("../.OBJ/Boxes.mlt", function (materials) {
//   materials.preload();

//   var objLoader = new OBJLoader();
//   objLoader.setMaterials(materials);
//   objLoader.load("../.OBJ/Boxes.obj", function (object) {
//     // Créer un matériau rouge
//     const redMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Rouge pur

//     // Appliquer le matériau rouge à tous les meshes de l'objet
//     object.traverse(function (child) {
//       if (child instanceof THREE.Mesh) {
//         child.material = redMaterial;
//       }
//     });

//     // Ajuster la taille et la position de l'objet
//     //object.scale.set(1, 1, 1);
//     object.position.set(10, -2.5, -19);

//     // Ajouter l'objet à la scène
//     scene.add(object);
//   });
// });
// // scene.add(cube);

//////////////////////////////////////////////1
var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/crate1.mtl", function (materials) {
  console.log("Materials loaded:", materials); // Check for successful loading

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/crate1.obj", function (object) {
    console.log("Object loaded:", object); // Check for successful loading

    // Adjust size and position
    object.scale.set(2, 2, 2);
    object.position.set(10, -1.1, -18);
    object.rotateX(Math.PI / 2);
    object.rotateY(Math.PI);

    // Add lights (optional)
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); // Soft white ambient light
    scene.add(ambientLight);

    // Add directional light (optional)
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); // White directional light
    directionalLight.position.set(5, 10, 3); // Adjust light position
    scene.add(directionalLight);

    // Add the object to the scene
    scene.add(object);
  });
});
var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/11740_shoes_v1_L3.mtl", function (materials) {
  console.log("Materials loaded:", materials); // Check for successful loading

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/11740_shoes_v1_L3.obj", function (object) {
    console.log("Object loaded:", object); // Check for successful loading

    // Adjust size and position
    object.scale.set(0.14, 0.14, 0.14);
    object.position.set(-10, 0.9, -17);
    object.rotateX(Math.PI / 2);
    object.rotateY(Math.PI);
    object.rotateZ(Math.PI);

    // Add lights (optional)
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); // Soft white ambient light
    scene.add(ambientLight);

    // Add directional light (optional)
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); // White directional light
    directionalLight.position.set(5, 10, 3); // Adjust light position
    scene.add(directionalLight);

    // Add the object to the scene
    scene.add(object);
  });
});

/////////////////////////////////////////////////2
var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/crate1.mtl", function (materials) {
  console.log("Materials loaded:", materials); // Check for successful loading

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/crate1.obj", function (object) {
    console.log("Object loaded:", object); // Check for successful loading

    // Adjust size and position
    object.scale.set(2, 2, 2);
    object.position.set(0, -1.1, -18);
    object.rotateX(Math.PI / 2);
    object.rotateY(Math.PI);

    // Add lights (optional)
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); // Soft white ambient light
    scene.add(ambientLight);

    // Add directional light (optional)
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); // White directional light
    directionalLight.position.set(5, 10, 3); // Adjust light position
    scene.add(directionalLight);

    // Add the object to the scene
    scene.add(object);
  });
});
var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/11743_Soccer_Shoes_v1_l3.mtl", function (materials) {
  console.log("Materials loaded:", materials); // Check for successful loading

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/11743_Soccer_Shoes_v1_l3.obj", function (object) {
    console.log("Object loaded:", object); // Check for successful loading

    // Adjust size and position
    object.scale.set(0.3, 0.3, 0.3);
    object.position.set(3.3, 0.7, -20);
    object.rotateX(Math.PI / 2);
    object.rotateY(Math.PI);


    // Add lights (optional)
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); // Soft white ambient light
    scene.add(ambientLight);

    // Add directional light (optional)
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); // White directional light
    directionalLight.position.set(5, 10, 3); // Adjust light position
    scene.add(directionalLight);

    // Add the object to the scene
    scene.add(object);
  });
});


//////////////////////////////////////////////////////3
var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/crate1.mtl", function (materials) {
  console.log("Materials loaded:", materials); // Check for successful loading

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/crate1.obj", function (object) {
    console.log("Object loaded:", object); // Check for successful loading

    // Adjust size and position
    object.scale.set(2, 2, 2);
    object.position.set(-10, -1.1, -18);
    object.rotateX(Math.PI / 2);
    object.rotateY(Math.PI);

    // Add lights (optional)
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); // Soft white ambient light
    scene.add(ambientLight);

    // Add directional light (optional)
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); // White directional light
    directionalLight.position.set(5, 10, 3); // Adjust light position
    scene.add(directionalLight);

    // Add the object to the scene
    scene.add(object);
  });
});

var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/shoe.mtl", function (materials) {
  console.log("Materials loaded:", materials); // Check for successful loading

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/shoe.obj", function (object) {
    console.log("Object loaded:", object); // Check for successful loading

    // Adjust size and position
    object.scale.set(0.07, 0.07, 0.07);
    object.position.set(9.5, 0.8, -16);
    object.rotateY(Math.PI);
   

    // Add lights (optional)
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); // Soft white ambient light
    scene.add(ambientLight);

    // Add directional light (optional)
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); // White directional light
    directionalLight.position.set(5, 10, 3); // Adjust light position
    scene.add(directionalLight);

    // Add the object to the scene
    scene.add(object);
  });
});
//////////////////////////////////////////////////////4

var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/Desk.mtl", function (materials) {
  console.log("Materials loaded:", materials); // Check for successful loading

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/Desk.obj", function (object) {
    console.log("Object loaded:", object); // Check for successful loading

    // Adjust size and position
    object.scale.set(10, 10, 10);
    object.position.set(-30, -1.1, -12);
    object.rotateX(Math.PI / 2);
    object.rotateY(Math.PI);
    object.rotateZ(Math.PI/2);
    

    // Add lights (optional)
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); // Soft white ambient light
    scene.add(ambientLight);

    // Add directional light (optional)
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); // White directional light
    directionalLight.position.set(5, 10, 3); // Adjust light position
    scene.add(directionalLight);

    // Add the object to the scene
    scene.add(object);
  });
});
//controlers
document.addEventListener("keydown", onkeydown, false);

//Create a texture loader instance
const textureLoader = new THREE.TextureLoader();

// Load the floor texture asynchronously
textureLoader.load(
  "img/Floor.jpg", // Path to the texture image
  function (texture) {
    // Once the texture is loaded, you can use it
    // For example, you can create a material with this texture
    const floorMaterial = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide,
    });
    floorMaterial.map.wrapS = THREE.RepeatWrapping;
    floorMaterial.map.wrapT = THREE.RepeatWrapping;
    floorMaterial.map.repeat.set(20, 20);

    // Then you can use this material to create a mesh
    // Assuming you have geometry for the floor
    const floorGeometry = new THREE.PlaneGeometry(100, 100); // Example size
    const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);

    floorMesh.rotation.x = Math.PI / 2;
    floorMesh.position.y = -Math.PI;
    // Add the floor mesh to the scene
    scene.add(floorMesh);
  },
  undefined, // onProgress callback (optional)
  function (error) {
    console.error("An error occurred while loading the texture:", error);
  }
);

//wall

const wallgroup = new THREE.Group();
scene.add(wallgroup);
const textureWall = textureLoader.load("/img/wall.jpg");

const front2wall = new THREE.Mesh(
  new THREE.BoxGeometry(100, 20, 0.001),
  new THREE.MeshBasicMaterial({ map: textureWall })
);
front2wall.position.z = 20;

const frontwall = new THREE.Mesh(
  new THREE.BoxGeometry(100, 20, 0.001),
  new THREE.MeshBasicMaterial({ map: textureWall })
);
frontwall.position.z = -20;

const leftwall = new THREE.Mesh(
  new THREE.BoxGeometry(100, 20, 0.001),
  new THREE.MeshBasicMaterial({ map: textureWall })
);
leftwall.rotation.y = Math.PI / 2;
leftwall.position.x = -50;

const rightwall = new THREE.Mesh(
  new THREE.BoxGeometry(100, 20, 0.001),
  new THREE.MeshBasicMaterial({ map: textureWall })
);
rightwall.rotation.y = Math.PI / 2;
rightwall.position.x = 50;

wallgroup.add(frontwall, leftwall, rightwall, front2wall);

//ceiling

const ceilingGeometry = new THREE.PlaneGeometry(100, 100); // Corrected class name
const ceilingMat = new THREE.MeshBasicMaterial({ map: textureWall });
ceilingMat.receiveShadow = true; // Enable receiving shadows
const ceilingplane = new THREE.Mesh(ceilingGeometry, ceilingMat);
scene.add(ceilingplane);
scene.add(ceilingplane);
ceilingplane.rotation.x = Math.PI / 2;
ceilingplane.position.y = 10;

// for(let i = 0 ; i<wallgroup.children.length ;  i++)
// {
//     wallgroup.children[i].BBox=new THREE.Box3();
//     wallgroup.childreen[i].BBox.setFromObject(wallgroup.children[i]);
// }

function createpainting(imageURL, width, heigh, position) {
  const textureLoader = new THREE.TextureLoader();
  const paintingTexture = textureLoader.load(imageURL);
  const material = new THREE.MeshBasicMaterial({ map: paintingTexture });
  const geometry = new THREE.PlaneGeometry(width, heigh);
  const painting = new THREE.Mesh(geometry, material);
  painting.position.set(position.x, position.y, position.z);
  return painting;
}
const painting1 = createpainting(
  "/artwork/0.jpg",
  10,
  5,
  new THREE.Vector3(10, 5, -19.99)
);
const painting2 = createpainting(
  "/artwork/1.jpg",
  10,
  5,
  new THREE.Vector3(-10, 5, -19.99)
);
scene.add(painting1, painting2);

//souris
const controllers = new PointerLockControls(camera, document.body);
function startExperience() {
  controllers.lock();
  hideMenu();
}

const playButton = document.getElementById("play_button");
function hideMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = "none";
}
function showMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = "block";
}
playButton.addEventListener("click", startExperience);
controllers.addEventListener("unlock", showMenu);
//create the floor and added to the scene
function onkeydown(event) {
  let keycode = event.which || event.keyCode;
  if (keycode == 39 || keycode == 68) {
    controllers.moveRight(0.08);
  } else if (keycode == 37 || keycode == 65) {
    controllers.moveRight(-0.08);
  } else if (keycode == 38 || keycode == 87) {
    controllers.moveForward(0.08);
  } else if (keycode == 40 || keycode == 83) {
    controllers.moveForward(-0.08);
  }
}

let render = function () {
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(render);
};

render();
