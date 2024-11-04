import React, { useState } from 'react'
import './TodoFooter.css'
import { Checkbox } from "primereact/checkbox";
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import CustomDialog from '../CustomDialog/CustomDialog';

export default function TodoFooter() {

  const [visible, setVisible] = useState(false)

  const categories = [
    { name: 'Red', key: 'R', colorMap: "bg-red-600" },
    { name: 'Green', key: 'G', colorMap: "bg-green-600" },
    { name: 'Blue', key: 'B', colorMap: "bg-blue-600" },
    { name: 'Yellow', key: 'Y', colorMap: "bg-yellow-300" },
    { name: 'Pink', key: 'P', colorMap: "bg-pink-600" }
  ];

  const customButtonStyles = {
    style1: "px-2 py-2 text-indigo-600 hover:bg-indigo-100/50"
  }


  const [selectedCategories, setSelectedCategories] = useState([]);

  const onCategoryChange = (e) => {
    let _selectedCategories = [...selectedCategories];

    if (e.checked)
      _selectedCategories.push(e.value);
    else
      _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

    setSelectedCategories(_selectedCategories);
  };

  return (
    <div className='grid gap-2 sm:grid-cols-2 lg:grid-cols-3'>
      <div className='footer-child lg:text-left'>
        <div className='footer-child-head mb-1 flex justify-center items-center'>
          <span className="pi pi-palette mr-3"></span>
          <span>Filter By Color</span>
        </div>
        <Divider pt={{ root: { className: "my-3" } }} />
        <div className='footer-child-body grid md:grid-cols-2'>
          {categories.map((category) => {
            return (
              <div key={category.key} className="flex align-items-center mb-3">
                <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                <div className={`w-[30px] ml-2 rounded-md ${category.colorMap}`}></div>
                <label htmlFor={category.key} className="ml-2">
                  {category.name}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      <div className='footer-child'>
        <div className='footer-child-head mb-1 flex justify-center items-center'>
          <span className="pi pi-search  mr-3"></span>
          <span>Filter By Status</span>
        </div>
        <Divider pt={{ root: { className: "my-3" } }} />
        <div className='footer-child-body flex flex-col items-center'>
          <Button label="All" className='mb-2 w-9/12 py-1' pt={{ root: { className: customButtonStyles.style1 } }} text />
          <Button label="Active" className='mb-2 w-9/12' pt={{ root: { className: customButtonStyles.style1 } }} text />
          <Button label="Completed" className='mb-2 w-9/12' pt={{ root: { className: customButtonStyles.style1 } }} text />
        </div>
      </div>

      <div className='footer-child sm:max-lg:col-span-2'>
        <div className='footer-child-head mb-1 flex justify-center items-center'>
          <span className="pi pi-wrench mr-3"></span>
          <span>Actions</span>
        </div>
        <Divider pt={{ root: { className: "my-3" } }} />
        <div className='footer-child-body'>
          <Button label="Add New" className='mb-2 w-9/12 py-1' pt={{ root: { className: customButtonStyles.style1 } }} text onClick={() => setVisible(true)} />
          <Button label="Mark All Completed" className='mb-2 w-9/12 py-1' pt={{ root: { className: customButtonStyles.style1 } }} text />
          <Button label="Clear Completed" className='mb-2 w-9/12' pt={{ root: { className: customButtonStyles.style1 } }} text />
        </div>
      </div>

      <CustomDialog
        visible={visible}
        setVisible={setVisible}
      />

    </div>
  )
}