import { useState } from "react";
import { getProductInfo } from "./api";
import { useQuery } from "react-query";

export const useGetProductDetail = (id) => {
  const [productInfo, setProductInfo] = useState({});

  // const res = useQuery(
  const { isLoading, error } = useQuery(
    ["product", id],
    async () => {
      const {
        data: { code, message, result },
      } = await getProductInfo(id);
      console.log(result);
      return result;
    },
    {
      onSuccess: (data) => {
        setProductInfo(data);
      },
    }
  );

  return {
    productInfo,
    isLoading,
    error,
  };
};
