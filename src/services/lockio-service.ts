import { Lockio } from "../models/models";
import axios from "axios";
import { API_BACK_URL, BLOCK_ID } from "../utils/constant";
async function fetchLockios(): Promise<Lockio[]> {
  const response = await axios.get(
    API_BACK_URL + "/blocks/" + BLOCK_ID + "/lockios"
  );
  return response.data;
}

export const lockioService = {
  fetchLockios,
};
