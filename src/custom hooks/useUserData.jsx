import { useQuery } from "@tanstack/react-query";
import { fetchFormUserDetails } from "../utils/api";

const useUserData = () => {
  return useQuery({
    queryKey: ["formDataDetail"],
    queryFn: async () => await fetchFormUserDetails(),
  });
};

export default useUserData;
