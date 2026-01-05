import { createFileRoute } from '@tanstack/react-router'
import ToDoItem from '@/components/TodoForm'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div>
      <ToDoItem />
    </div>
  )
}
