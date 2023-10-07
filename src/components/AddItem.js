import React from 'react'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <div>
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor='addItem'>Add Item</label>
            <input autoFocus id='addItem' type='text' placeholder='Add Item' required value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
            <button type='submit' aria-label='add-item'>Add item</button>
        </form>
        
    </div>
  )
}

export default AddItem
