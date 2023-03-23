import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchFormUserDetails() {
  const response = await axios.get(`http://localhost:4000/getUsers`);
  console.log("response ", response.data);
  return response.data;
}

const useUserData = () => {
  return useQuery({
    queryKey: ["formDataDetail"],
    queryFn: async () => await fetchFormUserDetails(),
  });
};

export default useUserData;
