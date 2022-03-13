import Button from "@mui/material/Button";

export const Settings = () => {
  return (
    <div style={{ paddingTop: "5rem" }}>
      <h1>Public profile</h1>
      <div>People visting your profile will see the Following info</div>
      <small>Photo</small>
      <img
        style={{
          height: "8rem",
          width: "8rem",
          borderRadius: "10rem",
        }}
        src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/free-Whatsapp-Dp-Boys-Stylish-Girls-Cute-Images-pics.jpg"
      />
      <Button
      type="file"
        size="large"
        sx={{
          borderRadius: "2rem",
          color: "black",
          backgroundColor: "#efefef",
          "&:hover": {
            backgroundColor: "#dad5d5",
          },
        }}
      >
        Change
      </Button>
      <form>
        <span>Name</span>
        <input type="text" id="inputtext" />
        <br />
        <span>About</span>
        <input type="text" id="inputtext" />
        <br />
        <span>Website</span>
        <input type="text" id="inputtext" />
        <br />
        <span>Username</span>
        <input type="text" id="inputtext" />
      </form>
    </div>
  );
};
