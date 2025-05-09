import { useState, useEffect } from "react";
import { TaskCreator } from "./components/TaskCreator";
import "./App.css";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";

function App() {
  const [taskItems, setTaskItems] = useState([]);
  // Estado para mostrar las tareas completadas
  const [showCompleted, setShowCompleted] = useState(false);
  // Funcion para crear una nueva tarea,  es llamada cada vez que envio el formulario en el componente TaskCreator
  function createNewTask(TaskName) {
    if (!taskItems.find((task) => task.name === TaskName)) {
      setTaskItems([...taskItems, { name: TaskName, done: false }]);
    }
  }

  const toggleTask = (taskName) => {
    setTaskItems(
      taskItems.map((t) => (t.name === taskName ? { ...t, done: !t.done } : t))
    );
  };

  // Listo las tareas desde el localStorage al cargar la aplicacion
  useEffect(() => {
    let datos = localStorage.getItem("tasks");
    if (datos) {
      setTaskItems(JSON.parse(datos));
    }
  }, []);

  const cleanTasks = () => {
    setTaskItems(taskItems.filter((task) => !task.done));
    setShowCompleted(false);
  }

  // Guardar las tareas en el localStorage cada vez que cambian
  // el estado de las tareas
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <main className="bg-dark vh-100 text-white">
      <div className="container p-4 col-md-4 offset-md-4">
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable taskItems={taskItems} toggleTask={toggleTask} />

      <VisibilityControl
      isChecked={showCompleted}
      setShowCompleted={(checked)=>setShowCompleted(checked)} cleanTasks={cleanTasks}
        
      />

      {showCompleted && (
        <TaskTable
          taskItems={taskItems}
          toggleTask={toggleTask}
          showCompleted={showCompleted}
        />
      )}
      </div>
    </main>
  );
}

export default App;
