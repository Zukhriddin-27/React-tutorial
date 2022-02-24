import React from 'react'
import { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'
function AddItem({ newItems, setNewItems, handleSubmit }) {
  const inputRef = useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor='addItem'>Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id='addItem'
        type='text'
        placeholder='Add an item'
        required
        value={newItems}
        onChange={(e) => setNewItems(e.target.value)}
      />
      <button
        type='submit'
        aria-label='Add Item'
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  )
}

export default AddItem
