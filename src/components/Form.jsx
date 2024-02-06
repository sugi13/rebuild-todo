import "../App.css";
import { collection, addDoc } from "firebase/firestore";
import { TodoDb } from "../config/firebase.js";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react";

export default function Form({ isOpen, onClose }) {
  const TodoCollectionRef = collection(TodoDb, "Todos");

  const [date, setDate] = useState(new Date());

  // state for inputs //
  const [TaskHead, setTaskHead] = useState("");
  const [TaskDescription, setTaskDescription] = useState("");
  const [TaskStartTime, setTaskStartTime] = useState("");
  const [TaskEndTime, setTaskEndTime] = useState("");

  // function for get Data //
  const HandleData = async () => {
    await addDoc(TodoCollectionRef, {
      TodoHead: TaskHead,
      TodoDescription: TaskDescription,
      TaskDate: date,
      StartTime: TaskStartTime,
      EndTime: TaskEndTime,
    });
    onClose();
    location.reload();
  };

  if (!isOpen) {
    return null;
  } else{
    return (
      <div className="todo-form">
        <div className="form-header">
          <h3>Organize the day</h3>
        </div>
        <div className="form">
          <div className="inputs-labels">
            <label>New Task</label>
            <input
              type="text"
              placeholder="new task"
              required
              value={TaskHead}
              onChange={(e) => setTaskHead(e.target.value)}
            />
            <label>Pick date</label>
            <ReactDatePicker
              label="Basic date picker"
              selected={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="inputs-labels">
            <label>Time to complete</label>
            <div className="Total-time">
              <input
                type="time"
                required
                className="start-time"
                value={TaskStartTime}
                onChange={(e) => setTaskStartTime(e.target.value)}
              />
              <input
                type="time"
                required
                className="End-time"
                value={TaskEndTime}
                onChange={(e) => setTaskEndTime(e.target.value)}
              />
            </div>
          </div>
          <div className="inputs-labels">
            <label>Description</label>
            <textarea
              placeholder="description"
              cols={40}
              rows={6}
              value={TaskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-submit-btns">
            <button className="Add-task" type="submit" onClick={HandleData}>
              Add Task
            </button>
            <button className="cancel-btn" onClick={onClose}>
              cancel
            </button>
          </div>
        </div>
      </div>
    )
  }
}
