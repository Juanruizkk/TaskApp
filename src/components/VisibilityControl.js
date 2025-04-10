export const VisibilityControl = ({isChecked,setShowCompleted,cleanTasks}) => {
    const handleDelete = () =>{
        if (window.confirm("¿Está seguro de que desea eliminar todas las tareas completadas?")) {
            cleanTasks();
            
        }
        
    }
  return (
    <div>
      <input
        type="checkbox"
        isChecked={isChecked}
        onChange={(e) => {
            setShowCompleted(e.target.checked);
        }}
      />{" "}
      <label>Show Tasks Done</label>
      <button onClick={handleDelete}>
        Limpiar
      </button>
    </div>
  );
};
