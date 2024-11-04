import React, { useRef, useState } from 'react'
import './TodoItem.css'
import { Checkbox } from 'primereact/checkbox'
import { Button } from 'primereact/button'
import { Divider } from 'primereact/divider'
import { Dropdown } from 'primereact/dropdown'

export default function TodoItem({ todo, isLastItem = false, onDelete = () => { } }) {

  const categories = [
    { label: 'Red', value: 'R', colorMap: "bg-red-600" },
    { label: 'Green', value: 'G', colorMap: "bg-green-600" },
    { label: 'Blue', value: 'B', colorMap: "bg-blue-600" },
    { label: 'Yellow', value: 'Y', colorMap: "bg-yellow-300" },
    { label: 'Pink', value: 'P', colorMap: "bg-pink-600" }
  ];

  const handleOptionChange = (value) => {
    console.log("value",value)
  } 

  return (
    <>
      <div className='flex items-center py-3' id="demo">
        <div className='flex-none pr-3 items-center'>
          <Checkbox checked={todo?.status} />
        </div>
        <div className='flex-grow text-left'>
          {todo.title}
        </div>
        <div className='flex-none' >
          <Dropdown
            value={todo?.color}
            options={categories}
            onChange={(e) => handleOptionChange(e.value)}
            placeholder="Select an option"
            pt={{
              input: { className: "p-2 text-sm" },
            }}
          // appendTo={document.body}
          />

        </div>
        <div className='flex-none w-14'>
          <Button icon="pi pi-times" rounded aria-label="Cancel" pt={{
            root: { className: "px-[10px] py-[3px] border-indigo-500 hover:border-indigo-500 bg-white hover:bg-indigo-500 group"},
            icon: { className:"text-indigo-500 group-hover:text-white",style: { fontSize: "0.6rem" } }
          }} />
        </div>
      </div>
      {!isLastItem && <Divider pt={{ root: { className: "my-0.5" } }} />}
    </>

  )
}