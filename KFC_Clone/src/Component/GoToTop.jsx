import { Button } from '@chakra-ui/react'
import React from 'react'
import './goToBtn.css'

const GoToTop = () => {
    function goToBtn(){
        window.scrollTo({top:0,left:0, behavior:'smooth'})
    }
  return (
<div className='top-btn'><Button  onClick={goToBtn}>GoToTop</Button></div>
  )
  
}

export default GoToTop