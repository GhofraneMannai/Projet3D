import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';

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
const ambientLight = new THREE.AmbientLight(0x101010, 1.0) //color , intensity , distance , decay
ambientLight.position.copy(camera.position);
scene.add(ambientLight)


//Directionnal Light
const sunLight = new THREE.DirectionalLight(0xdddd , 1.0); //color , intensity
sunLight.position.y=15;
scene.add(sunLight);



const geometry = new THREE.BoxGeometry(1, 1, 1)  //BoxGeometry is the shape of the object
const  material = new THREE.MeshBasicMaterial({ color: 'grey'}); //color of the object
const cube = new THREE.Mesh(geometry, material);  
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



//wall

const wallgroup= new THREE.Group() ;
scene.add(wallgroup)

const frontwall = new THREE.Mesh(new THREE.BoxGeometry(50,20,0.001), new THREE.MeshBasicMaterial({color:"green"}));
frontwall.position.z=-20

const leftwall = new THREE.Mesh(new THREE.BoxGeometry(50,20,0.001), new THREE.MeshBasicMaterial({color:"red"}));
leftwall.rotation.y=Math.PI/2;
leftwall.position.x=-20

const rightwall = new THREE.Mesh(new THREE.BoxGeometry(50,20,0.001), new THREE.MeshBasicMaterial({color:"yellow"}));
rightwall.rotation.y=Math.PI/2;
rightwall.position.x=20

wallgroup.add(frontwall,leftwall,rightwall)

//ceiling

const ceilingGeometry = new THREE.PlaneGeometry(50, 50); // Corrected class name
const ceilingMat = new THREE.MeshBasicMaterial({ color: "blue" });
const ceilingplane = new THREE.Mesh(ceilingGeometry, ceilingMat);
scene.add(ceilingplane);
scene.add(ceilingplane);
ceilingplane.rotation.x=Math.PI/2;
ceilingplane.position.y=10;

// for(let i = 0 ; i<wallgroup.children.length ;  i++)
// {
//     wallgroup.children[i].BBox=new THREE.Box3();
//     wallgroup.childreen[i].BBox.setFromObject(wallgroup.children[i]);
// }

function createpainting(imageURL,width,heigh,position)
{
    const textureLoader=new THREE.TextureLoader();
    const paintingTexture=textureLoader.load(imageURL);
    const material=new THREE.MeshBasicMaterial({map:paintingTexture});
    const geometry=new THREE.PlaneGeometry(width,heigh);
    const painting=new THREE.Mesh(geometry,material);
    painting.position.set(position.x,position.y,position.z);
    return painting
}
const painting1=createpainting("/artwork/0.jpg",10,5,new THREE.Vector3(10,5,-19.99));
const painting2=createpainting("/artwork/1.jpg",10,5,new THREE.Vector3(-10,5,-19.99))
scene.add(painting1,painting2)


const controllers=new PointerLockControls(camera,document.body);
function startExperience(){
    controllers.lock();
    hideMenu()
}

const playButton=document.getElementById("play_button");
function hideMenu()
{
    const menu=document.getElementById("menu");
    menu.style.display='none'
}
function showMenu()
{
    const menu=document.getElementById("menu");
    menu.style.display='block'
}
playButton.addEventListener("click",startExperience)
controllers.addEventListener("unlock",showMenu)
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
