import { createFileRoute } from '@tanstack/react-router'
import Input from '../components/Input'

export const Route = createFileRoute('/')({
  component: App
})

function App() {
  return (
    <Input/>
  )
}