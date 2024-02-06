import "../App.css";
import Form from "../components/Form";
import TaskShow from "../components/TaskShow";
import { useState } from "react";

export default function Home() {
  const [ToggleForm, setToggleForm] = useState(false);

  function HandleOpen() {
    setToggleForm(true);
  }

  function HandleClose() {
    setToggleForm(false);
  }

  return (
    <div className="Home">
      <div className="Home-header">
        <div className="brand">
          <h3>Todo</h3>
        </div>
        <div className="create-btn-wrapper">
          <button className="create-btn" onClick={HandleOpen}>
            create task
          </button>
        </div>
      </div>
      <section className={ToggleForm ? "ApplyOpacity" : "widget-section"}>
        <TaskShow/>
      </section>
      <section id = 'form-wrapper'>
        {ToggleForm && <Form isOpen={ToggleForm} onClose={HandleClose} />}
      </section>
    </div>
  );
}
