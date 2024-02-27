import { useState } from "react"
import { TaskModel } from "../entities/task.model";
import { TodoViewModel } from "../interfaces/todo.view.model";
import { ToastAndroid,  Alert} from "react-native";

export const useTodoViewModel = () : TodoViewModel => {
  const [text, setText] = useState("")
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  const handleAddTask = () => {
    if(text.length < 3) ToastAndroid.show("Informe um texto", ToastAndroid.SHORT)

    const task: TaskModel = {
      id: new Date().getTime(),
      title: text
    }

    setTasks(prevState => [...prevState, task])
  }

  return  {
    tasks,
    handleAddTask,
    setText
  }
}