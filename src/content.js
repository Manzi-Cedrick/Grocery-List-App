
import React from 'react'
import Itemlist from './Itemlist'
import './groceries.css'
function Content({items,handlecheck,handledelete}) {
  return (
    <main>
        <div className='grocery'>
        <ul>
            {items&&items.length > 1 ? (items.filter((it, i)=>i !==0)).map((item)=>(
              <Itemlist 
                  handlecheck={handlecheck}
                  items={item}
                  handledelete={handledelete}
              />  
            )): <p>No items found!</p>}
        </ul>
        </div>
    </main>
  )
}

export default Content