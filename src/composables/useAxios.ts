import { ref } from "vue";

import axiosClient from "../utils/axios";
import { IArticleDetail } from "../types";

export const useAxios = async <T>(
  url: string,
  method: "GET" | "POST",
  params:URLSearchParams | null,
  requestData: IArticleDetail | null,
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
