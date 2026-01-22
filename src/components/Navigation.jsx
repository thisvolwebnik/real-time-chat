import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";

const Navigation = () => {
  const user = false;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar variant="dense">
          <Grid container="container" justifyContent="end" width="100%" gap={1}>
            {user ? (
              <Button variant="contained">Exit</Button>
            ) : (
              <NavLink to={LOGIN_ROUTE}>
                <Button variant="contained">Login</Button>
              </NavLink>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
