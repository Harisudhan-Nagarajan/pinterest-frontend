// import Link from "@mui/material/Link";
import { useLocation } from "react-router-dom";
import { Switch, Route, useParams, useHistory, Link } from "react-router-dom";
import { Box, Modal } from "@mui/material";
import Button from "@mui/material/Button";
import Masonry from "@mui/lab/Masonry";

export function Searchresult({ searchvalue }) {
  const History = useHistory();
  return (
    <div
      style={{
        paddingTop: "5rem",
      }}
    >
      <div className="explorebox" >
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
  return (
    <Box sx={{ paddingTop: "3rem" }}>
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
  );
}

function Profile() {
  const profiles = [
    {
      name: "Hari",
      profilePic:
        "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
    },
    {
      name: "Hari",
      profilePic:
        "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
    },
    {
      name: "Hari",
      profilePic:
        "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
    },
    {
      name: "Hari",
      profilePic:
        "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
    },
    {
      name: "Hari",
      profilePic:
        "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
    },
    {
      name: "Hari",
      profilePic:
        "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
    },
    {
      name: "Hari",
      profilePic:
        "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
    },
    {
      name: "Hari",
      profilePic:
        "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
    },
    {
      name: "Hari",
      profilePic:
        "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
    },
    {
      name: "Hari",
      profilePic:
        "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
    },
    {
      name: "Hari",
      profilePic:
        "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
    },
    {
      name: "Hari",
      profilePic:
        "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
    },
    {
      name: "Hari",
      profilePic:
        "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
    },
    {
      name: "Hari",
      profilePic:
        "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
    },
    {
      name: "Hari",
      profilePic:
        "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
    },
  ];
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
      {profiles.map((profile, index) => (
        <div
        id="profile-div"
          style={{
            width: "19rem",
            display: "flex",
            borderRadius:"1rem",
            alignItems: "center",
            columnGap: "1rem",
            padding:".5rem",
          }}
          key={index}
        >
          <img
            src={profile.profilePic}
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "2rem",
              objectFit: "cover",
            }}
          />
          <b>{profile.name}</b>
          <button style={{ marginLeft: "8rem" }} id="btnnn">
            View
          </button>
        </div>
      ))}
    </div>
  );
}
