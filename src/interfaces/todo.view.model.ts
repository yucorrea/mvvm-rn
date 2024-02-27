import { TaskModel } from "../entities/task.model";

export interface TodoViewModel {
  handleAddTask: () => void;
  setText: React.Dispatch<React.SetStateAction<string>>;
  tasks: Array<TaskModel>;
}