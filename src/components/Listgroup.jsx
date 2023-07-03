import React from 'react'
import { useState } from 'react'

function Listgroup() {

    const items = ['An item', 'Another item', 'A third item', 'A fourth item', 'And a fifth one', 'Another one', 'Last one']
    const [selectedIndex, setSelectedIndex] = useState(null)

    const handleClick = (index) => {
        setSelectedIndex(index)
    } 


  return (
    <div > 


    </div>
  )
}

export default Listgroup