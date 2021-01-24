import axios from "axios";

const host = "http://localhost:3000";

export const register = (newUser) => {
  return axios
    .post(host + "/users/register", {
      first_name: newUser.firstName,
      last_name: newUser.lastName,
      email: newUser.email,
      password: newUser.password,
    })
    .then((res) => {
      console.log("Registered");
    });
};

export const login = (user) => {
  console.log(user);
  return axios
    .post(host + "/users/login", {
      email: user.email,
      password: user.password,
    })
    .then((res) => {
      localStorage.setItem("usertoken", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err.res);
    });
};
