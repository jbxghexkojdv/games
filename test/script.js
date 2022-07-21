import physics from "../../physics/script.js";
let testObj = new physics.Thing(document.getElementsByTagName("a")[0], 10, 10, 0, 50);
testObj.speed.x = 100;
testObj.speed.y = 100;
testObj.start("gravity", 400, "down");
