import React from 'react';
import Post from './Post/Post';
import {useSelector} from "react-redux"
import {StyledContainer} from "./styles"
const Posts=()=>{
  const posts=useSelector((state)=>state.posts)
   console.log(posts)
  return(
        <StyledContainer>
        <h1>Posts</h1>    
        <Post/> 
        </StyledContainer>
    )

}
export default Posts