import axios from "axios";

export async function fetchPost() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function addPostApi(posts) {
  console.log("here is post body",posts)
  debugger
  try {
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts',{
  body: {posts},
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
   console.log("here is post responces" , response.data.body.posts)
   debugger
    return response;
  } catch (error) {
    console.error(error);
  }
}
