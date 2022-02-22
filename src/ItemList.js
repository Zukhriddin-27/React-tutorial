import React from 'react'
import LineItem from './LineItem'
function ItemList({ items, handleChange, handleDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  )
}

export default ItemList
