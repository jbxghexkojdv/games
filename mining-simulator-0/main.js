//debugger;
// Constants

// Variables
let levelsCompleted = [];
for(let i = 0; i < 36; i++)
{
  levelsCompleted.push(false);
}

// Classes
import {Animation, Frame} from "../modules/animation.js";
import {LevelElem} from "../modules/level.js";

/**
 * 
 * @param {number} level
 */
function showLevel(level)
{
  document.getElementById("level-select-menu").style.display = "none";
  document.getElementById("the-levels").style.display = "block";
  document.querySelectorAll("game-level")[level-1].style.display = "block";
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
  for(let i = 0; i < 36; i++)
  {
    document.querySelectorAll("#level-select-menu img")[i].onclick = () => {showLevel(i + 1)};
  }
}();

// Other Functions