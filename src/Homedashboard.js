import { useState, useRef, createContext, useContext } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import {
  TextField,
  IconButton,
  Button,
  Toolbar,
  Box,
  Modal,
} from "@mui/material";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { useEffect } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { Home } from "./Home";
import { Today } from "./Today";
import { Profile } from "./Profile";
import { Settings } from "./Settings";
import { CreatePins } from "./CreatePins";
import { Searchresult } from "./Searchresult";

const UserContext = createContext();

export function Homedashboard() {
  const [userdetials, setUserdetials] = useState("");

  const [searchvalue, setsearchvalue] = useState("");

  const [searchdropdown, setsearchdropdown] = useState("");

  // styles={display:"none"}

  const History = useHistory();

  // const location = useLocation();
  const [path, setpath] = useState();
  
  // if (path === "/Home/search" || path === "/Home/search/profile") {
  //   setsearchvalue("");
  // }

  const fetchuser = () => {
    fetch("http://localhost:9000/users/Home", {
      method: "get",
      headers: {
        "Content-Type": "application/json",

        "x-auth-token": sessionStorage.getItem("token"),
        username: sessionStorage.getItem("username"),
      },
    })
      .then((responce) => responce.json())
      .then((data) => {
        console.log(data);
        setUserdetials(data);
      });
  };
  useEffect(fetchuser, []);

  const descRef = useRef();

  const searchfunctions = (title) => {
    History.push("/Home/search/");
    descRef.current.blur();
    setsearchvalue(title);
  };
  const values = {
    searchfunctions: searchfunctions,
    searchvalue: searchvalue,
    setsearchvalue: setsearchvalue,
  };
  return (
    <UserContext.Provider value={values}>
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
                  marginLeft: ".5rem",
                  marginRight: ".5rem",
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
              <input
                placeholder="Search"
                className="searchbox"
                value={searchvalue}
                ref={descRef}
                onChange={(e) => setsearchvalue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && e.target.value.length > 0) {
                    setsearchvalue(e.target.value);
                    History.push("/Home/search/profile");
                    descRef.current.blur();
                    return;
                  }
                }}
              />
              <Searchdropdown />
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
                  marginLeft: ".2rem",
                  marginRight: ".3rem",
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
        <div className="hoverdiv">
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
            <Route path="/Home/search">
              <Searchresult />
            </Route>
          </Switch>
        </div>
      </div>
    </UserContext.Provider>
  );
}

function Searchdropdown() {
  const { searchfunctions, setsearchvalue, searchvalue } =
    useContext(UserContext);
  const feedelements = [
    {
      title: "Food",
      img: "https://i.pinimg.com/564x/e2/34/d5/e234d531027f4c23a617e31fbd462731.jpg",
      key: 1,
      value: false,
    },
    {
      title: "Bike",
      img: "https://i.pinimg.com/564x/c5/55/2a/c5552a7723f73d33b7d754df08920e69.jpg",
      key: 2,
      value: false,
    },
    {
      title: "Dog",
      img: "https://i.pinimg.com/236x/6a/95/83/6a958390de7924f68e1dfbd57d8c41d6.jpg",
      key: 3,
      value: false,
    },
    {
      title: "Marvel",
      img: "https://i.pinimg.com/564x/df/00/d7/df00d72954d282702871c698c18ee5c4.jpg",
      key: 4,
      value: false,
    },
    {
      title: "Tecnology",
      img: "https://i.pinimg.com/564x/a4/47/7a/a4477ad60b21aa75981c01a955fafa40.jpg",
      key: 5,
      value: false,
    },
    {
      title: "Travel",
      img: "https://i.pinimg.com/564x/24/6b/62/246b62610fe5befa74be3fbcacec39c5.jpg",
      key: 6,
      value: false,
    },
    {
      title: "Fashion",
      img: "https://i.pinimg.com/564x/4f/cc/27/4fcc279536439deca3e7ff4ea6ee4ebf.jpg",
      key: 7,
      value: false,
    },
    {
      title: "Love Qutoes",
      img: "https://i.pinimg.com/564x/95/2e/d8/952ed86a4328cf3b742933c6e1fe683e.jpg",
      key: 8,
      value: false,
    },
    {
      title: "Drawing",
      img: "https://i.pinimg.com/564x/00/10/62/0010627b8772f4167bce63e31b091143.jpg",
      key: 9,
      value: false,
    },
    {
      title: "Car",
      img: "https://i.pinimg.com/236x/e8/58/c1/e858c12921686832755e58dab3d7ca4b.jpg",
      key: 10,
      value: false,
    },
    {
      title: "Nature",
      img: "https://i.pinimg.com/236x/12/aa/c9/12aac9a9f6b6433d1cf5b0db0d2fc8d5.jpg",
      key: 11,
      value: false,
    },
    {
      title: "Animals",
      img: "https://i.pinimg.com/236x/9c/31/32/9c3132b741594f7b6f0684f30eb08590.jpg",
      key: 12,
      value: false,
    },
  ];
  return (
    <div className="searchdropdown">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {feedelements.map(({ key, img, title }) => (
          <Mapsearchpin
            key={key}
            img={img}
            title={title}
            searchfunctions={searchfunctions}
          />
        ))}
      </div>
    </div>
  );
}

function Mapsearchpin({ img, title, searchfunctions }) {
  return (
    <IconButton
      sx={{
        borderRadius: "2rem",
        "&:hover": {
          backgroundColor: "#dad5d5",
        },
      }}
      onClick={() => searchfunctions(title)}
    >
      <img src={img} alt={title} id="imgsearchbox" />
      <b className="search-btn-title">{title}</b>
    </IconButton>
  );
}
