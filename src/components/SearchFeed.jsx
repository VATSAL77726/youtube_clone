
import { useState, useEffect } from 'react';
import{ Box, Stack, Typography} from '@mui/material';
import {useParams} from 'react-router-dom';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import {Sidebar, Videos} from './';

const SearchFeed = () => {
  
  const [videos, setVideos] = useState([]);
  const {searchTerm } = useParams();

  useEffect( () => 
  { fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
  .then((data) => setVideos(data.items)) // to get data from the async func we need .then()
  }, [searchTerm]);

  return (
    <Box p={2} sx={{overflowY:'auto', height: '90vh', flex:2}}>
          
      <Typography variant="h4" fontweight ='bold' mb={2} sx={{color:'white'}} ml={4} >
        Search Results for: <span style={{color:'#F31503'}}>{searchTerm}
        </span> videos
      </Typography> 

      <Videos videos={videos} /> 
      {/*videos is the property of the Video component. Whereas the {videos} is the value of the property. This value is collected from line 10*/}
    </Box>

  )
}

export default SearchFeed;