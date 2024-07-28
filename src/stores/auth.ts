import { writable } from "svelte/store";

interface Auth {
  user: object | null;
  token: string | null;
}

export const auth = writable({ user: null, token: null } as Auth);

export const setAuth = (user: object | null, token: string | null) => {
  auth.set({ user, token });
};

export const clearAuth = () => {
  auth.set({ user: null, token: null });
};
