import { useQuery } from "react-query";
import { getProductDetail } from "system/axios/api/product";

export const useGetProductDetail = (id) => {
  const { data, isLoading, error } = useQuery(
    ["product_", id],
    async () => {
      const response = await getProductDetail(id);
      const { code, message, result } = response.data || {};
      if (code !== "200000") throw new Error(message);

      return result;
    },
    {
      suspense: false,
    }
  );

  return {
    data,
    isLoading,
    error,
  };
};
