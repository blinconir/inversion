import { defineStore } from "pinia";

export const userSessionStore = defineStore({
  id: "userSession",
  state: () => ({
    session: null,
    email: "mail@ejemplo.cl",
  }),
});
