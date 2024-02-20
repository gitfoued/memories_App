import * as api from '../api'
import {createAsyncThunk} from "@reduxjs/toolkit"
//pour avoir l'acces a tous l'api 
//creer les actions 
//payload data ouu on va stocker les donnes du fct action
export const getPosts = createAsyncThunk('posts/fetchAll', async () => {
    try {
      const response = await api.fetchPosts(); // Assume fetchPosts is a function in your api file
      return response.data; // Adjust this based on your API response structure
    } catch (error) {
      throw Error('Error fetching posts'); // Handle errors appropriately
    }
  });