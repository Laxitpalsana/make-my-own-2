// Registering component in Collider.js
AFRAME.registerComponent("fruit1", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `hurdle${i}`;
  
        //position variables
        var posX = Math.random() * 3000 + -1000;
        var posY = Math.random() * 2 + -1;
        var posZ = Math.random() * 3000 + -1000;
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.fruit1(id, position);
      }
    },
    fruit1: (id, position) => {
      //Get the terrain element
      var terrainEl = document.querySelector("#terrain");
  
      //creating the bird model entity
      var fruit1 = document.createElement("a-entity");
  
      //Setting multiple attributes
      fruit1.setAttribute("id", id);
  
      fruit1.setAttribute("position", position);
      fruit1.setAttribute("scale", { x: 500, y: 500, z: 500 });
  
      //set the gLTF model attribute
      frui1.setAttribute("gltf-model", "./assests/Magnificent Inari-Sniket.glb");
  
      //set animation mixer of models with animation
      fruit1.setAttribute("animation-mixer", {});
  
      //set the static body of the physic system
      fruit1.setAttribute("static-body", {
        shape: "sphere",
        sphereRadius: 3.2,
      });
  
      //set the game play attribute
      fruit1.setAttribute("game-play", {
        elementId: `#${id}`,
      });
  
      //append the bird entity as the child of the terrain entity
      terrainEl.appendChild(fruit1);
    },
  });