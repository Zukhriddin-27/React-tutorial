import React from 'react'
import { FaPlus } from 'react-icons/fa'
function AddItem({ newItems, setNewItems, handleSubmit }) {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor='addItem'>Add Item</label>
      <input
        autoFocus
        id='addItem'
        type='text'
        placeholder='Add an item'
        required
        value={newItems}
        onChange={(e) => setNewItems(e.target.value)}
      />
      <button type='submit' aria-label='Add Item'>
        <FaPlus />
      </button>
    </form>
  )
}

export default AddItem
