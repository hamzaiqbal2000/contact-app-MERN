import axios from "axios";
axios.defaults.withCredentials = true;

export async function fetchFormUserDetails() {
  const response = await axios.get(`http://127.0.0.1:4000/getUsers`, {
    withCredentials: true,
    credentials: "include",
    // credentials: "same-origin",
  });
  console.log("response ", response.data);
  return response.data;
}
