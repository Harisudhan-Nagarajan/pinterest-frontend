import { useState } from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";

export function Checkuser() {
  const History = useHistory();
  const [fetcherror, setfetcherror] = useState("");
  const { handleChange, handleBlur, handleSubmit, errors, values, touched } = useFormik({
    initialValues: { resetusername: "" },
    validationSchema: yup.object({
      resetusername: yup.string().required("Username is required"),
    }),
    onSubmit: async (values) => {
      await fetch("https://hari-pinterestbackend.herokuapp.com/users/forgetpass", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      })
        .then((responce) => responce.json())
        .then((data) => {
          if (data.message === "success") {
            sessionStorage.setItem("resetusername", values.resetusername);
            setfetcherror("");
            History.push("/checkresetcode");
            return;
          }
          setfetcherror(data.message);
        });
    },
  });
  return (
    <div>
      <form onSubmit={handleSubmit} id="Passwordreset-main-div">
        <h1>Let's find your Pinterest account</h1>
        <p>What's your username?</p>

        <TextField
          autoFocus
          sx={{ width: "20rem" }}
          margin="dense"
          id="resetusername"
          className="resetusername"
          label="username"
          type="text"
          variant="standard"
          onChange={handleChange}
          onBlur={handleBlur} />
        {touched.resetusername && errors.resetusername
          ? errors.resetusername
          : ""}
        <br />
        <Button
          variant="contained"
          color="error"
          type="submit"
          sx={{ borderRadius: "2rem" }}
        >
          Send Reset Code
        </Button>
        {fetcherror ? fetcherror : ""}
      </form>
    </div>
  );
}
