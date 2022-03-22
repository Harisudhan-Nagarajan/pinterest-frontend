import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";

export function WelcomeImage() {
  return (
    <div id="welcome-center">
      <h1 style={{ color: "#e60023" }}>
        Get your next <br />
        Ideas
      </h1>
      <Box sx={{ minHeight: 829, paddingTop: "0rem", paddingLeft: "10px" }}>
        <Masonry columns={{ xs: 1, sm: 2, md: 4, lg: 5, xl: 6 }} spacing={1}>
          <div>
            <img
              src={`https://i.pinimg.com/564x/35/71/69/35716956cd81f3526990d8ecd7ac617d.jpg?w=162&auto=format`}
              srcSet={`https://i.pinimg.com/564x/35/71/69/35716956cd81f3526990d8ecd7ac617d.jpg?w=162&auto=format&dpr=2 2x`}
              alt="Hi"
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
                borderRadius: "2rem",
              }} />
          </div>
          <div>
            <img
              src={`https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=162&auto=format`}
              srcSet={`https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=162&auto=format&dpr=2 2x`}
              alt="Hi"
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
                borderRadius: "2rem",
              }} />
          </div>
          <div>
            <img
              src={`https://images.unsplash.com/photo-1525097487452-6278ff080c31?w=162&auto=format`}
              srcSet={`https://images.unsplash.com/photo-1525097487452-6278ff080c31?w=162&auto=format&dpr=2 2x`}
              alt="Hi"
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
                borderRadius: "2rem",
              }} />
          </div>
          <div>
            <img
              src={`https://images.unsplash.com/photo-1525097487452-6278ff080c31?w=162&auto=format`}
              srcSet={`https://images.unsplash.com/photo-1525097487452-6278ff080c31?w=162&auto=format&dpr=2 2x`}
              alt="Hi"
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
                borderRadius: "2rem",
              }} />
          </div>
          <div>
            <img
              src={`https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=162&auto=format`}
              srcSet={`https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=162&auto=format&dpr=2 2x`}
              alt="Hi"
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
                borderRadius: "2rem",
              }} />
          </div>
          <div>
            <img
              src={`https://i.pinimg.com/564x/35/71/69/35716956cd81f3526990d8ecd7ac617d.jpg?w=162&auto=format`}
              srcSet={`https://i.pinimg.com/564x/35/71/69/35716956cd81f3526990d8ecd7ac617d.jpg?w=162&auto=format&dpr=2 2x`}
              alt="Hi"
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
                borderRadius: "2rem",
              }} />
          </div>
          <div>
            <img
              src={`https://i.pinimg.com/564x/35/71/69/35716956cd81f3526990d8ecd7ac617d.jpg?w=162&auto=format`}
              srcSet={`https://i.pinimg.com/564x/35/71/69/35716956cd81f3526990d8ecd7ac617d.jpg?w=162&auto=format&dpr=2 2x`}
              alt="Hi"
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
                borderRadius: "2rem",
              }} />
          </div>
          <div>
            <img
              src={`https://i.pinimg.com/564x/35/71/69/35716956cd81f3526990d8ecd7ac617d.jpg?w=162&auto=format`}
              srcSet={`https://i.pinimg.com/564x/35/71/69/35716956cd81f3526990d8ecd7ac617d.jpg?w=162&auto=format&dpr=2 2x`}
              alt="Hi"
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
                borderRadius: "2rem",
              }} />
          </div>
          <div>
            <img
              src={`https://i.pinimg.com/564x/35/71/69/35716956cd81f3526990d8ecd7ac617d.jpg?w=162&auto=format`}
              srcSet={`https://i.pinimg.com/564x/35/71/69/35716956cd81f3526990d8ecd7ac617d.jpg?w=162&auto=format&dpr=2 2x`}
              alt="Hi"
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
                borderRadius: "2rem",
              }} />
          </div>
          <div>
            <img
              src={`https://i.pinimg.com/564x/35/71/69/35716956cd81f3526990d8ecd7ac617d.jpg?w=162&auto=format`}
              srcSet={`https://i.pinimg.com/564x/35/71/69/35716956cd81f3526990d8ecd7ac617d.jpg?w=162&auto=format&dpr=2 2x`}
              alt="Hi"
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
                borderRadius: "2rem",
              }} />
          </div>
        </Masonry>
      </Box>
    </div>
  );
}
