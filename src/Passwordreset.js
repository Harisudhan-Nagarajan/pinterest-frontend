import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as yup from "yup";

export function Passwordreset({ setpasswordchange }) {
  const History = useHistory();
  const [fetcherror, setfetcherror] = useState("");
  const { handleChange, handleBlur, handleSubmit, errors, values, touched } =
    useFormik({
      initialValues: {
        password: "",
        username: sessionStorage.getItem("resetusername"),
      },
      validationSchema: yup.object({
        password: yup
          .string()
          .min(8, "Password is too Small")
          .max(14, "Password is to Big")
          .matches(
            /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#!%&])/g,
            "Pattern is not matched"
          )
          .required("Password is required"),
      }),
      onSubmit: async (values) => {
        await fetch("https://hari-pinterestbackend.herokuapp.com/users/changepassword", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": sessionStorage.getItem("resettoken"),
          },
        })
          .then((responce) => responce.json())
          .then((data) => {
            if (data.message === "password changed") {
              sessionStorage.clear();
              setfetcherror("");
              setpasswordchange(true);
              History.push("/");
            }
            setfetcherror(data.message);
          });
      },
    });
  return (
    <div>
      <form onSubmit={handleSubmit} id="Passwordreset-main-div">
        <h1>Please Enter a New Password</h1>

        <TextField
          autoFocus
          sx={{ width: "20rem" }}
          margin="dense"
          id="password"
          className="password"
          placeholder="Password"
          type="password"
          variant="standard"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.password && errors.password ? errors.password : ""}
        <br />
        <Button
          variant="contained"
          color="error"
          type="submit"
          sx={{ borderRadius: "2rem" }}
        >
          Change Password
        </Button>
        {fetcherror ? fetcherror : ""}
      </form>
    </div>
  );
}
