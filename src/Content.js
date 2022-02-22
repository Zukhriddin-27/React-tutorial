import React from 'react'
import ItemList from './ItemList'

const Content = ({ items, handleChange, handleDelete }) => {
  //One Lesson 1-6
  //const [name, setName] = useState('Mark')
  //const [count, setCount] = useState(0)

  //  const handleChangeName = () => {
  //   const names = ['Bob', 'James', 'Tina', 'Sara', 'Mark']
  //   const randomIndex = Math.floor(Math.random() * names.length)
  //   setName(names[randomIndex])
  // }
  // const handleChangeName2 = () => {
  //   console.log('You clicked me!')
  // }
  // const handleChangeClick3 = () => {
  //   setCount(count + 1)
  //   console.log(count)
  // }
  // Two lesson 7

  return (
    <main className='item'>
      {/* One Lesson 1-6 */}
      {/* <h1>Hello {name}!</h1>
      <button onClick={handleChangeName}>Click2</button>
      <button onClick={handleChangeClick3}>clicked3</button> */}
      {items.length ? (
        <ItemList
          items={items}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ textAlign: 'center', marginTop: '10rem' }}>
          Your list is empty
        </p>
      )}
    </main>
  )
}

export default Content
