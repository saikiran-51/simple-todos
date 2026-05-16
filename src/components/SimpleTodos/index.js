import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    isCompleted: false,
    isEditing: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    isCompleted: false,
    isEditing: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    isCompleted: false,
    isEditing: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    isCompleted: false,
    isEditing: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    isCompleted: false,
    isEditing: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    isCompleted: false,
    isEditing: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    isCompleted: false,
    isEditing: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    isCompleted: false,
    isEditing: false,
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
    inputValue: '',
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  onAddTodo = () => {
    const {inputValue, todosList} = this.state

    if (inputValue === '') {
      return
    }

    const splitInput = inputValue.split(' ')
    const lastWord = splitInput[splitInput.length - 1]
    let count = parseInt(lastWord)

    if (Number.isNaN(count)) {
      count = 1
    } else {
      splitInput.pop()
    }

    const title = splitInput.join(' ')
    const newTodos = []

    for (let i = 0; i < count; i += 1) {
      newTodos.push({
        id: todosList.length + i + 1,
        title,
        isCompleted: false,
        isEditing: false,
      })
    }

    this.setState(prevState => ({
      todosList: [...prevState.todosList, ...newTodos],
      inputValue: '',
    }))
  }

  toggleEdit = id => {
    this.setState(prevState => ({
      todosList: prevState.todosList.map(each => {
        if (each.id === id) {
          return {
            ...each,
            isEditing: !each.isEditing,
          }
        }
        return each
      }),
    }))
  }

  updateTodoTitle = (id, newTitle) => {
    this.setState(prevState => ({
      todosList: prevState.todosList.map(each => {
        if (each.id === id) {
          return {
            ...each,
            title: newTitle,
          }
        }
        return each
      }),
    }))
  }

  toggleComplete = id => {
    this.setState(prevState => ({
      todosList: prevState.todosList.map(each => {
        if (each.id === id) {
          return {
            ...each,
            isCompleted: !each.isCompleted,
          }
        }
        return each
      }),
    }))
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const filteredTodoList = todosList.filter(each => each.id !== id)
    this.setState({
      todosList: filteredTodoList,
    })
  }

  render() {
    const {todosList, inputValue} = this.state

    return (
      <div className="app-container">
        <div className="todos-container">
          <h1 className="heading">Simple Todos</h1>

          <div className="input-container">
            <input
              type="text"
              className="todo-input"
              onChange={this.onChangeInput}
              value={inputValue}
              placeholder="Enter todo"
            />

            <button
              type="button"
              onClick={this.onAddTodo}
              className="add-button"
            >
              Add
            </button>
          </div>

          <ul className="list-container">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
                toggleEdit={this.toggleEdit}
                updateTodoTitle={this.updateTodoTitle}
                toggleComplete={this.toggleComplete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
