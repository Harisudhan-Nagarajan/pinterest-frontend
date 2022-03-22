import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

//popup dialog box for signup
export function Signupdialog({ loginopen, open, handleClose }) {
  //error message for backend
  const [fetcherror, setfetcherror] = useState("");

  //yup validation
  const formvalidationSchema = yup.object({
    username: yup
      .string()
      .min(6, "Username must be at least 6 characters")
      .max(12, "Username must be at less then 12 characters")
      .required("Username is required"),
    email: yup
      .string()
      .min(4, "Email must be at least 4 characters")
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Email is not valid")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password is too Small")
      .max(14, "Password is to Big")
      .matches(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#!%&])/g,
        "Pattern is not matched"
      )
      .required("Password is required"),
  });

  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
      },
      validationSchema: formvalidationSchema,
      onSubmit: async (values) => {
        await fetch("http://localhost:9000/users/signup", {
          method: "POST",
          body: JSON.stringify(values),
          headers: { "Content-Type": "application/json" },
        })
          .then((responce) => responce.json())
          .then((data) => {
            if (data.message === "success") {
              handleClose();
              loginopen();
              setfetcherror("");
              return;
            }
            setfetcherror(data.message);
          });
      },
    });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "2rem",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
          id="pinterestimg"
        />
        <IconButton onClick={handleClose}>
          <CloseOutlinedIcon fontSize="large" />
        </IconButton>
        <strong>Welcome to Pinterest</strong>
        <span>Find new ideas to try</span>
        <div>
          <form onSubmit={handleSubmit}>
            <TextField
              margin="dense"
              id="username"
              className="username"
              label="username"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.username && errors.username ? errors.username : ""}
            <TextField
              margin="dense"
              id="email"
              className="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email ? errors.email : ""}
            <TextField
              margin="dense"
              id="password"
              className="password"
              label="password"
              type="password"
              fullWidth
              variant="standard"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && errors.password ? errors.password : ""}
            <Button
              variant="contained"
              color="error"
              type="submit"
              sx={{ borderRadius: "2rem" }}
            >
              Sign Up
            </Button>
            {fetcherror}
          </form>
        </div>
      </Box>
    </Modal>
  );
}
