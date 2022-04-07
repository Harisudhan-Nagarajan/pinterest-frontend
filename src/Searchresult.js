// import Link from "@mui/material/Link";
import { useLocation } from "react-router-dom";
import { Switch, Route, useParams, useHistory, Link } from "react-router-dom";
import { Box, Modal } from "@mui/material";
import Button from "@mui/material/Button";
import Masonry from "@mui/lab/Masonry";
import { UserContext } from "./Homedashboard";
import { useState, useEffect, useContext } from "react";
export function Searchresult() {
  const History = useHistory();
  return (
    <div
      style={{
        paddingTop: "5rem",
      }}
    >
      <div className="explorebox">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            sx={{ color: "black" }}
            onClick={() => History.push("/Home/search/")}
          >
            <b>Explore</b>
          </Button>
          <Button
            sx={{ color: "black" }}
            onClick={() => History.push("/Home/search/profile")}
          >
            <b>Profile</b>
          </Button>
        </div>
      </div>
      <div>
        <Switch>
          <Route exact path={"/Home/search/"}>
            <Explore />
          </Route>
          <Route exact path={"/Home/search/profile"}>
            <Profile />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

function Explore() {
  const [pins, setpins] = useState([]);
  const [havepin, sethavepin] = useState(false);
  const [message, setmessage] = useState();
  const { searchvalue } = useContext(UserContext);
  const fetchuser = async () => {
    await fetch(
      "https://hari-pinterestbackend.herokuapp.com/profile/searchpin",
      {
        method: "POSt",
        body: JSON.stringify({ searchvalue: searchvalue }),
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": sessionStorage.getItem("token"),
          username: sessionStorage.getItem("username"),
        },
      }
    )
      .then((data) => data.json())
      .then((data) => {
        if (data.message === "failure") {
          setmessage("No pins found");
          return;
        }
        setpins(data);
        sethavepin(true);
      })
      .catch((err) => console.log(err));
  };
  useEffect(fetchuser, []);
  return (
    <Box sx={{ paddingTop: "3rem" }}>
      <Masonry columns={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }} spacing={2}>
        {havepin ? (
          pins.map(({ path }, index) => (
            <div key={index}>
              <img
                src={`https://hari-pinterestbackend.herokuapp.com/${path}?w=162&auto=format`}
                srcSet={`https://hari-pinterestbackend.herokuapp.com/${path}?w=162&auto=format&dpr=2 2x`}
                alt={path}
                loading="lazy"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                  borderRadius: "2rem",
                }}
              />
            </div>
          ))
        ) : (
          <div>{message}</div>
        )}
      </Masonry>
    </Box>
  );
}

function Profile() {
  const { searchvalue } = useContext(UserContext);
  const History = useHistory();
  const [user, setuser] = useState([]);
  const [haveuser, sethaveuser] = useState(false);
  const [message, setmessage] = useState();
  const fetchuser = async () => {
    await fetch(
      "https://hari-pinterestbackend.herokuapp.com/profile/searchprofile",
      {
        method: "POSt",
        body: JSON.stringify({ searchvalue: searchvalue }),
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": sessionStorage.getItem("token"),
          username: sessionStorage.getItem("username"),
        },
      }
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        if (data.message === "failure") {
          setmessage("No user found");
          return;
        }
        setuser(data);
        sethaveuser(true);
      })
      .catch((err) => console.log(err));
  };
  useEffect(fetchuser, []);
  return (
    <div
      style={{
        paddingTop: "3rem",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        rowGap: "1rem",
      }}
    >
      {haveuser ? (
        user.map(({ profilepic, name, username }, index) => (
          <div
            id="profile-div"
            style={{
              width: "19rem",
              display: "flex",
              borderRadius: "1rem",
              alignItems: "center",
              columnGap: "1rem",
              padding: ".5rem",
            }}
            key={index}
          >
            <img
              src={`https://hari-pinterestbackend.herokuapp.com/${profilepic}`}
              style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "2rem",
                objectFit: "cover",
              }}
            />
            <b>{name}</b>
            <button
              onClick={() => History.push(`/Home/profileview/${username}`)}
              style={{ marginLeft: "6rem" }}
              id="btnnn"
            >
              View
            </button>
          </div>
        ))
      ) : (
        <div>{message}</div>
      )}
    </div>
  );
}
