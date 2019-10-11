import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Switch, withRouter, BrowserRouter, Route } from "react-router-dom";
import { createStyles, makeStyles, Theme, createMuiTheme } from "@material-ui/core/styles";

import Users from './pages/users/users';
import Login from './pages/login/login';
import Profile from './pages/profile/profile';
import Settings from './pages/settings/settings';
import Dashboard from './pages/dashboard/dashboard';
import AppSidebar from './components/app-sidebar/appSidebar';

const customTheme = createMuiTheme({
  typography: {
    fontFamily: [
      'Averta',
      'sans-serif'
    ].join(','),
  }
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  })
);

const Main = withRouter(({ location }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={customTheme}>
      <div className={classes.root}>
        <CssBaseline />
        {location.pathname !== "/" ? <AppSidebar isDrawerOpen={true} /> : null}
        <main className={classes.content}>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/users" component={Users} />
            <Route path="/profile" component={Profile} />
            <Route path="/settings" component={Settings} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </main>
      </div>
    </ThemeProvider>
  );
});


const App = () => (
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);

export default App;
