import { Lockio } from "../models/models";

async function fetchLockios(): Promise<Lockio[]> {
  // This is just a mock function to simulate an API call
  // TODO : plug api call here
  const numberOfLockers = 20;
  const lockers: Lockio[] = [];
  for (let i = 0; i < numberOfLockers; i++) {
    lockers.push({
      id: i,
      blockId: 1,
      localId: i,
      size: Math.random() < 0.8 ? "SMALL" : "MEDIUM",
      status: Math.random() < 0.8 ? "AVAILABLE" : "OCCUPIED",
    });
  }
  return lockers;
}

export const lockioService = {
  fetchLockios,
};
