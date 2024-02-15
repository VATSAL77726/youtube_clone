import {Stack} from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import SearchBar from './SearchBar';
const Navbar = () => (
  <Stack 
  
  alignItems="center" 
  p={2} 
  sx={{positon:'sticky',
  background: '#000', 
  top:0,
  justifyContent:'space-between', flexDirection:{md:"row"}}}
  >
    <Link to="/" style={{display: 'flex', 
    alignItems: 'center' }}>
      <img src={logo} alt="logo" height={50} />
      <h1 style={{
        color : 'white', 
        fontFamily:'fantasy', 
        paddingLeft:20, 
        letterSpacing:4, 
        fontSize:50,
        }}>YouthTube !</h1>
    </Link>
    <SearchBar />
  </Stack>
)

export default Navbar