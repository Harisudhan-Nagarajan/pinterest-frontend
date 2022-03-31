import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import { Box, Modal } from "@mui/material";
import Masonry from "@mui/lab/Masonry";

export function Profile() {
  const History = useHistory();
  const [userdetials, setUserdetials] = useState("");
  const itemDat = [
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

  const getuserdetials = () => {
    fetch("https://hari-pinterestbackend.herokuapp.com/profile/Home", {
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
    <div>
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
          <button id="btnnn"><b>Share</b></button>{" "}
          <button onClick={() => History.push("/Home/settings")} id="btnnn">
            <b>Edit Profile</b>
          </button>
        </div>

        <br />
        <br />
      </div>
      <h3 className="create">Created</h3>
      <Box sx={{ minHeight: 829, paddingTop: "2rem" }}>
        <Masonry columns={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }} spacing={2}>
          {itemDat.map((item, index) => (
            <div key={index}>
              <img
                src={`${item.img}?w=162&auto=format`}
                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                alt={item.title}
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
    </div>
  );
}
// hover-#efefef
