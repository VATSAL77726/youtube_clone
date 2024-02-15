import { useState,useEffect} from 'react';
import{ Box, Stack, Typography} from '@mui/material';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import {Sidebar, Videos} from './';
import { FitScreen } from '@mui/icons-material';

const Feed = () => {
  
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect( () => 
  { fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
  .then((data) => setVideos(data.items)) // to get data from the async func we need .then()
  }, [selectedCategory]);

  return (
    <Stack
       sx={{ flexDirection: {sx:
      "column", md:"row" }}} >
        <Box 
        sx={{ height: {sx: FitScreen, md:'100vh' }, 
        borderRight: '1px solid #3d3d3d', 
        px: {sx:0, md:2 }}}
        >
          <Sidebar
            selectedCategory = {selectedCategory} setSelectedCategory= {setSelectedCategory}
          />

          <Typography 
          className='copyright' 
          variant="body2" 
          sx={{mt:1.5,color:'#fff'}}
          >
            Copyright 2023 JSMVs
          </Typography>
        </Box>

        <Box p={2} sx={{overflowY:'auto', height: '90vh', flex:'2'}}>
          
          <Typography variant="h4" fontweight ='bold' mb={2} sx={{color:'white'}} ml={4} >
            {selectedCategory} <span style={{color:'#F31503'}}>Videos</span>
          </Typography> 

          <Videos videos={videos} /> 
          {/*videos is the property of the Video component. Whereas the {videos} is the value of the property. This value is collected from line 10*/}
        </Box>

        


    </Stack>
  )
}

export default Feed