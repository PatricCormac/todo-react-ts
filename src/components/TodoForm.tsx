import React, { useState } from 'react'

const TodoForm: React.FC = () => {
  const [title, setTitle] = useState<string>('')

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log(title);
      setTitle('')
    }
  }

  return (
    <div className="input-field">
      <input onChange={changeHandler} onKeyPress={keyPressHandler} value={title} id="title" type="text" placeholder="Помыть машину" />
      <label htmlFor="title" className="active">
        Заголовок задачи
      </label>
    </div>
  )
}

export default TodoForm
