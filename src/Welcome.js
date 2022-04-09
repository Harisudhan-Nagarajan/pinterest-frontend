import { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Signupdialog } from "./Signupdialog";
import { Logindialog } from "./Logindialog";
import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import { WelcomeImage } from "./WelcomeImage";
import { Checkuser } from "./Checkuser";
import { Checkresetcode } from "./Checkresetcode";
import { Passwordreset } from "./Passwordreset";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export function Welcome() {
  const itemDat = [
    {
      img: "https://i.pinimg.com/564x/35/71/69/35716956cd81f3526990d8ecd7ac617d.jpg",
      title: "Bed",
      author: "",
    },
    {
      img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
      title: "Books",
      author: "Pavel Nekoranec",
    },
    {
      img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
      title: "Sink",
      author: "Charles Deluvio",
    },
    {
      img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
      title: "Kitchen",
      author: "Christian Mackie",
    },
    {
      img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
      title: "Blinds",
      author: "Darren Richardson",
    },
    {
      img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
      title: "Chairs",
      author: "Taylor Simpson",
    },
    {
      img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
      title: "Laptop",
      author: "Ben Kolde",
    },
    {
      img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
      title: "Doors",
      author: "Philipp Berndt",
    },
    {
      img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
      title: "Coffee",
      author: "Jen P.",
    },
    {
      img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
      title: "Storage",
      author: "Douglas Sheppard",
    },
    {
      img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
      title: "Candle",
      author: "Fi Bell",
    },
    {
      img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
      title: "Coffee table",
      author: "Hutomo Abrianto",
    },
    {
      img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
      title: "Bed",
      author: "",
    },
    {
      img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
      title: "Books",
      author: "Pavel Nekoranec",
    },
    {
      img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
      title: "Sink",
      author: "Charles Deluvio",
    },
    {
      img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
      title: "Kitchen",
      author: "Christian Mackie",
    },
    {
      img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
      title: "Blinds",
      author: "Darren Richardson",
    },
    {
      img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
      title: "Chairs",
      author: "Taylor Simpson",
    },
    {
      img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
      title: "Laptop",
      author: "Ben Kolde",
    },
    {
      img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
      title: "Doors",
      author: "Philipp Berndt",
    },
    {
      img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
      title: "Coffee",
      author: "Jen P.",
    },
    {
      img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
      title: "Storage",
      author: "Douglas Sheppard",
    },
    {
      img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
      title: "Candle",
      author: "Fi Bell",
    },
    {
      img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
      title: "Coffee table",
      author: "Hutomo Abrianto",
    },
  ];
  const [loginpopup, setloginpopup] = useState(false);

  const [signuppopup, setsignuppopup] = useState(false);

  const [passwordchange, setpasswordchange] = useState(false);

  return (
    <div className="container">
      <Box position="static" sx={{ color: "black", width: "auto" }}>
        <Toolbar>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
            id="pinterestimg"
          />
          <Typography component={"span"} sx={{ color: "#e60023" }}>
            <h2>Pinterest</h2>
          </Typography>

          <Box sx={{ marginLeft: "auto" }}>
            <Link
              href="#"
              underline="hover"
              sx={{ color: "black", marginLeft: "2rem" }}
            >
              <b>About</b>
            </Link>
            <Link
              href="#"
              underline="hover"
              sx={{ color: "black", marginLeft: "2rem" }}
            >
              <b>Business</b>
            </Link>
            <Link
              href="#"
              underline="hover"
              sx={{ color: "black", marginLeft: "2rem" }}
            >
              <b>Press</b>
            </Link>

            <Button
              variant="contained"
              color="error"
              sx={{ borderRadius: "2rem", marginLeft: "2rem" }}
              onClick={() => setloginpopup(true)}
            >
              Log in
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: "2rem",
                color: "black",
                marginLeft: ".5rem",
              }}
              onClick={() => setsignuppopup(true)}
              color="primary"
            >
              sign Up
            </Button>
          </Box>
        </Toolbar>
      </Box>

      <Switch>
        <Route exact path="/finduser">
          <Checkuser />
        </Route>
        <Route path="/checkresetcode">
          <Checkresetcode />
        </Route>
        <Route path="/passwordreset">
          <Passwordreset setpasswordchange={setpasswordchange} />
        </Route>
        <Route path="/">
          <WelcomeImage />
        </Route>
      </Switch>
      <div>
        <Logindialog loginpopup={loginpopup} setloginpopup={setloginpopup} />

        <Signupdialog
          signuppopup={signuppopup}
          setsignuppopup={setsignuppopup}
        />
      </div>

      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={passwordchange}
          autoHideDuration={1200}
          onClose={() => setpasswordchange(false)}
        >
          <Alert severity="success">Password changed successfullly</Alert>
        </Snackbar>
      </Stack>
    </div>
  );
}
