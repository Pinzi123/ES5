class Block {
  constructor(blockType) {
    this.blockType = blockType;
    this.size = 30;
    this.originalSize = 32;
    this.sprite = window.ResourceManager.getResource('blocks');
  }

  draw (context, x, y, blockType, size) {
    size = size || this.size;
    context.drawImage(this.sprite, ((blockType || this.blockType) - 1) * this.originalSize, 0, this.originalSize, this.originalSize, x * size, y * size, size, size);
  }
}
module.exports = Block
