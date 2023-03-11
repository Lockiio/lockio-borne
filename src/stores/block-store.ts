import { defineStore } from "pinia";
import { Block } from "../models/models";
import { blockService } from "../services/block-service";

export const useBlockStore = defineStore({
  id: "block",
  state: (): {
    block: Block;
  } => ({
    block: {
      id: 0,
      name: "",
      status: "AVAILABLE",
    },
  }),
  getters: {
    getBlock(): Block {
      return this.block;
    },
  },
  actions: {
    async fetchBlock() {
      this.block = await blockService.fetchBlock();
    },
  },
});
