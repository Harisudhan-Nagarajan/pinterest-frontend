import { Box, Modal, IconButton } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import { useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import { UserContext } from "./Homedashboard";
export function Home() {
  const { userdetials, setUserdetials } = useContext(UserContext);

  return <div>{userdetials.setup ? <Feedselection /> : <Homefeeds />}</div>;
}

function Homefeeds() {
  const [feeds, setfeed] = useState(null);
  const fetchuser = async () => {
    await fetch(
      "https://hari-pinterestbackend.herokuapp.com/profile/HomeFeed",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": sessionStorage.getItem("token"),
          username: sessionStorage.getItem("username"),
        },
      }
    )
      .then((data) => data.json())
      .then((data) => setfeed(data))
      .catch((err) => console.log(err));
  };
  useEffect(fetchuser, []);
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
  return (
    <div>
      {feeds ? (
        <Box sx={{ minHeight: 829, paddingTop: "5rem" }}>
          <Masonry columns={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }} spacing={2}>
            {feeds.map(({ path }, index) => (
              <div key={index}>
                <button
                  id="pinbtn"
                  onClick={() => console.log("press")}
                  style={{
                    width: "100%",
                    height: "100%",
                    margin: "0",
                    padding: "0",
                    border: "none",
                    backgroundColor: "white",
                    "&:hover": {
                      cursor: "zoom-in",
                    },
                  }}
                >
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
                </button>
              </div>
            ))}
          </Masonry>
        </Box>
      ) : (
        " "
      )}
    </div>
  );
}

function Feedselection() {
  const [info, setinfo] = useState(true);
  const { userdetials, setUserdetials } = useContext(UserContext);
  const feedelements = [
    {
      title: "Food",
      img: "https://i.pinimg.com/564x/e2/34/d5/e234d531027f4c23a617e31fbd462731.jpg",
      key: 1,
      value: "food",
    },
    {
      title: "Bike",
      img: "https://i.pinimg.com/564x/c5/55/2a/c5552a7723f73d33b7d754df08920e69.jpg",
      key: 2,
      value: "bike",
    },
    {
      title: "Dog",
      img: "https://i.pinimg.com/236x/6a/95/83/6a958390de7924f68e1dfbd57d8c41d6.jpg",
      key: 3,
      value: "dog",
    },
    {
      title: "Marvel",
      img: "https://i.pinimg.com/564x/df/00/d7/df00d72954d282702871c698c18ee5c4.jpg",
      key: 4,
      value: "marvel",
    },
    {
      title: "Tecnology",
      img: "https://i.pinimg.com/564x/a4/47/7a/a4477ad60b21aa75981c01a955fafa40.jpg",
      key: 5,
      value: "tecnology",
    },
    {
      title: "Travel",
      img: "https://i.pinimg.com/564x/24/6b/62/246b62610fe5befa74be3fbcacec39c5.jpg",
      key: 6,
      value: "travel",
    },
    {
      title: "Fashion",
      img: "https://i.pinimg.com/564x/4f/cc/27/4fcc279536439deca3e7ff4ea6ee4ebf.jpg",
      key: 7,
      value: "fashion",
    },
    {
      title: "Love Qutoes",
      img: "https://i.pinimg.com/564x/95/2e/d8/952ed86a4328cf3b742933c6e1fe683e.jpg",
      key: 8,
      value: "love qutoes",
    },
    {
      title: "Drawing",
      img: "https://i.pinimg.com/564x/00/10/62/0010627b8772f4167bce63e31b091143.jpg",
      key: 9,
      value: "drawing",
    },
    {
      title: "Car",
      img: "https://i.pinimg.com/236x/e8/58/c1/e858c12921686832755e58dab3d7ca4b.jpg",
      key: 10,
      value: "car",
    },
    {
      title: "Nature",
      img: "https://i.pinimg.com/236x/12/aa/c9/12aac9a9f6b6433d1cf5b0db0d2fc8d5.jpg",
      key: 11,
      value: "nature",
    },
    {
      title: "Animals",
      img: "https://i.pinimg.com/236x/9c/31/32/9c3132b741594f7b6f0684f30eb08590.jpg",
      key: 12,
      value: "animals",
    },
  ];

  const [selected_feedelements, setselected_feedelements] = useState([]);
  const postfeed = async () => {
    await fetch(
      "https://hari-pinterestbackend.herokuapp.com/profile/postfeed",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": sessionStorage.getItem("token"),
          username: sessionStorage.getItem("username"),
        },
        body: JSON.stringify({ feed: selected_feedelements }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "success") {
          setUserdetials({ ...userdetials, setup: false });
        }
      });
  };
  console.log(selected_feedelements);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    bgcolor: "background.paper",
    borderRadius: "2rem",
    border: "none",
    boxShadow: 24,
    justifyContent: "center",
    p: 4,
  };
  return (
    <Modal
      open={info}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div id="feedbox">
          {feedelements.map(({ title, img, value, key }) => (
            <Btnmap
              title={title}
              img={img}
              value={value}
              num={key}
              key={key}
              selected_feedelements={selected_feedelements}
              setselected_feedelements={setselected_feedelements}
            />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "1rem",
          }}
        >
          {selected_feedelements.length >= 4 ? (
            <Button variant="contained" onClick={() => postfeed()}>
              Finish
            </Button>
          ) : (
            <Button variant="contained" disabled>
              {`Pick ${4 - selected_feedelements.length} more`}
            </Button>
          )}
        </div>
      </Box>
    </Modal>
  );
}

function Btnmap({
  title,
  img,
  value,
  num,
  selected_feedelements,
  setselected_feedelements,
}) {
  const [btn, setbtn] = useState(false);
  return (
    <div
      style={{
        width: "14rem",
        height: "10rem",
      }}
      className="feedbox-card"
    >
      <img
        style={{
          width: "12rem",
          height: "8rem",
          borderRadius: "1rem",
          objectFit: "cover",
          WebkitFilter: " grayscale(60%)",
          filter: "grayscale(60%)",
        }}
        src={img}
        alt={title}
      />
      <b className="title">{title}</b>
      {!btn ? (
        <Button
          sx={{
            width: "10rem",
            borderRadius: "1rem",
            backgroundColor: "black",
            "&:hover": { backgroundColor: "black" },
          }}
          variant="contained"
          onClick={() => {
            setselected_feedelements([...selected_feedelements, value]);
            setbtn(true);
          }}
        >
          Add
        </Button>
      ) : (
        <Button
          sx={{
            width: "10rem",
            borderRadius: "1rem",
            backgroundColor: "#d8d8d8",
            color: "black",
            "&:hover": { backgroundColor: "#d8d8d8" },
          }}
          variant="contained"
          onClick={() => {
            setselected_feedelements(
              selected_feedelements.filter(
                (Currenttitle) => Currenttitle !== value
              )
            );

            setbtn(false);
          }}
        >
          Remove
        </Button>
      )}
    </div>
  );
}
