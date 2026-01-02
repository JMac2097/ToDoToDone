import React, { useState } from 'react'

const Input: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      // Here you would typically add the new task to your task list state
      console.log('New Task Added:', inputValue)
      setInputValue('') // Clear input after adding task
    }
  }

  return (
    <input
      type="text"
      className=""
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      placeholder="Add a new task..."
    />
  )
}

export default Input
