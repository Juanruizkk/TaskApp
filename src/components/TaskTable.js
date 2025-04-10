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
    <table>
      <thead>
        <tr>
          <th>Tarea</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>{taskTableRow(showCompleted)}</tbody>
    </table>
  );
};
