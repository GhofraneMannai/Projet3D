import * as THREE from 'three';

const scene = new THREE.Scene();
const camera=new THREE.PerspectiveCamera(
    75,
   window.innerWidth / window.innerHeight ,
   0.1,
   1000
);

scene.add(camera);
camera.position.z=5;

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth , window.innerHeight );
renderer.setClearColor(0xfffff, 1); //bachground color
document.body.appendChild(renderer.domElement); //add the renderer to our html

//ambient Light
let ambientLight = new THREE.AmbientLight(0x101010, 1.0) //color , intensity , distance , decay
ambientLight.position.copy(camera.position);
scene.add(ambientLight)


//Directionnal Light
let sunLight = new THREE.DirectionalLight(0xdddd , 1.0); //color , intensity
sunLight.position.y=15;
scene.add(sunLight);



let geometry = new THREE.BoxGeometry(1, 1, 1)  //BoxGeometry is the shape of the object
let  material = new THREE.MeshBasicMaterial({ color: 'grey'}); //color of the object
let cube = new THREE.Mesh(geometry, material);  
scene.add(cube);
//controlers
document.addEventListener('keydown', onkeydown , false);

//Create a texture loader instance
const textureLoader = new THREE.TextureLoader();

// Load the floor texture asynchronously
textureLoader.load(
    'img/Floor.jpg', // Path to the texture image
    function (texture) {
        // Once the texture is loaded, you can use it
        // For example, you can create a material with this texture
        const floorMaterial = new THREE.MeshBasicMaterial({ map: texture , side : THREE.DoubleSide});
        floorMaterial.map.wrapS = THREE.RepeatWrapping;
        floorMaterial.map.wrapT = THREE.RepeatWrapping;
        floorMaterial.map.repeat.set(20, 20);

        // Then you can use this material to create a mesh
        // Assuming you have geometry for the floor
        const floorGeometry = new THREE.PlaneGeometry(50, 50); // Example size
        const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
        
        floorMesh.rotation.x = Math.PI / 2;
        floorMesh.position.y= -Math.PI;
        // Add the floor mesh to the scene
        scene.add(floorMesh);
    },
    undefined, // onProgress callback (optional)
    function (error) {
        console.error('An error occurred while loading the texture:', error);
    }
);






//create the floor and added to the scene

function onkeydown(event)
{
    let keycode=event.which || event.keyCode ;
    if (keycode ==39 ) { camera.translateX(-0.05) ; }
    else if (keycode==37 ){camera.translateX(0.05) ;}
    else if (keycode==38 ){camera.translateY(-0.05) ;}
    else if (keycode==40 ){camera.translateY(0.05) ;}
}


let render = function()
{
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene,camera);
    requestAnimationFrame(render);
}

render();
