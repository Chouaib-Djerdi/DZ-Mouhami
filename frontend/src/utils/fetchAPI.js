import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

export const postUserCred = async (credentialResponse) => {
  console.log("posted");
  // console.log(getCookie("csrftoken"));
  return await axios.post(
    `${BASE_URL}/google/login/`,
    {
      access_token: credentialResponse,
    },
    {
      // headers: {
      //   "X-CSRFToken": getCookie("csrftoken"),
      // },
    }
  );
};

export const postLawyerForm = async (data) => {
  console.log(data);

  return await axios.post(`${BASE_URL}/api/lawyers/register/`, data);
};
