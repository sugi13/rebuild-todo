import { useEffect, useState } from "react";
import "../App.css";
import { TodoDb } from "../config/firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { Alarm, TrashBin} from "akar-icons";
import "animate.css";

export default function TaskShow() {
  const [Tasks, setTasks] = useState([]);
  const TodoCollectionRef = collection(TodoDb, "Todos");

  // get todo's from fire store //

  useEffect(() => {
    const getMyToDos = async () => {
      const data = await getDocs(TodoCollectionRef);
      setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getMyToDos();
  }, []);

  // delete todo's from fire store //
  const deleteTodo = async (id) => {
    const deleteTodoDoc = doc(TodoDb, "Todos", id);
    await deleteDoc(deleteTodoDoc);

    const removeTodo = Tasks.filter((todo) => todo.id !== id);
    setTasks(removeTodo);
  };

  return (
    <div className="Show-task-container">
      {Tasks.map((Task) => {
        return (
          <div
            key={Task.id}
            className="task-col animate__animated animate__bounce"
          >
            <div className="head-description">
              <h1>{Task.TodoHead}</h1>
              <p>{Task.TodoDescription}</p>

              <p id= "user-date">
              </p>
            </div>
            <div className="Task-time">
              <span id="start-end">
                <Alarm size={13} /> {Task.StartTime} - {Task.EndTime}
              </span>
              <button onClick={() => deleteTodo(Task.id)} id="remove-btn">
                Remove{" "}
                <TrashBin
                  size={12}
                  style={{ position: "relative", top: "1px" }}
                />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
