
import {FaPlus} from 'react-icons/fa'
import './groceries.css'
function Additem({newitems,setNewItems,handlesubmit}) {
  return (
    <form className='addform' onSubmit={handlesubmit}>
        <label htmlFor="Add item" id='new'>Add new item</label>
        <input type="text" 
        placeholder='new item' 
        name='newitem' 
        key='new'
        value={newitems}
        onChange={(event)=> setNewItems(event.target.value)}
        />
         <button type='submit' value="Add item">
            <FaPlus />
         </button>
    </form>
  )
}

export default Additem