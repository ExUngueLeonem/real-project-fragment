import { ITask } from "../types";

export interface ISourceTask extends ITask {
  sourceId: string
}

export interface ITasksState {
  sourceSyncDict: {
    [sourceId: string]: ISourceTask | null;
  }
}