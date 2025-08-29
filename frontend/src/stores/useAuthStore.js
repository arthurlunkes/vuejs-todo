import { createPinia } from 'pinia';
import localStorageService from '../services/localStorageService';
import { LOCALSTORAGE_KEYS } from '../constants/localStorage';

export const useAuthStore = createPinia('auth', {
  state: () => ({
    user: localStorageService.get(LOCALSTORAGE_KEYS.USER) || null,
    token: localStorageService.get(LOCALSTORAGE_KEYS.TOKEN) || null
  }),
  actions: {
    setUser(user) {
      this.user = user;
      localStorageService.set(LOCALSTORAGE_KEYS.USER, user);
    },
    setToken(token) {
      this.token = token;
      localStorageService.set(LOCALSTORAGE_KEYS.TOKEN, token);
    },
    logout() {
      this.user = null;
      localStorageService.remove(LOCALSTORAGE_KEYS.USER);
      this.token = null;
      localStorageService.remove(LOCALSTORAGE_KEYS.TOKEN);
    }
  },
  getters: {
    getUser: (state) => state.user
  }
});

export default useAuthStore;
