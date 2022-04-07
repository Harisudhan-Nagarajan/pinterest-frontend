import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import { Box, Modal } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import { UserContext } from "./Homedashboard";
import { useContext } from "react";
export function Profile() {
  const History = useHistory();

  const [userpins, setuserpins] = useState([]);
  const { userdetials, setUserdetials } = useContext(UserContext);
  const getuserdetials = () => {
    fetch("https://hari-pinterestbackend.herokuapp.com/profile/userpins", {
      method: "get",
      headers: {
        username: sessionStorage.getItem("username"),
        "x-auth-token": sessionStorage.getItem("token"),
      },
    })
      .then((responce) => responce.json())
      .then((data) => {
        setuserpins(data);
      });
  };
  useEffect(getuserdetials, []);
  return (
    <div>
      <div id="profile" style={{ paddingTop: "5rem" }}>
        <img
          style={{
            height: "8rem",
            width: "8rem",
            borderRadius: "10rem",
          }}
          src={`https://hari-pinterestbackend.herokuapp.com/${userdetials.profilepic}`}
        />
        <h1>{userdetials.name}</h1>
        <div>@{userdetials.username}</div>
        <br />
        <div>
          <button id="btnnn">
            <b>Share</b>
          </button>{" "}
          <button onClick={() => History.push("/Home/settings")} id="btnnn">
            <b>Edit Profile</b>
          </button>
        </div>

        <br />
        <br />
      </div>
      <h3 className="create">Created</h3>
      {userpins.length > 0 ? (
        <Box sx={{ minHeight: 829, paddingTop: "2rem" }}>
          <Masonry columns={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }} spacing={2}>
            {userpins.map(({ path }, index) => (
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
            ))}
          </Masonry>
        </Box>
      ) : (
        <div>NO PINS </div>
      )}
    </div>
  );
}
// hover-#efefef
