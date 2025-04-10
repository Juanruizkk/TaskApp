export const TaskRow = ({task,toggleTask}) => {
  return (
    <tr key={task.name}>
      <td>{task.name}</td>
      <td>{task.done ? "Completada" : "Pendiente"}</td>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => toggleTask(task.name)}
      />
    </tr>
  );
};
