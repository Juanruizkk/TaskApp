export const TaskRow = ({ task, toggleTask }) => {
    const checkboxId = `checkbox-${task.name}`; // ID único por tarea
  return (
    <tr key={task.name}>
      <td>{task.name}</td>

        <td>
          <label htmlFor={checkboxId} className="me-2">{task.done ? "Completada" : "Pendiente"}</label>
          <input
          id={checkboxId}
            type="checkbox"
            checked={task.done}
            onChange={() => toggleTask(task.name)}
          />
        </td>
      
    </tr>
  );
};
