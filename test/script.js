import physics from "../../physics/script.js"; //    element to use    hitbox location
let testObj = new physics.Thing(document.getElementsByTagName("a")[0], 10, 10, 0, 50);
testObj.velocity.x = 100;
testObj.velocity.y = 100;
testObj.start("gravity", 200, "down");
