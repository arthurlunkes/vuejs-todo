import localstorage from 'localstorage';

export default {
  set(key, value) {
    localstorage.setItem(key, value);
  },
  get(key) {
    return localstorage.getItem(key);
  },
  remove(key) {
    localstorage.removeItem(key);
  },
  clear() {
    localstorage.clear();
  }
};
