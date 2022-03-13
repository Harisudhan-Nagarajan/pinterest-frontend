import { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Signupdialog } from "./Signupdialog";
import { Logindialog } from "./Logindialog";

export function Welcome() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [opens, setOpens] = useState(false);
  const handleClickOpens = () => {
    setOpens(true);
  };
  const handleCloses = () => {
    setOpens(false);
  };
  return (
    <div className="container">
      <Box position="static" sx={{ color: "black" }}>
        <Toolbar>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
            id="pinterestimg"
          />
          <Typography component={"span"} sx={{ color: "#e60023" }}>
            <h2>Pinterest</h2>
          </Typography>

          <Box sx={{ marginLeft: "auto" }}>
            <Link
              href="#"
              underline="hover"
              sx={{ color: "black", marginLeft: "2rem" }}
            >
              <b>About</b>
            </Link>
            <Link
              href="#"
              underline="hover"
              sx={{ color: "black", marginLeft: "2rem" }}
            >
              <b>Business</b>
            </Link>
            <Link
              href="#"
              underline="hover"
              sx={{ color: "black", marginLeft: "2rem" }}
            >
              <b>Press</b>
            </Link>

            <Button
              variant="contained"
              color="error"
              sx={{ borderRadius: "2rem", marginLeft: "2rem" }}
              onClick={handleClickOpen}
            >
              Log in
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: "2rem",
                color: "black",
                marginLeft: ".5rem",
              }}
              onClick={handleClickOpens}
              color="primary"
            >
              sign Up
            </Button>
          </Box>
        </Toolbar>
      </Box>
      <Box>
        <h1>Get your next</h1>
      </Box>
      <div>
        <Logindialog open={open} handleClose={handleClose} />
        <Signupdialog loginopen={handleClickOpen} open={opens} handleClose={handleCloses} />
      </div>
    </div>
  );
}


