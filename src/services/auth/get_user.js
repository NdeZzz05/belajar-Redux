import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http2 from "../../utils/http2";

export const reduxUserData = async ({ queryKey }) => {
  const [_key] = queryKey;
  return await http2.post(API_ENDPOINT.LOGIN_USER, _key);
};

const fetchUserData = async ({ queryKey }) => {
  const [_key] = queryKey;
  const { data } = await http2
    .get(_key)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      if (err.response.status === 401) {
        window.location.href = "/";
      }
    });
  return data;
};

const useGetDataUser = (options) => {
  return useQuery([API_ENDPOINT.GET_USER, options], fetchUserData);
};

export { fetchUserData, useGetDataUser };
