import { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import { TextField, IconButton, Button, Toolbar, Box } from "@mui/material";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { useEffect } from "react";
import { Buffer } from "buffer";
import { Switch, Route, useHistory } from "react-router-dom";
import { Home } from "./Home";
import { Today } from "./Today";
import { Profile } from "./Profile";
import { Settings } from "./Settings";
import { CreatePins } from "./CreatePins";

export function Homedashboard() {
  const [userdetials, setUserdetials] = useState("");
  const History = useHistory();
  // const fetchuser = () => {
  //   fetch("http://localhost:9000/users/Home", {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "x-auth-token": sessionStorage.getItem("token"),
  //       "username": sessionStorage.getItem("username"),
  //     },
  //   })
  //     .then((responce) => responce.json())
  //     .then((data) => setUserdetials(data));
  // };
  // useEffect(fetchuser, []);

  return (
    <div>
      <div className="container">
        <Box
          position="fixed"
          sx={{ color: "black", backgroundColor: "white", width: "100%" }}
        >
          <Toolbar>
            <IconButton
              sx={{
                "&:hover": {
                  backgroundColor: "#cdcdcd",
                },
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
                id="pinterestimg"
              />
            </IconButton>

            <Button
              onClick={() => History.push("/Home/")}
              size="large"
              sx={{
                borderRadius: "2rem",
                color: "black",
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "#dad5d5",
                },
              }}
            >
              Home
            </Button>
            <Button
              size="large"
              sx={{
                borderRadius: "2rem",
                color: "black",
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "#dad5d5",
                },
              }}
            >
              Today
            </Button>
            <TextField
              placeholder="🔍Search"
              size="small"
              fullWidth
              id="fullWidth"
            />

            <IconButton
              size="large"
              sx={{
                "&:hover": {
                  backgroundColor: "#dad5d5",
                },
              }}
            >
              <NotificationsIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              size="large"
              sx={{
                "&:hover": {
                  backgroundColor: "#dad5d5",
                },
              }}
            >
              <MessageRoundedIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              onClick={() => History.push("/Home/profile")}
              size="small"
              sx={{
                "&:hover": {
                  backgroundColor: "#dad5d5",
                },
              }}
            >
              <img
                src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg"
                id="pinterestimg"
              />
            </IconButton>
            <IconButton
              sx={{
                "&:hover": {
                  backgroundColor: "#dad5d5",
                },
              }}
            >
              <ArrowDropDownOutlinedIcon />
            </IconButton>
          </Toolbar>
        </Box>
      </div>
      <div>
        <Button
          sx={{
            borderRadius: "200%",
            height: "4rem",
            backgroundColor: "#efefef",
            "&:hover": {
              backgroundColor: "#dad5d5",
            },
          }}
          id="pinpost-btn"
          onClick={() => History.push("/Home/createPins")}
        >
          <span style={{ fontSize: "3rem", color: "black" }}>+</span>
        </Button>
      </div>
      <Switch>
        <Route exact path="/Home/">
          <Home />
        </Route>
        <Route exact path="/Home/today">
          <Today />
        </Route>
        <Route path="/Home/profile">
          <Profile />
        </Route>
        <Route path="/Home/settings">
          <Settings />
        </Route>
        <Route path="/Home/createPins">
          <CreatePins />
        </Route>
      </Switch>
    </div>
  );
}


