export interface Lockio {
  id: number;
  blockId: number;
  localId: number;
  size: "SMALL" | "MEDIUM" | "LARGE";
  status: "AVAILABLE" | "OCCUPIED" | "DISABLED" | "PRERESERVED";
}
