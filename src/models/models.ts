export interface Lockio {
  id: number;
  blockId: number;
  localId: number;
  size: "SMALL" | "MEDIUM" | "LARGE";
  status: "AVAILABLE" | "OCCUPIED" | "DISABLED" | "PRERESERVED";
}

export interface Block {
  id: number;
  name: string;
  status: "AVAILABLE" | "DISABLED";
}

export type ButtonAction = "USE" | "REMOVE";
