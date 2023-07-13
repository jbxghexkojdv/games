import physics from "./physics.js"

export class LevelElem extends HTMLElement
{
  #blocks = {
    "@": [],
    "0": [],
    "w": [],
    "o": [],
    "A": []
  };
  constructor()
  {
    super();
    
    this.attachShadow({ mode: "open" });

    let row = 0;
    let column = 0;

    /**
     * @param {LevelElem} t pass this here
     * @returns {HTMLDivElement}
     */
    function makeSquare(t)
    {
      let block = document.createElement("div");
      t.shadowRoot.append(block);
      block.style.height = (100/27) + "%";
      block.style.width = (100/48) + "%";
      block.style.position = "absolute";
      return block;
    }

    for(const i of this.innerHTML.slice(1))
    {
      switch(i)
      {
        case "@": // normal ground
          let block = makeSquare(this);
          block.style.background = "#000000";
          let blockobj = new physics.Thing(block, 100/27, 100/48, column*100/48, (26-row)*100/27, false, false, 0, 40);
          this.#blocks["@"].push(blockobj);
          column++;
          break;
        case "0": // trampoline
          let block2 = makeSquare(this);
          block2.style.background = "#ff00ff";
          let blockobj2 = new physics.Thing(block2, 100/27, 100/48, column*100/48, (26-row)*100/27, false, false, 1.1, 40);
          this.#blocks["0"].push(blockobj2);
          column++;
          break;
        case "w": // water
          let block3 = makeSquare(this);
          block3.style.background = "#0000c0c0";
          let blockobj3 = new physics.Thing(block3, 100/27, 100/48, column*100/48, (26-row)*100/27, false, false, 0, 40);
          this.#blocks["w"].push(blockobj3);
          column++;
          break;
        case "o": // lava
          let block4 = makeSquare(this);
          block4.style.background = "#ff4000";
          let blockobj4 = new physics.Thing(block4, 100/27, 100/48, column*100/48, (26-row)*100/27, false, false, 0, 40);
          this.#blocks["o"].push(blockobj4);
          column++;
          break;
        case "A": // spikes
          let block5 = makeSquare(this);
          block5.style.background = "#808080";
          let blockobj5 = new physics.Thing(block5, 100/27, 100/48, column*100/48, (26-row)*100/27, false, false, 0, 40);
          this.#blocks["A"].push(blockobj5);
          column++;
          break;
        case "\n":
          row++;
          column = 0;
          break;
        default:
          column++;
      }
    }

    this.position = "absolute";
    this.style.height = "100%";
    this.style.width = "100%";

    this.style.left = 0;
    this.style.top = 0;

    this.shadowRoot.append();
  }
}