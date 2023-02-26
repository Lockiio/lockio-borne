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
    availableLockios(): Lockio[] {
      return this.lockios.filter((lockio) => lockio.status === "AVAILABLE");
    },
  },
  actions: {
    async fetchLockios() {
      this.lockios = await lockioService.fetchLockios();
    },
    switchLockerStatus(lockioId: number) {
      const lockio = this.lockios.find((lockio) => lockio.id === lockioId);
      if (lockio) {
        lockio.status =
          lockio.status === "AVAILABLE" ? "OCCUPIED" : "AVAILABLE";
      }
    },
  },
});
