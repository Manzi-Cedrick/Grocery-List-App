import React from 'react'
import Lineitem from './lineitem'

function Itemlist({handlecheck,items,handledelete}) {
  return (
      <ul>
           
                <Lineitem 
                    key={items.id}
                    item={items}
                    handlecheck={handlecheck}
                    handledelete={handledelete}
                />
    </ul>
   )
}
export default Itemlist