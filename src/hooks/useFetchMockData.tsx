import { useQuery } from "react-query";
import axios from "axios";
import { BACKEND_CONSTANTS } from "../constants/backend";

export const useFetchMockData = () => {
  const fetchData = async () => {
    const response = await axios.get(BACKEND_CONSTANTS.MOCK_DATA_URL);
    return response.data;
  };

  return useQuery("mockData", fetchData);
};
