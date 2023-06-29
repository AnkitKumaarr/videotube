import React from 'react'
import {Stack, Typography} from '@mui/material';
import {Link}  from 'react-router-dom';

import {logo} from '../utils/constant';
import SearchBar from './SearchBar.jsx';

const Navbar = () => {
  return (
    <Stack direction="row" alignItems="center" 
      p = {2} 
      sx={{position :"sticky", background :'#000', top :'0', justifyContent:'space-between' }}>
 
    <Link to="/" style={{display :'flex', alignItems :'center'}}>
    <img src={logo} alt = "logo" height={45}/>

      <Stack>
        <Typography sx={{color:"white", fontWeight:"bold", fontSize:"30px", mb:"-15px"}}>YouTube</Typography>
        <Typography sx={{color:"red", fontWeight:"bold", fontSize:"30px"}}>Clone</Typography>
      </Stack>
    </Link>
    <SearchBar/>
    </Stack>
  )
}

export default Navbar