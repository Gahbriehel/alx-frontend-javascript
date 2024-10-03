export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(size) {
    if (typeof size !== 'string') {
      throw new TypeError('Size must be a string');
    }
    this._size = size;
  }

  get location() {
    return this._location;
  }

  set location(location) {
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._location = location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
