// Write your code here
import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const {
    todoDetails,
    deleteTodo,
    toggleEdit,
    updateTodoTitle,
    toggleComplete,
  } = props
  const {id, title, isCompleted, isEditing} = todoDetails

  const [editText, setEditText] = useState(title)

  const onSave = () => {
    updateTodoTitle(id, editText)
    toggleEdit(id)
  }

  const onDelete = () => {
    deleteTodo(title)
  }

  return (
    <li className="todo-card-container">
      <div className="todo-container">
        <div className="left-section">
          <input
            type="checkbox"
            className="input"
            checked={isCompleted}
            onChange={() => toggleComplete(id)}
          />

          {isEditing ? (
            <input
              type="text"
              className="todo-input"
              value={editText}
              onChange={each => setEditText(each.target.value)}
            />
          ) : (
            <p className={isCompleted ? 'completed' : 'todo-title'}>{title}</p>
          )}
        </div>

        <div className="buttons-container">
          {isEditing ? (
            <button type="button" className="action-button" onClick={onSave}>
              Save
            </button>
          ) : (
            <button
              type="button"
              className="action-button"
              onClick={() => toggleEdit(id)}
            >
              Edit
            </button>
          )}

          <button
            type="button"
            className="action-button"
            onClick={() => deleteTodo(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoItem
