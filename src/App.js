import { useState } from 'react'
//import './App.css'
import Content from './Content'
import AddItem from './AddItem'
import Footer from './Footer'
import Header from './Header'

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('shoppinglist'))
  )
  const [newItems, setNewItems] = useState('')
  const setAndSaveItems = (newItems) => {
    setItems(newItems)
    localStorage.setItem('shoppinglist', JSON.stringify(newItems))
  }
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = { id, checked: false, item }
    const itemList = [...items, myNewItem]
    setAndSaveItems(itemList)
    localStorage.setItem('shoppinglist', JSON.stringify(itemList))
  }
  const handleChange = (id) => {
    const itemList = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setAndSaveItems(itemList)
  }
  const handleDelete = (id) => {
    const itemList = items.filter((item) => item.id !== id)
    setAndSaveItems(itemList)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItems) return
    addItem(newItems)
    setNewItems('')
    console.log('addSubmit')
  }
  return (
    <div className='App'>
      <Header title='Grocey List' />
      <AddItem
        newItems={newItems}
        setNewItems={setNewItems}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  )
}

export default App
