import axios from "axios";
import { API_BACK_URL, BLOCK_ID } from "../utils/constant";
import { Block } from "../models/models";
async function fetchBlock(): Promise<Block> {
  const response = await axios.get(API_BACK_URL + "/blocks/" + BLOCK_ID);
  return response.data;
}

export const blockService = {
  fetchBlock,
};
