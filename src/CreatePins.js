import { useDropzone } from "react-dropzone";
import { TextField } from "@mui/material";
import BackupIcon from "@mui/icons-material/Backup";

export function CreatePins() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    <div style={{ paddingTop: "5rem", height: "30rem" }} id="post-img-bg">
      <div id="post-img">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <BackupIcon />
          <p>Drag and drop or click to upload</p>
          <small style={{ position: "relative", top: "5rem" }}>
            Recomendation: use high-qualit .jpg files
          </small>
          <small style={{ position: "relative", top: "5rem" }}>
            smaller than 16 MB
          </small>
        </div>
        <div>
          <TextField id="standard-basic" variant="standard" />
          <br />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
            id="pinterestimg" />
          <b>Harisudhan</b>
          <br />
          <TextField id="standard-basic" variant="standard" />
          <br />
          <TextField id="standard-basic" variant="standard" />
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