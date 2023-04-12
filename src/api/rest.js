import axios from "axios";
import qs from "querystringify";
import { baseUrl } from "./baseUrl";
// require("dotenv");

// const baseUrl = baseUrl;
const TIMEOUT = 300000;

const getAuthToken = () => {
    return localStorage.getItem("tokenAdmin") || "";
  };
  

  const handleResponse = (r, isAuth) => {
    if (!r) {
      window.location.href = "/";
      return;
    }
    if (r?.status === 401 || r?.status === 403) {
      if (isAuth) window.location.href = "/";
      return r;
    } else if (r?.status === 500) {
      if (isAuth) window.location.href = "/";
      return r;
    } else {
      return r;
    }
  };
  
  const redirectToSomethingWentWrongScreen = () => {
    return setTimeout(() => {
      window.location.href = "/500";
    }, TIMEOUT);
  };

  

  export const rest = {
    get: async (endpoint, params, timeout = TIMEOUT, isAuth) => {
      let options = {};
      if (isAuth) {
        const auth = getAuthToken();
        if (auth) {
          options = {
            headers: {
              "Authorization": auth,
            },
          };
        }
      }
  
      const handleTimeout = redirectToSomethingWentWrongScreen(timeout);
      try {
        const res = await axios.get(
          `${baseUrl + endpoint}${
            JSON.stringify(params) !== "{}" ? "?" : ""
          }${qs.stringify({ ...params })}`,
          options.headers ? options : {}
        );
        clearTimeout(handleTimeout);
        return res.data;
      } catch (err) {
        clearTimeout(handleTimeout);
        return handleResponse(err?.response?.data, isAuth);
      }
    },
    post: async (endpoint, params, timeout = TIMEOUT, isAuth) => {
      let options = {};
      if (isAuth) {
        const auth = getAuthToken();
        if (auth) {
          options = {
            headers: {
              "Authorization": auth,
            },
          };
        }
      }
  
      const handleTimeout = redirectToSomethingWentWrongScreen(timeout);
      try {
        const res = await axios.post(baseUrl + endpoint, { ...params }, options);
        clearTimeout(handleTimeout);
        return res.data;
      } catch (err) {
        clearTimeout(handleTimeout);
        return handleResponse(err?.response?.data, isAuth);
      }
    },
    put: async (endpoint, params, timeout = TIMEOUT, isAuth) => {
      let options = {};
      if (isAuth) {
        const auth = getAuthToken();
        if (auth) {
          options = {
            headers: {
              "Authorization": auth,
            },
          };
        }
      }
      const handleTimeout = redirectToSomethingWentWrongScreen(timeout);
      try {
        const res = await axios.put(baseUrl + endpoint, { ...params }, options);
        clearTimeout(handleTimeout);
        return res.data;
      } catch (err) {
        clearTimeout(handleTimeout);
        return handleResponse(err?.response?.data, isAuth);
      }
    },
    patch: async (endpoint, params, timeout = TIMEOUT, isAuth) => {
      let options = {};
      if (isAuth) {
        const auth = getAuthToken();
        if (auth) {
          options = {
            headers: {
              "Authorization": auth,
            },
          };
        }
      }
      const handleTimeout = redirectToSomethingWentWrongScreen(timeout);
      try {
        const res = await axios.patch(baseUrl + endpoint, { ...params }, options);
        clearTimeout(handleTimeout);
        return res.data;
      } catch (err) {
        clearTimeout(handleTimeout);
        return handleResponse(err?.response?.data, isAuth);
      }
    },
    delete: async (endpoint, params, timeout = TIMEOUT, isAuth) => {
      let options = {};
      if (isAuth) {
        const auth = getAuthToken();
        if (auth) {
          options = {
            headers: {
              "Authorization": auth,
            },
          };
        }
      }
      const handleTimeout = redirectToSomethingWentWrongScreen(timeout);
      try {
        const res = await axios.delete(
          baseUrl + endpoint,
          options.headers ? options : {}
        );
        clearTimeout(handleTimeout);
        return res.data;
      } catch (err) {
        clearTimeout(handleTimeout);
        return handleResponse(err?.response?.data, isAuth);
      }
    },
  };