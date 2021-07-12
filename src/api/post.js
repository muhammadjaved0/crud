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
  console.log("here is post body", posts);
  debugger;
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        body: { posts },
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    console.log("here is post responces", response.data.body.posts);
    debugger;
    return response;
  } catch (error) {
    console.error(error);
  }
}
export async function editPostApi(posts) {
  console.log("here is edit body", posts);
  debugger;
  try {
    const response = await axios.put(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        body: { posts },
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    console.log("here is post responces", response);
    debugger;
    return response;
  } catch (error) {
    console.error(error);
  }
}




export async function deletePostsApi(posts) {
  console.log("delete post api run");
  debugger;
  const response = await axios.delete(
    `https://jsonplaceholder.typicode.com/posts/${posts}`
  );
  return response;
}
