import axios from "axios";
import { GET_ERRORS } from "./types";

// Register User                        // better way that putting dispatch (thunk) function inside dispatch
export const registerUser = (userData, history) => (dispatch) => {
  // we are dealing with async data
  axios
    .post("/api/users/register", userData)
    .then((res) => history.push("/login"))
    .catch((err) =>
      // since we are making an ajax call and waiting for a response, we're not gonna return type and payload, we have to call dispatch
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
