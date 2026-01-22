import { Button, Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { Context } from "../main";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);
      console.log(user);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ height: window.innerHeight - 50 }}
      >
        <Grid
          container
          alignItems="center"
          direction="column"
          style={{ width: 400, background: "lightgray", borderRadius: 15 }}
        >
          <Box p={5}>
            <Button variant="outlined" onClick={login}>
              Login whit Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
