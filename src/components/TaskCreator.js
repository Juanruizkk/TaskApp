import { useState } from "react";
export const TaskCreator = (props) => {
    const [newTaskName, setNewTaskName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    props.createNewTask(newTaskName);
    setNewTaskName('');
  }
    return (
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <button>Send Task</button>
      </form>
    )
}