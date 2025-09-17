import axios from "../axios";

export const getHome = () =>
  new Promise((resolve, reject) => {
    axios({
      url: "/home",
      method: "get",
    })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
