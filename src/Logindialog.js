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

export function Logindialog({ loginpopup, setloginpopup }) {
  const [fetcherror, setfetcherror] = useState("");
  const History = useHistory();
  //yup validation
  const formvalidationSchema = yup.object({
    username: yup.string().required("username is required"),

    password: yup.string().required("Password is required"),
  });

  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: { username: "", password: "" },
      validationSchema: formvalidationSchema,
      onSubmit: async (values) => {
        await fetch("https://hari-pinterestbackend.herokuapp.com/signup_login/signin", {
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
            setfetcherror(data.message);
            console.log(data);
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
      open={loginpopup}
      onClose={() => setloginpopup(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div id="loginpopup">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
            id="pinterestimg"
          />
          <IconButton
            onClick={() => setloginpopup(false)}
            sx={{ position: "absolute", top: "5px", right: "7px" }}
          >
            <CloseOutlinedIcon fontSize="large" />
          </IconButton>
          <br />
          <strong style={{ fontSize: "1.8rem" }}>Welcome to Pinterest</strong>
          <br />
          <div>
            <form onSubmit={handleSubmit}>
              <TextField
                autoFocus
                margin="dense"
                id="username"
                className="username"
                placeholder="username"
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
                placeholder="password"
                fullWidth
                variant="standard"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password ? errors.password : ""}
              <br />
              <Link href="/finduser" underline="hover" sx={{ color: "black" }}>
                <b>Forgotten your Password?</b>
              </Link>
              <br /> <br />
              <Button
                variant="contained"
                type="submit"
                color="error"
                sx={{ borderRadius: "2rem" }}
              >
                Log in
              </Button>
              <br />
              {fetcherror ? fetcherror : ""}
            </form>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
