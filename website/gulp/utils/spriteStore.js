class SpriteStore {
  constructor() {
    if (!SpriteStore.instance) {
      SpriteStore.instance = this;
      this.data = {
        sprite: '',
      };
    }

    return SpriteStore.instance;
  }

  getSprite() {
    return this.data.sprite;
  }

  setSprite(sprite) {
    this.data.sprite = sprite;
  }
}

const instance = new SpriteStore();

Object.freeze(instance);

export default instance;
