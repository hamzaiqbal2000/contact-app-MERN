import axios from "axios";

export async function fetchFormUserDetails() {
  const response = await axios.get(`http://localhost:4000/getUsers`);
  console.log("response ", response.data);
  return response.data;
}
