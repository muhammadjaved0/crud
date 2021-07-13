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
    return response;
  } catch (error) {
    console.error(error);
  }
}
export async function editPostApi(posts) {
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
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function deletePostApi(posts) {
  console.log("delete post api run");
  const response = await axios.delete(
    `https://jsonplaceholder.typicode.com/posts/${posts}`
  );
  return response;
}
