// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {title} = todoDetails
  const onDelete = () => {
    deleteTodo(title)
  }
  return (
    <li className="todo-card-container">
      <div className="todo-container">
        <p className="todo-title"> {title} </p>
        <button type="button" className="delete-button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
