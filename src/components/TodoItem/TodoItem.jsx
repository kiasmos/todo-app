const TodoItem = ({ name, id, handleDelete }) => {
  return (
    <div className="todo-item">
      <p>{name}</p>
      <div className="button-wrapper">
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
