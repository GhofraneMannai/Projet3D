import * as THREE from "three";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


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
document.body.appendChild(renderer.domElement); 


const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); 
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); 
directionalLight.position.set(5, 10, 3);
scene.add(ambientLight, directionalLight);
const geometry = new THREE.BoxGeometry(1, 1, 1); 
const material = new THREE.MeshBasicMaterial({ color: "grey" }); 
const cube = new THREE.Mesh(geometry, material);

//////////////////////////////////////////////1
var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/crate1.mtl", function (materials) {
  console.log("Materials loaded:", materials); 

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/crate1.obj", function (object) {
    console.log("Object loaded:", object); 

    //  size and position
    object.scale.set(2, 2, 2);
    object.position.set(10, -1.1, -18);
    object.rotateX(Math.PI / 2);
    object.rotateY(Math.PI);

    //  lights 
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); 
    scene.add(ambientLight);

    
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); 
    directionalLight.position.set(5, 10, 3); 
    scene.add(directionalLight);

    scene.add(object);
  });
});
var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/11740_shoes_v1_L3.mtl", function (materials) {
  console.log("Materials loaded:", materials); 

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/11740_shoes_v1_L3.obj", function (object) {
    console.log("Object loaded:", object); 

    
    object.scale.set(0.14, 0.14, 0.14);
    object.position.set(-10, 0.9, -17);
    object.rotateX(Math.PI / 2);
    object.rotateY(Math.PI);
    object.rotateZ(Math.PI);

    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); 
    scene.add(ambientLight);
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); 
    directionalLight.position.set(5, 10, 3); 
    scene.add(directionalLight);
    scene.add(object);
  });
});

/////////////////////////////////////////////////2
var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/crate1.mtl", function (materials) {
  console.log("Materials loaded:", materials); 

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/crate1.obj", function (object) {
    console.log("Object loaded:", object); 

    
    object.scale.set(2, 2, 2);
    object.position.set(0, -1.1, -18);
    object.rotateX(Math.PI / 2);
    object.rotateY(Math.PI);

    
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); 
    scene.add(ambientLight);

    
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); 
    directionalLight.position.set(5, 10, 3); 
    scene.add(directionalLight);

    // Add the object to the scene
    scene.add(object);
  });
});
var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/11743_Soccer_Shoes_v1_l3.mtl", function (materials) {
  console.log("Materials loaded:", materials); 

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/11743_Soccer_Shoes_v1_l3.obj", function (object) {
    console.log("Object loaded:", object); 

    
    object.scale.set(0.3, 0.3, 0.3);
    object.position.set(3.3, 0.7, -20);
    object.rotateX(Math.PI / 2);
    object.rotateY(Math.PI);

    
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); 
    scene.add(ambientLight);

    
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); 
    directionalLight.position.set(5, 10, 3); 
    scene.add(directionalLight);

    
    scene.add(object);
  });
});

//////////////////////////////////////////////////////3
var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/crate1.mtl", function (materials) {
  console.log("Materials loaded:", materials); 

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/crate1.obj", function (object) {
    console.log("Object loaded:", object); 

    
    object.scale.set(2, 2, 2);
    object.position.set(-10, -1.1, -18);
    object.rotateX(Math.PI / 2);
    object.rotateY(Math.PI);

   
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); 
    scene.add(ambientLight);

    
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); 
    directionalLight.position.set(5, 10, 3); 
    scene.add(directionalLight);

    
    scene.add(object);
  });
});

var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/shoe.mtl", function (materials) {
  console.log("Materials loaded:", materials); 

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/shoe.obj", function (object) {
    console.log("Object loaded:", object); 

    
    object.scale.set(0.07, 0.07, 0.07);
    object.position.set(9.5, 0.8, -16);
    object.rotateY(Math.PI);

  
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); 
    scene.add(ambientLight);

   
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 3); 
    scene.add(directionalLight);

    scene.add(object);
  });
});

//////////////////////////////////////////////////////4
var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/crate1.mtl", function (materials) {
  console.log("Materials loaded:", materials); 

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/crate1.obj", function (object) {
    console.log("Object loaded:", object); 

    
    object.scale.set(2, 2, 2);
    object.position.set(20, -1.1, -18);
    object.rotateX(Math.PI / 2);
    object.rotateY(Math.PI);

    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); 
    scene.add(ambientLight);

    
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); 
    directionalLight.position.set(5, 10, 3); 
    scene.add(directionalLight);

    
    scene.add(object);
  });
});

var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/117_shoe_v1_L3.mtl", function (materials) {
  console.log("Materials loaded:", materials); 

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/117_shoe_v1_L3.obj", function (object) {
    console.log("Object loaded:", object); 

    
    object.scale.set(0.13, 0.13, 0.13);
    object.position.set(20, 0.7, -18);
    object.rotateX(Math.PI / 2);
    object.rotateY(Math.PI);
    object.rotateZ(Math.PI);

    
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); 
    scene.add(ambientLight);

  
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); 
    directionalLight.position.set(5, 10, 3); 
    scene.add(directionalLight);

    
    scene.add(object);
  });
});

//////////////////////////////////////////////////////5
var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/crate1.mtl", function (materials) {
  console.log("Materials loaded:", materials); 

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/crate1.obj", function (object) {
    console.log("Object loaded:", object); 

    
    object.scale.set(2, 2, 2);
    object.position.set(-20, -1.1, -18);
    object.rotateX(Math.PI / 2);
    object.rotateY(Math.PI);


    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
    scene.add(ambientLight);

    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); 
    directionalLight.position.set(5, 10, 3); 
    scene.add(directionalLight);

    
    scene.add(object);
  });
});

var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/11741_shoes_v1_l2.mtl", function (materials) {
  console.log("Materials loaded:", materials); 

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/11741_shoes_v1_l2.obj", function (object) {
    console.log("Object loaded:", object); 

   
    object.scale.set(0.3, 0.3, 0.3);
    object.position.set(-20, 1, -18);
    object.rotateX(Math.PI / 2);
    object.rotateY(Math.PI);
    object.rotateZ(Math.PI);

    
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); 
    scene.add(ambientLight);


    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 3); 
    scene.add(directionalLight);

   
    scene.add(object);
  });
});

//kids
//////////////////////////////////////////////////////6
var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/crate1.mtl", function (materials) {
  console.log("Materials loaded:", materials); 

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/crate1.obj", function (object) {
    console.log("Object loaded:", object); 

    
    object.scale.set(2, 2, 2);
    object.position.set(28, -1, 15);
    object.rotateX(Math.PI / 2);
    object.rotateY(Math.PI);

   
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); 
    scene.add(ambientLight);

    
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); 
    directionalLight.position.set(5, 10, 3); 
    scene.add(directionalLight);

    
    scene.add(object);
  });
});

var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/13642_Polo_Boots_v1_L2.mtl", function (materials) {
  console.log("Materials loaded:", materials); 

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/13642_Polo_Boots_v1_L2.obj", function (object) {
    console.log("Object loaded:", object); 


    object.scale.set(0.07, 0.07, 0.07);
    object.position.set(27, 1, 15.5);
    object.rotateX(Math.PI / 2);
    object.rotateY(Math.PI);
    object.rotateZ(Math.PI / 2);

    
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); 
    scene.add(ambientLight);

  
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); 
    directionalLight.position.set(5, 10, 3); 
    scene.add(directionalLight);

    
    scene.add(object);
  });
});

//////////////////////////////////////////////////////7
var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/crate1.mtl", function (materials) {
  console.log("Materials loaded:", materials); 

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/crate1.obj", function (object) {
    console.log("Object loaded:", object); 

    
    object.scale.set(2, 2, 2);
    object.position.set(28, -1, -10);
    object.rotateX(Math.PI / 2);
    object.rotateY(Math.PI);

    
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); 
    scene.add(ambientLight);

  
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 3); 
    scene.add(directionalLight);

    
    scene.add(object);
  });
});

var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/12311_Boots_v2_l3.mtl", function (materials) {
  console.log("Materials loaded:", materials); 

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/12311_Boots_v2_l3.obj", function (object) {
    console.log("Object loaded:", object); 

   
    object.scale.set(0.07, 0.07, 0.07);
    object.position.set(28, 1, -10);
    object.rotateX(Math.PI / 2);
    object.rotateY(Math.PI);
    object.rotateZ(Math.PI);

    
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); 
    scene.add(ambientLight);

 
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); 
    directionalLight.position.set(5, 10, 3); 
    scene.add(directionalLight);

    
    scene.add(object);
  });
});

//////////////////////////////////////////////////////8
var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/crate1.mtl", function (materials) {
  console.log("Materials loaded:", materials); 

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/crate1.obj", function (object) {
    console.log("Object loaded:", object); 

    
    object.scale.set(2, 2, 2);
    object.position.set(28, -1, -1);
    object.rotateX(Math.PI / 2);
    object.rotateY(Math.PI);

    
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); 
    scene.add(ambientLight);

 
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); 
    directionalLight.position.set(5, 10, 3); 
    scene.add(directionalLight);

    
    scene.add(object);
  });
});
var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/10148_RubberRainBoot_v02_L3.mtl", function (materials) {
  console.log("Materials loaded:", materials); 

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/10148_RubberRainBoot_v02_L3.obj", function (object) {
    console.log("Object loaded:", object); 

   
    object.scale.set(0.07, 0.07, 0.07);
    object.position.set(28, 1, -1);
    object.rotateX(Math.PI / 2);
    object.rotateY(Math.PI);
    object.rotateZ(Math.PI / 2);
  
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); 
    scene.add(ambientLight);

   
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); 
    directionalLight.position.set(5, 10, 3);
    scene.add(directionalLight);

    
    scene.add(object);
  });
});
var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/10148_RubberRainBoot_v02_L3.mtl", function (materials) {
  console.log("Materials loaded:", materials); 

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/10148_RubberRainBoot_v02_L3.obj", function (object) {
    console.log("Object loaded:", object); 

  
    object.scale.set(0.07, 0.07, 0.07);
    object.position.set(28, 1, 0.6);
    object.rotateX(Math.PI / 2);
    object.rotateY(Math.PI);
    object.rotateZ(Math.PI / 2);

    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); 
    scene.add(ambientLight);

 
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); 
    directionalLight.position.set(5, 10, 3); 
    scene.add(directionalLight);

    
    scene.add(object);
  });
});

//////////////////////////////////////////////////////9
var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/crate1.mtl", function (materials) {
  console.log("Materials loaded:", materials); 

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/crate1.obj", function (object) {
    console.log("Object loaded:", object); 

   
    object.scale.set(2, 2, 2);
    object.position.set(28, -1, 6);
    object.rotateX(Math.PI / 2);
    object.rotateY(Math.PI);

 
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
    scene.add(ambientLight);

  
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); 
    directionalLight.position.set(5, 10, 3); 
    scene.add(directionalLight);

  
    scene.add(object);
  });
});

var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/12309_boots_v1_l2.mtl", function (materials) {
  console.log("Materials loaded:", materials); 

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/12309_boots_v1_l2.obj", function (object) {
    console.log("Object loaded:", object); 

    
    object.scale.set(0.17, 0.17, 0.17);
    object.position.set(28, 1, 6);
    object.rotateX(Math.PI / 2);
    object.rotateY(Math.PI);
    object.rotateZ(Math.PI / 2);
   
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); 
    scene.add(ambientLight);

   
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); 
    directionalLight.position.set(5, 10, 3); 
    scene.add(directionalLight);

    
    scene.add(object);
  });
});

///////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////10
var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/crate1.mtl", function (materials) {
  console.log("Materials loaded:", materials); 

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/crate1.obj", function (object) {
    console.log("Object loaded:", object); 


    object.scale.set(2, 2, 2);
    object.position.set(20, -1.1, 18);
    object.rotateX(Math.PI / 2);
    object.rotateY(Math.PI);

 
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); 
    scene.add(ambientLight);

   
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); 
    directionalLight.position.set(5, 10, 3); 
    scene.add(directionalLight);


    scene.add(object);
  });
});

var mtlLoader = new MTLLoader();
mtlLoader.load(
  "../.OBJ/Boots Elegance Shoes N301122.mtl",
  function (materials) {
    console.log("Materials loaded:", materials); 

    materials.preload();

    var objLoader = new OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load(
      "../.OBJ/Boots Elegance Shoes N301122.obj",
      function (object) {
        console.log("Object loaded:", object); 

    
        object.scale.set(1, 1, 1);
        object.position.set(30, 1.1, 18);
        object.rotateX(Math.PI / 2);
        object.rotateY(Math.PI);
        object.rotateZ(Math.PI / 2);
       
        var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); 
        scene.add(ambientLight);

        
        var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); 
        directionalLight.position.set(5, 10, 3); 
        scene.add(directionalLight);

      
        scene.add(object);
      }
    );
  }
);

//////////////////////////////////////////////////////11


const loader4 = new GLTFLoader();
loader4.load(
    '../scene.gltf',
    function (gltf) {
      const model=gltf.scene;
      model.scale.set(0.15, 0.15, 0.15);
      model.position.set(17, 1.5, 17);
      model.rotateY(Math.PI / 2);
      scene.add(model);
    },
    undefined,
    function (error) {
        console.error(error);
    }
);


//////////////////////////////////////////////////////12
var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/crate1.mtl", function (materials) {
  console.log("Materials loaded:", materials); 

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/crate1.obj", function (object) {
    console.log("Object loaded:", object); 

   
    object.scale.set(2, 2, 2);
    object.position.set(0, -1.1, 18);
    object.rotateX(Math.PI / 2);
    object.rotateY(Math.PI);

   
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
    scene.add(ambientLight);

   
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); 
    directionalLight.position.set(5, 10, 3);
    scene.add(directionalLight);

   
    scene.add(object);
  });
});


//femme
const loader5 = new GLTFLoader();
loader5.load(
    '../.OBJ/mtloader6/scene.gltf',
    function (gltf) {
      const model=gltf.scene;
       
        model.scale.set(9,8, 8);
        model.rotateY(Math.PI);
        model.position.set(9, 1, 17);

      scene.add(model);
    },
    undefined,
    function (error) {
        console.error(error);
    }
);


//////////////////////////////////////////////////////13
var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/crate1.mtl", function (materials) {
  console.log("Materials loaded:", materials); 

  materials.preload();





  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/crate1.obj", function (object) {
    console.log("Object loaded:", object); 

    
    object.scale.set(2, 2, 2);
    object.position.set(10, -1.1, 18);
    object.rotateX(Math.PI / 2);
    object.rotateY(Math.PI);


    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
    scene.add(ambientLight);

        var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); 
    directionalLight.position.set(5, 10, 3); 
    scene.add(directionalLight);

   
    scene.add(object);
  });
});




// //femme
const loader6 = new GLTFLoader();
loader6.load(
    '../.OBJ/shoes_3__reference_only/scene.gltf',
    function (gltf) {
      const model=gltf.scene;
        
        model.scale.set(0.65,0.65, 0.65);
       model.rotateY(Math.PI);
       model.position.set(0.35, 1, 17);

      scene.add(model);
    },
    undefined,
    function (error) {
        console.error(error);
    }
);



// //femme
const loader7 = new GLTFLoader();
loader7.load(
    '../.OBJ/shoess/scene.gltf',
    function (gltf) {
      const model=gltf.scene;
        // Adjust size and position
        model.scale.set(30,35, 35);
       model.rotateY(Math.PI);
       model.position.set(5, 1, 17);

      scene.add(model);
    },
    undefined,
    function (error) {
        console.error(error);
    }
);









//////////client

const loader = new GLTFLoader();
loader.load(
    '../.OBJ/scene.gltf',
    function (gltf) {
      const model=gltf.scene;
      model.scale.set(4,4,4);
      model.position.set(15, -3, 14);
      model.rotateY(Math.PI / 2);  
        scene.add(model);
    },
    undefined,
    function (error) {
        console.error(error);
    }
);


const loader1 = new GLTFLoader();
loader1.load(
    '../js/scene.gltf',
    function (gltf) {
      const model=gltf.scene;
   
      model.scale.set(2,2,2);
      model.rotateY(Math.PI / 2);
        scene.add(model);
    },
    undefined,
    function (error) {
        console.error(error);
    }
);


//sofa
const loader2 = new GLTFLoader();
loader2.load(
    '../artwork/scene.gltf',
    function (gltf) {
      const model=gltf.scene;
      model.position.set(-28, -3, 10);
      model.scale.set(5,5,5);
      model.rotateY(Math.PI / 2);
        scene.add(model);
    },
    undefined,
    function (error) {
        console.error(error);
    }
);



//men
const loader9 = new GLTFLoader();
loader9.load(
    '../.OBJ/mens/scene.gltf',
    function (gltf) {
      const model=gltf.scene;
      model.position.set(-32, -2, -8);
      model.scale.set(0.05,0.05,0.05);
      model.rotateY(Math.PI / 2);
        scene.add(model);
    },
    undefined,
    function (error) {
        console.error(error);
    }
);




const loader3 = new GLTFLoader();
loader3.load(
    '../css/scene.gltf',
    function (gltf) {
      const object=gltf.scene;
      object.scale.set(7,7,7);
      object.position.set(-28, 5, -8);
      object.rotateY(Math.PI / 2);
    
        scene.add(object);
    },
    undefined,
    function (error) {
        console.error(error);
    }
);

//////////////////////////////////////////////////////desk

var mtlLoader = new MTLLoader();
mtlLoader.load("../.OBJ/Humano_01Business_01_30K.mtl", function (materials) {
  console.log("Materials loaded:", materials); 

  materials.preload();

  var objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("../.OBJ/Humano_01Business_01_30K.obj", function (object) {
    console.log("Object loaded:", object); 

   
    object.scale.set(-50, -50, -50);
    object.position.set(-30, 2, 7);
    object.rotateX(Math.PI / 2);
    object.rotateY(Math.PI);
    object.rotateZ(Math.PI / 2);


    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); 
    scene.add(ambientLight);

   
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); 
    directionalLight.position.set(5, 10, 3); 
    scene.add(directionalLight);

  
    scene.add(object);
  });
});


document.addEventListener("keydown", onkeydown, false);


const textureLoader = new THREE.TextureLoader();


textureLoader.load(
  "img/Floor.jpg", 
  function (texture) {

    const floorMaterial = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide,
    });
    floorMaterial.map.wrapS = THREE.RepeatWrapping;
    floorMaterial.map.wrapT = THREE.RepeatWrapping;
    floorMaterial.map.repeat.set(20, 20);

  
    const floorGeometry = new THREE.PlaneGeometry(100, 100); 
    const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);

    floorMesh.rotation.x = Math.PI / 2;
    floorMesh.position.y = -Math.PI;
  
    scene.add(floorMesh);
  },
  undefined, 
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
leftwall.position.x = -35;

const rightwall = new THREE.Mesh(
  new THREE.BoxGeometry(100, 20, 0.001),
  new THREE.MeshBasicMaterial({ map: textureWall })
);
rightwall.rotation.y = Math.PI / 2;
rightwall.position.x = 30;

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


function create
(imageURL, width, heigh, position) {
  const textureLoader = new THREE.TextureLoader();
  const paintingTexture = textureLoader.load(imageURL);
  const material = new THREE.MeshBasicMaterial({ map: paintingTexture });
  const geometry = new THREE.PlaneGeometry(width, heigh);
  const painting = new THREE.Mesh(geometry, material);
  painting.position.set(position.x, position.y, position.z);
  return painting;
}
const image1 = create(
  "/artwork/man.jpg",
  15,
  5,
  new THREE.Vector3(-6, 5, -19.99)
);

scene.add(image1, image1);

const image2 = create(
  "/artwork/woman.jpg",
  15,
  5,
  new THREE.Vector3(-2, 5, 19)
);
image2.rotation.y = Math.PI;

scene.add(image2, image2);
const image3 = create(
  "/artwork/child.jpg",
  15,
  5,
  new THREE.Vector3(29, 7, 2)
);
image3.rotation.y = -Math.PI / 2;

scene.add(image3, image3);

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

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();



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

const shoesData = [
  // Front Wall
  {
    imgSrc: "shoes/1.jpg",
    width: 5,
    height: 3,
    position: { x: -15, y: 2, z: -19.5 },
    rotationY: 0,
    info: {
      title: "Air Max 270",
      brand: "Nike",
      description:
        "The Nike Air Max 270 features the first-ever Max Air unit created specifically for Nike Sportswear, with an emphasis on all-day comfort, style, and versatility.",
      price: "$150",
      link: "https://www.nike.com/air-max-270",
    },
  },
  {
    imgSrc: "shoes/2.jpg",
    width: 5,
    height: 3,
    position: { x: -5, y: 2, z: -19.5 },
    rotationY: 0,
    info: {
      title: "Ultraboost 21",
      brand: "Adidas",
      description:
        "The Adidas Ultraboost 21 is designed to provide maximum comfort and energy return, featuring a Boost midsole and Primeknit upper.",
      price: "$180",
      link: "https://www.adidas.com/ultraboost-21",
    },
  },
  {
    imgSrc: "shoes/3.jpg",
    width: 5,
    height: 3,
    position: { x: 5, y: 2, z: -19.5 },
    rotationY: 0,
    info: {
      title: "Classic Leather",
      brand: "Reebok",
      description:
        "The Reebok Classic Leather is a timeless sneaker that offers both comfort and style, featuring a soft leather upper and die-cut EVA midsole.",
      price: "$75",
      link: "https://www.reebok.com/classic-leather",
    },
  },
  {
    imgSrc: "shoes/4.jpg",
    width: 5,
    height: 3,
    position: { x: 15, y: 2, z: -19.5 },
    rotationY: 0,
    info: {
      title: "Chuck Taylor All Star",
      brand: "Converse",
      description:
        "The Converse Chuck Taylor All Star is a legendary sneaker known for its distinctive design and versatility, making it a staple in casual footwear.",
      price: "$55",
      link: "https://www.converse.com/chuck-taylor-all-star",
    },
  },
  // Back Wall
  {
    imgSrc: "shoes/5.jpg",
    width: 5,
    height: 3,
    position: { x: -15, y: 2, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: "Gel-Kayano 27",
      brand: "ASICS",
      description:
        "The ASICS Gel-Kayano 27 is a high-performance running shoe that offers superior cushioning and stability, perfect for long-distance runs.",
      price: "$160",
      link: "https://www.asics.com/gel-kayano-27",
    },
  },
  {
    imgSrc: "shoes/6.jpg",
    width: 5,
    height: 3,
    position: { x: -5, y: 2, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: "Pegasus 37",
      brand: "Nike",
      description:
        "The Nike Pegasus 37 is a versatile running shoe that provides excellent cushioning and a responsive ride, suitable for both casual and serious runners.",
      price: "$120",
      link: "https://www.nike.com/pegasus-37",
    },
  },
  {
    imgSrc: "shoes/7.jpg",
    width: 5,
    height: 3,
    position: { x: 5, y: 2, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: "Gazelle",
      brand: "Adidas",
      description:
        "The Adidas Gazelle is a classic sneaker that combines vintage style with modern comfort, featuring a suede upper and rubber outsole.",
      price: "$90",
      link: "https://www.adidas.com/gazelle",
    },
  },
  {
    imgSrc: "shoes/8.jpg",
    width: 5,
    height: 3,
    position: { x: 15, y: 2, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: "Sk8-Hi",
      brand: "Vans",
      description:
        "The Vans Sk8-Hi is a high-top skate shoe that offers durability and support, with a canvas and suede upper and signature waffle outsole.",
      price: "$65",
      link: "https://www.vans.com/sk8-hi",
    },
  },
  // Left Wall
  {
    imgSrc: "shoes/9.jpg",
    width: 5,
    height: 3,
    position: { x: -19.5, y: 2, z: -15 },
    rotationY: Math.PI / 2,
    info: {
      title: "New Balance 990v5",
      brand: "New Balance",
      description:
        "The New Balance 990v5 is a premium running shoe that combines comfort, stability, and style, featuring a blend of suede and mesh in the upper.",
      price: "$175",
      link: "https://www.newbalance.com/990v5",
    },
  },
  {
    imgSrc: "shoes/10.jpg",
    width: 5,
    height: 3,
    position: { x: -19.5, y: 2, z: -5 },
    rotationY: Math.PI / 2,
    info: {
      title: "Clyde",
      brand: "Puma",
      description:
        "The Puma Clyde is a retro basketball shoe that offers a blend of style and performance, with a leather upper and classic design.",
      price: "$85",
      link: "https://www.puma.com/clyde",
    },
  },
  {
    imgSrc: "shoes/11.jpg",
    width: 5,
    height: 3,
    position: { x: 19.5, y: 2, z: 5 }, 
    rotationY: -Math.PI / 2, 
    info: {
      title: "Air Force 1",
      brand: "Nike",
      description:
        "The Nike Air Force 1 is a classic sneaker that has been a staple in fashion and streetwear for decades, featuring a durable leather upper and Nike Air cushioning.",
      price: "$100",
      link: "https://www.nike.com/air-force-1",
    },
  },
  {
    imgSrc: "shoes/12.jpg",
    width: 5,
    height: 3,
    position: { x: 19.5, y: 2, z: 15 },
    rotationY: -Math.PI / 2,
    info: {
      title: "Superstar",
      brand: "Adidas",
      description:
        "The Adidas Superstar is an iconic sneaker known for its distinctive shell-toe design and timeless style, perfect for both casual and athletic wear.",
      price: "$85",
      link: "https://www.adidas.com/superstar",
    },
  },
  // Right Wall
  {
    imgSrc: "shoes/13.jpg",
    width: 5,
    height: 3,
    position: { x: 19.5, y: 2, z: -15 },
    rotationY: -Math.PI / 2,
    info: {
      title: "Gel-Lyte III",
      brand: "ASICS",
      description:
        "The ASICS Gel-Lyte III is a retro running shoe that offers a unique split-tongue design and exceptional comfort, ideal for everyday wear.",
      price: "$110",
      link: "https://www.asics.com/gel-lyte-iii",
    },
  },
  
  ];
  
  console.log(shoesData);
  
let shoess = [];
import { displayshoesInfo, hideshoesInfo } from "./displayshoesInfo";

shoesData.forEach((data) => {
  const shoes = new THREE.Mesh(
    new THREE.PlaneGeometry(data.width, data.height),
    new THREE.MeshLambertMaterial({ map: textureLoader.load(data.imgSrc) })
  );

  shoes.position.set(data.position.x, data.position.y, data.position.z);
  shoes.rotation.y = data.rotationY;

  shoes.userData = {
    type: "shoes",
    info: data.info,
    url: data.info.link,
  };

  shoes.castShadow = true;
  shoes.receiveShadow = true;

  shoess.push(shoes);
});

let render = function () {
  const distanceThreshold = 8;

  let shoesToShow;
  shoess.forEach((shoes) => {
    const distanceToshoes = camera.position.distanceTo(shoes.position);
    if (distanceToshoes < distanceThreshold) {
      shoesToShow = shoes;
    }
  });

  if (shoesToShow) {
  
    displayshoesInfo(shoesToShow.userData.info);
  } else {
    hideshoesInfo();
  }

 
  renderer.render(scene, camera);
  requestAnimationFrame(render);
};

render();
