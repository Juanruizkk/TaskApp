import { TaskRow } from "./TaskRow"
export const TaskTable =({taskItems, toggleTask}) => {
    return (
    <table>
    <thead>
      <tr>
        <th>Tarea</th>
        <th>Estado</th>
      </tr>
    </thead>
    <tbody>
      {taskItems.map((task) => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
      ))}
    </tbody>
  </table>
  )
}