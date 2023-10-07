import React from 'react'
import Item from './Item'
const ItemList = ({items, handleChange,handleDelete}) => {
  return (
    <div>
        <ul>
            {items.map((item) => (
                <Item
                item ={item}

                //Every List item should have a key, on mapping, ; it is not nessacery to get this on props.key in list, but here it is needed
                key = {item.id}
                handleChange = {handleChange}
                handleDelete = {handleDelete}
      
                
                />
            ))}

        </ul>
    </div>
  )
}

export default ItemList
