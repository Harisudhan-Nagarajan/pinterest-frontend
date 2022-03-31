import Button from "@mui/material/Button";
import { useState, useEffect, useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { UserContext } from "./Homedashboard";

export const Settings = () => {
  const { userdetials, setUserdetials } = useContext(UserContext);

  const changeimg = async (event) => {
    const data = new FormData();
    data.append("image", event.target.files[0]);

    await fetch("http://localhost:9000/usersdetials/profilechange", {
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
          setUserdetials({ ...userdetials, profilepic: data.path });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const formvalidationSchema = yup.object({
    name: yup
      .string()
      .min(6, "name must be at least 6 characters")
      .max(12, "name must be at less then 12 characters")
      .required("name is required"),
    username: yup
      .string()
      .min(6, "Username must be at least 6 characters")
      .max(12, "Username must be at less then 12 characters")
      .required("Username is required"),
  });

  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: userdetials.name,
        about: userdetials.about,
        website: userdetials.website,
        username: userdetials.username,
      },
      validationSchema: formvalidationSchema,
      onSubmit: async () => {
        await fetch(
          "https://hari-pinterestbackend.herokuapp.com/profile/updateuserdetial",
          {
            method: "POST",
            body: JSON.stringify(values),
            headers: { "Content-Type": "application/json" },
          }
        )
          .then((responce) => responce.json())
          .then((data) => {
            console.log(values);
            console.log(data);
          });
      },
    });

  return (
    <div style={{ paddingTop: "5rem" }} id="setting-outer-div">
      {userdetials ? (
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
              src={`https://hari-pinterestbackend.herokuapp.com${userdetials.profilepic}`}
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
          <form onSubmit={handleSubmit}>
            <small>Name</small>
            <br />
            <input
              className="name"
              id="name"
              type="text"
              title=" "
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
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
            {touched.username && errors.username ? errors.username : ""}
            {touched.name && errors.name ? errors.name : ""}
            {touched.website && errors.website ? errors.website : ""}
            {touched.website && errors.website ? errors.website : ""}
            <small>About</small>
            <br />
            <textarea
              className="about"
              type="text"
              placeholder="Tell your story"
              id="about"
              value={values.about}
              onChange={handleChange}
              onBlur={handleBlur}
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
              className="website"
              id="website"
              value={values.website}
              onChange={handleChange}
              onBlur={handleBlur}
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
              className="username"
              id="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
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
            <button type="sumbit">Save</button>
            <br />
            <br />
          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
