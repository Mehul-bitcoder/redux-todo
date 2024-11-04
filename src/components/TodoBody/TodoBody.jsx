import React from 'react'
import './TodoBody.css'
import { ScrollPanel } from 'primereact/scrollpanel';
import TodoItem from '../TodoItem/TodoItem';

export default function TodoBody() {

  const todos = [
    {
      id: 183643,
      title: "Some Todo Title",
      status: true,
      color: "R"
    },
  ]


  return (

    <div className="todo-body scrollbar-thin" >
      <ScrollPanel
        pt={{ barY: { className: "custombar1 w-1" } }}
        style={{ width: '100%', height: '250px' }}
      >
        {
          todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
        }
      </ScrollPanel>
    </div>
  )
}