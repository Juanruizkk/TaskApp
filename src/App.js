import { useState } from "react";
import {TaskCreator} from "./components/TaskCreator";
import "./App.css";

function App() {
  
  const [taskItems,setTaskItems] = useState([
    {name: "Mi primer tarea", done: false},
    {name: "Mi segunda tarea", done: false},
    {name: "Mi tarea tarea", done: false},
  ]);

  function createNewTask(TaskName){
    if (!taskItems.find((task) => task.name === TaskName)) {
      setTaskItems([...taskItems, {name: TaskName, done: false}]);
    }
   
  }

  return (
    <div className="App">
        <TaskCreator createNewTask={createNewTask}/>
        <table>
          <thead>
            <tr>
              <th>Tarea</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {taskItems.map((task) => (
              <tr key={task.name}>
                <td>{task.name}</td>
                <td>{task.done ? "Completada" : "Pendiente"}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}

export default App;
