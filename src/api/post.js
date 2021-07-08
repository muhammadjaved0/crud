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
