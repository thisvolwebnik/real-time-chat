import { Button, Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";

const Loader = () => {
  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ height: window.innerHeight - 50 }}
      >
        <Grid container alignItems="center" direction="column">
          <div className="loader"></div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Loader;
