import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

export function Logindialog({ open, handleClose }) {
  const [fetcherror, setfetcherror] = useState("");
  const History = useHistory();
  //yup validation
  const formvalidationSchema = yup.object({
    username: yup
      .string()
      .min(6, "Username must be at least 6 characters")
      .max(12, "Username must be at less then 12 characters")
      .required("Username is required"),

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
      initialValues: { username: "", password: "" },
      validationSchema: formvalidationSchema,
      onSubmit: (values) => {
        fetch("http://localhost:9000/users/signin", {
          method: "POST",
          body: JSON.stringify(values),
          headers: { "Content-Type": "application/json" },
        })
          .then((responce) => responce.json())
          .then((data) => {
            if (data.token) {
              sessionStorage.setItem("token", data.token);
              sessionStorage.setItem("username", values.username);
              History.push("/Home");
              return;
            }
            setfetcherror(data);
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
        <div>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
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
              id="password"
              className="password"
              type="password"
              label="password"
              fullWidth
              variant="standard"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && errors.password ? errors.password : ""}
            <Link href="#" underline="hover" sx={{ color: "black" }}>
              <b>Forgotten your Password?</b>
            </Link>
            <Button
              variant="contained"
              type="submit"
              color="error"
              sx={{ borderRadius: "2rem" }}
            >
             Log in 
            </Button>
            {fetcherror.message ? fetcherror.message : ""}
          </form>
        </div>
      </Box>
    </Modal>
  );
}
