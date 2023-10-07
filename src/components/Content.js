import React, { useState } from 'react'
import ItemList from './ItemList'

const Content = ({items,handleDelete,handleChange}) =>{

  return (
    <div>
        {items.length ? (
            <ItemList
            items ={items}
            handleChange = {handleChange}
            handleDelete = {handleDelete}
  
            
            />
        ):(
            <h1>List is Empty</h1>
        )}

        
        
    </div>
  )
}

export default Content
