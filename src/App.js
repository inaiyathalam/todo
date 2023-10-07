import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./app.css";
import { useState } from "react";
import AddItem from "./components/AddItem";
function App() {

  const [items,setItems] = useState(
    [
        {
            id:1,
            checked:true,
            item:"Java"
        },
        {
            id:2,
            checked:true,
            item:"Python"
        },           
        {
            id:3,
            checked:true,
            item:"C"
        }
    ]
);
const [newItem , setNewItem] = useState('')
function handleChange(id){
    const listItems =  items.map((item) => item.id ===id ? {...item,checked:!item.checked} : item)
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems));
}
function handleDelete(id){
    const listItems = items.filter((item) => item.id != id)
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems));
}

const handleSubmit = (e) => {
  e.preventDefault()
  console.log("Submitted")

  addItem(newItem)
  setNewItem('')

}

const addItem = (item) =>{
  const id = items.length ? items[items.length -1] +1 : 1
  setItems([...items,{id,checked:false,item}])

}



  return (
    <div className="App">
      <Header className="header" title="Todo List"

      />
      <AddItem
        newItem = {newItem}
        setNewItem  = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <Content
                items ={items}
                handleChange = {handleChange}
                handleDelete = {handleDelete}
      
      /> 
      <Footer
          items  = {items}
      />
      
    </div>
        



  );
}

export default App;
