import { useEffect, useState } from 'react';

import Header from './header'
import Additem from './Additem';
import Content from './content'
import Footer from './footer'

function App() {
  
const [newitems,setNewItems]=useState('')
const [isAdded, setIsAdded] = useState(false)
const[searched, setSearched] = useState("")
// const [cart, setCart] = 
  const [items,setItems]=useState(localStorage.getItem("shoppinglist") && JSON.parse(localStorage.getItem("shoppinglist")).length > 0 ? JSON.parse(localStorage.getItem("shoppinglist")) :[{
    item: "",
    checked: false,
    id: 0
  }]);
  const handlecheck=(id)=>{
  console.log(`THe key is:${id}`)
  const listitems=items.map((item)=>item.id===id?{...item,checked:!item.checked}:item);
  setItems(listitems)
  // addTostorage();  
  }
  
const log=()=>{
  // items.length > 0 && localStorage.setItem("shoppinglist", JSON.stringify(items))
  // (localStorage.getItem("shoppinglist") && JSON.parse(localStorage.getItem("shoppinglist")).length > 0) && setItems(JSON.parse(localStorage.getItem("shoppinglist")))
  console.log(items)
}
 useEffect(()=>{
    log()
  },[])
  ///Adding to the localstorage
const addTostorage = ()=>{
  let cart = localStorage.getItem("shoppinglist") && JSON.parse(localStorage.getItem("shoppinglist")).length > 0 ? JSON.parse(localStorage.getItem("shoppinglist")) : [{
    item: "",
    id: 0,
    checked: false
  }];
  let newItem = {item: newitems, id: items.length+ 1, checked: false}
  cart.push(newItem);
  localStorage.getItem("shoppinglist") && JSON.parse(localStorage.getItem("shoppinglist")).length > 0 ? console.log("found a list!"): console.log("found no list")
  localStorage.setItem('shoppinglist',JSON.stringify(cart));
  setIsAdded(true)
  console.log("storage items")
 console.log(JSON.parse(localStorage.getItem("shoppinglist")))

}
//delete an item when the id is deleted
const handledelete = id =>{
  const listitems=items.filter((item)=>item.id !== id);
  setItems(listitems)
  localStorage.removeItem("shoppinglist");
  localStorage.setItem("shoppinglist", JSON.stringify(listitems))
}

//the function to add an item to the array of the objects
const AddItem=(item )=>{
  const id=items.length+1;
  const mynewitems={id,checked:false,item}
  const listitems=[...items,mynewitems]
  setItems(listitems);
  addTostorage();
} 
//Submitting the inputs in the form
const handlesubmit=(event)=>{
  event.preventDefault()
  if (!newitems) return;
  AddItem(newitems)
  setNewItems('')
}
  return (
    <div className="App">
      <Header title="Grocery List"/>
      <Additem 
        newitems={newitems}
        setNewItems={setNewItems}
        handlesubmit={handlesubmit}
        AddItem={AddItem}
      />
      <Content 
        items={items} 
        handlecheck={handlecheck}
        handledelete={handledelete}
      />
      
      <Footer length={items.length}/>
    </div>
    
  );
}

export default App;
