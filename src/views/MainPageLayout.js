
import React from 'react';
import Root from '../routes/root';
import ErrorPage from './error-page';
import SignUp from './SignUp';
import SignInSide from './SignInSide';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {createTheme, styled, ThemeProvider} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "signin",
    element: <SignInSide />,
  },
]);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...({
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



function MainPageLayout() {
  //const theme = useTheme();
  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#0971f1',
        darker: '#053e85',
      },
      neutral: {
        main: '#ffffff',
        contrastText: '#fff',
      },
    },
  });

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{display: 'flex'}}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="fixed">
          <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            Welcome - Admin Panel One!
          </Typography>
            <Stack spacing={1} direction="row" justifyContent="flex-end" alignItems="center">
              <Button color="neutral" variant="outlined" href="/signin">Sign-In</Button>
              <Button color="neutral" variant="outlined" href="/signup">Sign-Up</Button>
            </Stack>
          </Toolbar>
        </AppBar>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Box>
  );
}

export default MainPageLayout;