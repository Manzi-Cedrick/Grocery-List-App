import React from 'react'

function Header({title}) {
    const color ={
        backgroundColor:'royalblue',
        color:'white',
        height:'50px',
        width:'700px',
        margin:'auto',
        fontSize:'xx-large',
        textAlign:'center',
        paddingTop:'4px',
        boxShadow:'2px 2px 40px 25px  rgba(100, 100, 100, 0.251)'
    }
  return (
    <header style={color}>{title}</header>
  )
}
Header.defaultProps={
  title:"Grocery Bug"
}

export default Header