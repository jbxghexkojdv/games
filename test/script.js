const physics = (await import(location.origin == "https://jbxghexkojdv.github.io" ? "../../physics/script.js" : "../../mywebsite/physics/script.js")).default;
// ^Imports physics
let testObjects = [
  new physics.Thing(document.getElementsByTagName("p")[0], 10, 10, 45, 90, true, true),
  new physics.Thing(document.getElementsByTagName("p")[1], 10, 10, 45, 0, true, true),
  new physics.Thing(document.getElementsByTagName("p")[2], 10, 10, 0, 45, true, true),
  new physics.Thing(document.getElementsByTagName("p")[3], 10, 10, 90, 45, true, true),
  new physics.Thing(document.getElementsByTagName("p")[4], 20, 20, 40, 40, false, true, 0.5),
];
for(let i of testObjects)
{
  i.start("collision");
}
testObjects[0].velocity.y = -25;
testObjects[1].velocity.y = 25;
testObjects[2].velocity.x = 25;
testObjects[3].velocity.x = -25;