import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import queryClient from "../query-client-provider";

const useAddUserMutation = () => {
  const mutation = useMutation({
    mutationFn: async ({ name, email, phone }) => {
      return axios.post(`http://localhost:4000/addUsers`, {
        name: name,
        email: email,
        phone: phone,
      });
    },
    onSuccess: (successData) => {
      console.log("successData", successData);
      queryClient.invalidateQueries("formDataDetail", {
        refetchActive: true,
      });
    },
  });
  return mutation;
};

export default useAddUserMutation;
