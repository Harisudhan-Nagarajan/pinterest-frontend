import { useDropzone } from "react-dropzone";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import BackupIcon from "@mui/icons-material/Backup";

export function CreatePins() {
  const [files, setFiles] = useState([]);
  const [title, settitle] = useState("SUBA PIN");
  const [aboutpin, setaboutpin] = useState([]);
  const [link, setlink] = useState([]);

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
    console.log(data);

    fetch("http://localhost:9000/usersdetials/single", {
      method: "POST",
      headers: {
        "x-auth-token": sessionStorage.getItem("token"),
        username: sessionStorage.getItem("username"),
      },
      body: data,
    })
      .then((result) => {
        console.log("File Sent Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div style={{ paddingTop: "5rem", height: "30rem" }} id="post-img-bg">
      <div id="post-img">
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
        <div>
          <TextField
            id="standard-basic"
            variant="standard"
            onChange={(event) => settitle(event.target.value)}
          />
          <br />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
            id="pinterestimg"
          />
          <b>Harisudhan</b>
          <br />
          <TextField
            id="standard-basic"
            variant="standard"
            onChange={(event) => setaboutpin(event.target.value)}
          />
          <br />
          <TextField
            id="standard-basic"
            variant="standard"
            onChange={(event) => setlink(event.target.value)}
          />
          <br />
          <button onClick={postimg}>SAVE</button>
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
