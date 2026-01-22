import { useContext, useState } from "react";
import { Context } from "../main";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button, Container, Grid, TextField } from "@mui/material";

const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [message, setMessage] = useState("");

  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        style={{ height: window.innerHeight - 100, marginTop: 30 }}
      >
        <div
          style={{
            width: "80%",
            height: "70vh",
            border: "1px solid black",
            overflowY: "auto",
          }}
        ></div>
        <Grid
          container
          direction="column"
          alignItems="flex-end"
          style={{ width: "80%" }}
        >
          <TextField
            fullWidth
            maxRows={2}
            variant={"outlined"}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <Button variant={"outlined"}>Submit</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
