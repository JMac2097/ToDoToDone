import GeneralButton from './GeneralButton'
import Input from './Input'

const ToDoItem = () => {

		const handleAddTodo = () => {
		console.log('Add Task button clicked');
	}	

	const handleRemoveTodo = () => {
		console.log('Remove Task button clicked');
	}

  return (
    <div>
      <Input />
      <GeneralButton onClick={handleAddTodo}>Add Task</GeneralButton>
      <GeneralButton onClick={handleRemoveTodo}>Remove Task</GeneralButton>
    </div>
  )
}

export default ToDoItem
