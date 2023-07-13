export class Frame
{
  /**
   * @param {string} imageSrc The path to the frame
   * @param {number} displayTime The amount of time, in seconds, to display the frame
   */
  constructor(imageSrc, displayTime)
  {
    this.src = imageSrc;
    this.time = displayTime;
  }
}

export class Animation
{
  #frames = [];
  element = null;
  /**
   * @param {Frame} frame The frame
   * @returns {Promise<void>}
   */
  #displayFrame(frame)
  {
    return new Promise((resolve) =>
    {
      this.element.src = frame.src;
      setTimeout(() => 
      {
        resolve();
      }, 
      frame.time * 1000);
    })
  }
  /**
   * @param {HTMLImageElement} element The image element to put the animation on
   * @param {Frame[]} frames
   */
  constructor(element, ...frames)
  {
    this.element = element;
    this.#frames = frames;
    for(let i in frames)
    {
      this[i] = frames[i];
    }
  }
  /**
   * @returns {Animation} The object that this method is in, for linking
   */
  async display()
  {
    const originalImage = this.element.src;
    for(let i of this.#frames)
    {
      await this.#displayFrame(i);
    }
    this.element.src = originalImage;
    return this;
  }
}