import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const path = {
  CONTACTS: "/contacts",
  REGISTER: "/users/signup",
  LOGIN: "/users/login",
  LOGOUT: "/users/logout",
  GET_CURRENT_USER: "/users/current",
};

const setToken = (token) => {
    axios.defaults.headers.common['Authorization'] = "Bearer " + token;
}

const unsetToken = () => {
    axios.defaults.headers.common['Authorization'] = "";
}

export const addContactApi = async (contact) => {
  try {
    const { data } = await axios.post(path.CONTACTS, contact);
    return data;
  } catch (error) {
    throw error.message;
  }
};


export const getContactsApi = async () => {
  try {
    const { data } = await axios.get(path.CONTACTS);
    return data;
  } catch (error) {
    throw error.message;
  }
};

export const removeContactApi = async (id) => {
  try {
    await axios.delete(path.CONTACTS + "/" + id);
    return id;
  } catch (error) {
    throw error.message;
  }
};

export const registerUserApi = async (user) => {
  try {
    const { data } = await axios.post(path.REGISTER, user);
    return data;
  } catch (error) {
    throw error.message;
  }
};

export const loginUserApi = async (user) => {
  try {
    const { data } = await axios.post(path.LOGIN, user);
    setToken(data.token)
    return data;
  } catch (error) {
    throw error.message;
  }
};

export const logoutUserApi = async (user) => {
  try {
    await axios.post(path.LOGOUT, user);
    unsetToken()
    return null;
  } catch (error) {
    throw error.message;
  }
};

export const getUserApi = async (token) => {
  try {
    setToken(token);
    const { data } = await axios.get(path.GET_CURRENT_USER);
    console.log(data)
    return data;
  } catch (error) {
    throw error.message;
  }
};
