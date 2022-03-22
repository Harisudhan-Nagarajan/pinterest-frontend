import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
export const Settings = () => {
  const [profilepic, setProfilepic] = useState(
    "images\\1647626058502--0001.jpg"
  );
  const changeimg = (event) => {
    const data = new FormData();
    data.append("image", event.target.files[0]);
    fetch("http://localhost:9000/usersdetials/profilechange", {
      method: "POST",
      headers: {
        "x-auth-token": sessionStorage.getItem("token"),
        username: sessionStorage.getItem("username"),
      },
      body: data,
    })
      .then((responce) => responce.json())
      .then((data) => {
        if (data.path) {
          setProfilepic(data.path);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div style={{ paddingTop: "5rem" }} id="setting-outer-div">
      <div>
        <h1>Public profile</h1>
        <div>People visting your profile will see the Following info</div>
        <br />
        <small>Photo</small>
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img
            style={{
              height: "8rem",
              width: "8rem",
              borderRadius: "10rem",
            }}
            src={`http://localhost:9000/${profilepic}`}
          />
          <label
            style={{
              borderRadius: "10rem",
              width: "5rem",
              height: "2rem",
              textAlign: "center",
              paddingTop: "0.4rem",
              fontWeight: "bold",
              backgroundColor: "#efefef",
              "&:hover": {
                backgroundColor: "#dad5d5",
              },
            }}
          >
            <input
              type="file"
              title=" "
              style={{ display: "none" }}
              accept="image/*"
              onChange={(event) => changeimg(event)}
            />
            Change
          </label>
        </div>
        <form>
          <small>Name</small>
          <br />
          <input
            type="text"
            title=" "
            style={{
              borderRadius: "15px",
              border: "1px solid #dad5d5",
              height: "3px",
              width: "400px",
              padding: "20px",
              fontSize: "15px",
              color: "rgba(0, 0, 0, 0)",
              focus: {
                outline: "none",
                border: "1px solid blue",
              },
            }}
          />
          <br />
          <br />
          <small>About</small>
          <br />
          <textarea
            type="text"
            placeholder="Tell your story"
            id="inputtext"
            style={{
              borderRadius: "15px",
              border: "1px solid #dad5d5",
              height: "50px",
              width: "400px",
              padding: " 20px ",
              fontSize: "15px",
              overflow: "auto",
              resize: "none",
              focus: {
                outline: "none",
                border: "1px solid blue",
              },
            }}
          />
          <br />
          <br />
          <small>Website</small>
          <br />
          <input
            type="text"
            placeholder="Add a link to drive traffic to your site"
            style={{
              borderRadius: "15px",
              border: "1px solid #dad5d5",
              height: "3px",
              width: "400px",
              padding: "20px",
              fontSize: "15px",
              focus: {
                outline: "none",
                border: "1px solid blue",
              },
            }}
          />
          <br />
          <br />
          <small>Username</small>
          <br />
          <input
            type="text"
            placeholder="Choose wisely so others can find you"
            style={{
              borderRadius: "15px",
              border: "1px solid #dad5d5",
              height: "3px",
              width: "400px",
              padding: "20px",
              fontSize: "15px",
              focus: {
                outline: "none",
                border: "1px solid blue",
              },
            }}
          />
          <br />
          <br />
          <button>Save</button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};
