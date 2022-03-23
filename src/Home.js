import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { UserContext } from "./App";
import { useContext } from "react";
import { Modal } from "@mui/material";
// function Home() {
//   const [open, setOpen] = useState();
//   const fetchs = () => {
//     fetch("http://localhost:8080")
//       .then((responce) => responce.json())
//       .then((datas) => {
//         var thumb = new Buffer(datas[0].avatar.data).toString("base64");
//         setOpen(thumb);
//         console.log(datas[0].avatar);
//       });
//   };
//   useEffect(fetchs, []);
//   return (
//     <div>
//       <img src={`data:image/jpeg;base64,${open}`} width="1080px" />
//     </div>
//   );
// }
export function Home() {
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
  const { info, setinfo } = useContext(UserContext);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "2rem",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <Modal
        open={info}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <button onClick={() => setinfo(false)}>Close</button>
        </Box>
      </Modal>
      <Box sx={{ minHeight: 829, paddingTop: "5rem" }}>
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
