import { useState } from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";

export function Checkresetcode() {
  const History = useHistory();
  const [fetcherror, setfetcherror] = useState("");
  const { handleChange, handleBlur, handleSubmit, errors, values, touched } = useFormik({
    initialValues: {
      resetcode: "",
      resetusername: sessionStorage.getItem("resetusername"),
    },
    validationSchema: yup.object({
      resetusername: yup.string().required("Username is required"),
    }),
    onSubmit: async (values) => {
      await fetch("https://hari-pinterestbackend.herokuapp.com/signup_login/checkresetcode", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      })
        .then((responce) => responce.json())
        .then((data) => {
          if (data.token) {
            sessionStorage.setItem("resettoken", data.token);
            setfetcherror("");
            History.push("/passwordreset");
            return;
          }
          setfetcherror(data.message);
        });
    },
  });
  return (
    <div>
      <form onSubmit={handleSubmit} id="Passwordreset-main-div">
        <h1>Email sent</h1>
        <p>Please Check Your Registered Email </p>

        <TextField
          autoFocus
          sx={{ width: "20rem" }}
          margin="dense"
          id="resetcode"
          className="resetcode"
          placeholder="Please Enter Reset Code"
          type="text"
          variant="standard"
          onChange={handleChange}
          onBlur={handleBlur} />
        {touched.resetcode && errors.resetcode ? errors.resetcode : ""}
        <br />
        <Button
          variant="contained"
          color="error"
          type="submit"
          sx={{ borderRadius: "2rem" }}
        >
          Send
        </Button>
        {fetcherror ? fetcherror : ""}
      </form>
    </div>
  );
}
