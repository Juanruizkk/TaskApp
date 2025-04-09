import { useState,useEffect } from "react";
import {TaskCreator} from "./components/TaskCreator";
import "./App.css";

function App() {
  
  const [taskItems,setTaskItems] = useState([
  
  ]);

  function createNewTask(TaskName){
    if (!taskItems.find((task) => task.name === TaskName)) {
      setTaskItems([...taskItems, {name: TaskName, done: false}]);
    }
   
  }
  useEffect(() => {
    let datos = localStorage.getItem("tasks");
    if(datos){
      setTaskItems(JSON.parse(datos));
    }
  },[])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems])

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
