import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import { useContext } from "react";
import { Context } from "../main";
import { useAuthState } from "react-firebase-hooks/auth";

const Navigation = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar variant="dense">
          <Grid container="container" justifyContent="end" width="100%" gap={1}>
            {user ? (
              <Button variant="contained" onClick={() => auth.signOut()}>
                Exit
              </Button>
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
