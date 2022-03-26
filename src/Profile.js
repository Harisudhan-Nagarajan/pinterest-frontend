import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";

export function Profile() {
  const History = useHistory();
  const [userdetials, setUserdetials] = useState("");
  const getuserdetials = () => {
    fetch("http://localhost:9000/users/Home", {
      method: "get",
      headers: {
        username: sessionStorage.getItem("username"),
        "x-auth-token": sessionStorage.getItem("token"),
      },
    })
      .then((responce) => responce.json())
      .then((data) => {
        if (data) {
          setUserdetials(data);
          return;
        }
      });
  };
  useEffect(getuserdetials, []);
  return (
    <div id="profile" style={{ paddingTop: "5rem" }}>
      <img
        style={{
          height: "8rem",
          width: "8rem",
          borderRadius: "10rem",
        }}
        src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/free-Whatsapp-Dp-Boys-Stylish-Girls-Cute-Images-pics.jpg"
      />
      <h1>{userdetials.name}</h1>
      <div>@{userdetials.username}</div>
      <br />
      <div>
        <button id="btnnn">Share</button>{" "}{" "}
        <button onClick={() => History.push("/Home/settings")} id="btnnn">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
// hover-#efefef
