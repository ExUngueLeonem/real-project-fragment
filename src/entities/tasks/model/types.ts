export interface ITask {
  id: string;
  queuedAt?: string;
  error?: string;
  completedAt?: string;
  status?: "Running" | "Completed" | "Failed";
}