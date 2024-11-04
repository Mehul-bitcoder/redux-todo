import React from 'react'
import './Todo.css'
import { Panel } from 'primereact/panel';
import TodoBody from '../TodoBody/TodoBody';
import TodoFooter from '../TodoFooter/TodoFooter';

export default function Todo() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/5">
        <Panel
          header="Todo App"
          pt={{
            header:
              'p-4 flex items-center justify-center border border-indigo-300 bg-indigo-500 text-indigo-50 rounded-tl-md rounded-tr-md dark:bg-indigo-900 dark:border-indigo-900/40 dark:text-white/80',
          }}>
          <div className='scrollpanel-demo'>
            <TodoBody />
          </div>
          <TodoFooter />
        </Panel>
      </div>
    </div>
  )
}


