import physics from "../../physics/script.js"; //    element to use     size  location motion hitbox
let testObj = new physics.Thing(document.getElementsByTagName("a")[0], 10, 10, 50, 100, true, true);
testObj.start("gravity", 50, "down");
testObj.start("collision");
let testObj2 = new physics.Thing(document.getElementsByTagName("p")[0], 10, 10, 50, 50, false, true);
testObj2.start("collision");
