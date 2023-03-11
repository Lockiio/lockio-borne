import { defineStore } from "pinia";
import { Lockio } from "../models/models";
import { lockioService } from "../services/lockio-service";

export const useLockioStore = defineStore({
  id: "lockio",
  state: (): {
    lockios: Lockio[];
  } => ({
    lockios: [],
  }),
  getters: {
    getLockios(): Lockio[] {
      return this.lockios;
    },
  },
  actions: {
    async fetchLockios() {
      this.lockios = await lockioService.fetchLockios();
    },
  },
});
