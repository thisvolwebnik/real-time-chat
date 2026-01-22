import { Button, Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";

const Login = () => {
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
            <Button variant="outlined">Login whit Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
