import React, { useState } from 'react'
import './CustomDialog.css'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export default function CustomDialog({
  visible = false,
  onCancel = () => { },
  onProceed = () => { },
  setVisible = () => { }
}) {

  const [value, setValue] = useState('');

  const footerContent = (
    <div>
      <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text mr-2" />
      <Button label="Yes" icon="pi pi-check" onClick={() => setVisible(false)} />
    </div>
  );

  return (
    <Dialog header="Add New Todo" visible={visible} breakpoints={{ '960px': '80vw',}} style={{ width: '40vw' }} onHide={() => { if (!visible) return; setVisible(false); }} footer={footerContent}>
      <InputText placeholder="Enter title" value={value} onChange={(e) => setValue(e.target.value)} pt={{ root: { className: "w-full mt-1 focus:shadow-none" } }} />
    </Dialog>

  )
}