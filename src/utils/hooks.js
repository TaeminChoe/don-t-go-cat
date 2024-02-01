import { useQuery } from "react-query";
import { getProductDetail } from "system/axios/api/product";

export const useGetProductDetail = (id) => {
  const { data, isLoading, error } = useQuery(
    ["product_", id],
    async () => {
      const response = await getProductDetail(id);
      const { code, message, result } = response.data || {};
      if (code !== "200000") throw new Error(message);

      await (() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 1500);
        });
      })();

      return result;
    },
    {
      suspense: false,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60, // staleTime: 1분 동안 유효한 값으로 처리
      cacheTime: 1000 * 60 * 5, // cacheTime: 5분 동안 캐시 유지 (미리보기)
    }
  );

  return {
    data,
    isLoading,
    error,
  };
};
