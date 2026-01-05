import { createFileRoute } from '@tanstack/react-router'
import Input from '../components/Input'
import GeneralButton from '@/components/GeneralButton'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {

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
