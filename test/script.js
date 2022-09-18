import physics from "../../physics/script.js"; //    element to use    hitbox location
let testObj = new physics.Thing(document.getElementsByTagName("a")[0], 10, 10, 50, 100);
testObj.start("gravity", 8, "down");
