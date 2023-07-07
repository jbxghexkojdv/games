//debugger;
// Constants
const physics = (await import(location.origin == "https://jbxghexkojdv.github.io" ? "../../physics/script.js" : "../../mywebsite/physics/script.js")).default;

// Variables
let levelsCompleted = [];
for(let i = 0; i < 36; i++)
{
  levelsCompleted.push(false);
}

// Classes
import {Animation, Frame} from "./animation.js";

class LevelElem extends HTMLElement
{
  constructor()
  {
    super();
    
    this.attachShadow({ mode: "open" });
  }
}

async function storyAnimation()
{
  document.getElementById("main-menu").style.display = "none";
  document.getElementById("story-animation").style.display = "block";
  await new Animation(document.querySelector("#story-animation img"),
  new Frame("./img/lvl2.png", 1), 
  new Frame("./img/lvl1.png", 0.5),
  new Frame("./img/lvl2.png", 1)
  ).display();
  document.getElementById("story-animation").style.display = "none";
  document.getElementById("level-select-menu").style.display = "block";
}

// MAIN FUNCTION!!!!!!!!!
void function main()
{
  window.customElements.define('game-level', LevelElem);
  document.getElementById("play").onclick = storyAnimation;
}();

// Other Functions