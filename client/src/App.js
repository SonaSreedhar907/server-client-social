import React,{useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import memories from './images/memories.png';
import { styled } from '@mui/system'; 
import Posts from './component/Posts/Posts';
import Form from './component/Form/Form';
import { useDispatch } from 'react-redux';
import {getPosts} from './actions/posts'


const StyledAppBar = styled(AppBar)({
  borderRadius: 15,
  margin: '30px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledHeading = styled(Typography)({
  color: 'rgba(0, 183, 255, 1)',
});

const StyledImage = styled('img')({
  marginLeft: '15px',
});

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getPosts())
  },[dispatch])
  return (
    <Container maxWidth="lg">
      <StyledAppBar position="static" color="inherit">
        <StyledHeading variant="h2" align="center">
          Memories
        </StyledHeading>
        <StyledImage src={memories} alt="icon" height="60" />
      </StyledAppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
