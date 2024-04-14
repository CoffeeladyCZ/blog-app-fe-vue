import { ref } from "vue";

import axiosClient from "../utils/axios";

export const useAxios = async <T>(
  url: string,
  method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE",
  params: URLSearchParams | null,
  requestData: T | null,
) => {
  const data = ref<T | null>(null);
  const isLoading = ref(true);

  const requestUrl = params === null ? url : url + "?" + params.toString();
  try {
    data.value = await axiosClient({
      url: requestUrl,
      method: method,
      data: requestData,
    });
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }

  return { data, isLoading };
};
