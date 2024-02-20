import React ,{useEffect}from 'react';
import { StyledContainer } from './styles';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import images from './images/memories.png';
import Posts from './componenets/Posts/Posts';
import Form from './componenets/Form/Form';
import {useDispatch} from "react-redux"
import {getPosts} from "./actions/posts"//ecrire une action
function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch])
  return (
    <StyledContainer>
      <AppBar className={StyledContainer.appBar}>
        <Typography className={StyledContainer.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img src={images} className={StyledContainer.image} alt="memories" height="" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </StyledContainer>
  );
}

export default App;
