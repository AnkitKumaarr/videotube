import { Stack } from '@mui/material';
import { categories } from '../utils/constant';

import React from 'react'


const SideBar = ({selectedCategory, setselectedCategory}) => {
  return (
    <Stack direction={"row"} sx={{overflow:"auto", height : {sx:"auto", md : "95%"}, 
                                flexDirection:{md :"column"} }}
    >
        {categories.map((category, index) => (
            <div key = {index}><button
            className='category-btn'
            onClick={() => setselectedCategory(category.name)}
            style ={{
              background: category.name === selectedCategory && "#FC1503",
              color:"white"
            }}
            >
                <span
                style={{color :category.name === selectedCategory ? "white" :"red", marginRight:"15px"}}
                >{category.icon}</span>
                <span
                style={{opacity: category.name === selectedCategory ? "1" : "0.8"}}
                >{category.name}</span>
            </button>
            </div>
        ))}
    
    </Stack>
  )
}

export default SideBar