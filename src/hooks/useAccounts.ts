import { feesData } from "../data/mockData";
import { useLoader } from "./helpers/useLoader";

export const useAccounts = () => {
   const fetchFees = async () => {
    // future API: const res = await fetch("/api/fees").then(r => r.json());
    return feesData; // for now mock
  };


  return useLoader(fetchFees, []);
};
