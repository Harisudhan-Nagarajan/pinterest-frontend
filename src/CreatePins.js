import { useDropzone } from "react-dropzone";
import { TextField, Button, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import BackupIcon from "@mui/icons-material/Backup";
import Select from "react-select";
import DeleteIcon from "@mui/icons-material/Delete";
import { useHistory } from "react-router-dom";
export function CreatePins() {
  const [files, setFiles] = useState("");
  const [title, settitle] = useState(" ");
  const [aboutpin, setaboutpin] = useState(" ");
  const [link, setlink] = useState(" ");

  const options = [
    { value: "Animals", label: "Animals" },
    { value: "Dog", label: "Dog" },
    { value: "Bike", label: "Bike" },
    { value: "Marvel", label: "Marvel" },
    { value: "Tecnology", label: "Tecnology" },
    { value: "Travel", label: "Travel" },
    { value: "Fashion", label: "Fashion" },
    { value: "Love Qutoes", label: "Love Qutoes" },
    { value: "Drawing", label: "Drawing" },
    { value: "Car", label: "Car" },
    { value: "Nature", label: "Nature" },
    { value: "Food", label: "Food" },
  ];
  const History = useHistory();
  const [selectedOption, setSelectedOption] = useState("");

  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      accept: "image/jpeg,image/png",
      multiple: false,
      maxSize: 16000000,
      onDrop: (file) => {
        console.log(file[0]);
        setFiles(file[0]);
      },
    });

  const postimg = () => {
    const data = new FormData();

    data.append("image", files);
    data.append("title", title);
    data.append("aboutpin", aboutpin);
    data.append("link", link);
    data.append("category", selectedOption.value);
    console.log(data);

    fetch("https://hari-pinterestbackend.herokuapp.com/pins/single", {
      method: "POST",
      headers: {
        "x-auth-token": sessionStorage.getItem("token"),
        username: sessionStorage.getItem("username"),
      },
      body: data,
    })
      .then((responce) => responce.json())
      .then((data) => {
        if (data.message === "success") {
          History.push("/Home/profile");
        }
      });
  };
  return (
    <div style={{ paddingTop: "5rem", height: "35rem" }} id="post-img-bg">
      <div id="post-img">
        {files ? (
          <div
            style={{ width: "20rem", height: "30rem", position: "relative" }}
          >
            <img
              src={URL.createObjectURL(files)}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "1rem",
              }}
              alt="Thumb"
            />
            <IconButton
              sx={{
                backgroundColor: "white",
                position: "absolute",
                top: "50%",
                left: "0%",
                "&:hover": { backgroundColor: "white" },
              }}
              size="large"
              onClick={() => setFiles()}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </div>
        ) : (
          <div
            {...getRootProps({
              className: "dropzone",
              id: "dropzone",
            })}
          >
            <input {...getInputProps({})} />
            <BackupIcon />
            <p>Drag and drop or click to upload</p>
            <small style={{ position: "relative", top: "5rem" }}>
              Recomendation: use high-quality .jpg files
            </small>
            <small style={{ position: "relative", top: "5rem" }}>
              smaller than 16 MB
            </small>
          </div>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "20rem",
            height: "28rem",
            justifyContent: "space-evenly",
          }}
        >
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder="Select Category"
          />
          <TextField
            id="standard-basic"
            variant="standard"
            placeholder="Add your title"
            size="large"
            onChange={(event) => settitle(event.target.value)}
          />
          <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
              id="pinterestimg"
            />
            <b>{sessionStorage.getItem("username")}</b>
          </div>
          <TextField
            id="standard-basic"
            variant="standard"
            placeholder="Tell me about your pin"
            onChange={(event) => setaboutpin(event.target.value)}
          />
          <TextField
            id="standard-basic"
            variant="standard"
            placeholder="Add a destination link"
            onChange={(event) => setlink(event.target.value)}
          />
          {files && selectedOption ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Button
                variant="contained"
                onClick={() => postimg()}
                sx={{
                  backgroundColor: "#e60023",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#e60023",
                  },
                }}
              >
                SAVE
              </Button>
              <small style={{ color: "#e60023" }}>
                *Must select Image and category
              </small>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Button
                disabled
                variant="contained"
                onClick={() => postimg()}
                sx={{
                  backgroundColor: "#e60023",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#e60023",
                  },
                }}
              >
                SAVE
              </Button>
              <small style={{ color: "#e60023" }}>
                *Must slect Image and category
              </small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

{
  /* <section className="container"  style={{paddingTop: "5rem" ,height:"20rem"}}>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section> */
}

{
  /* <div>
              <img src={URL.createObjectURL(files)} style={{width:"100%",height:"100%"}}alt="Thumb" />
              <button onClick={() => setFiles()}>Remove This Image</button>
            </div> */
}
