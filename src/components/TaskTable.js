import { TaskRow } from "./TaskRow";
export const TaskTable = ({ taskItems, toggleTask, showCompleted = false }) => {
  const taskTableRow = (doneValue) => {
    // Filtrar las tareas por el estado de la tarea
    return taskItems
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow
          task={task}
          key={task.name}
          toggleTask={toggleTask}
          showCompleted
        />
      ));
  };

  return (
    <table className="table table-dark table-striped table-bordered table-secondary">
      <thead>
        <tr className="table-primary">
          <th>Tarea</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>{taskTableRow(showCompleted)}</tbody>
    </table>
  );
};
