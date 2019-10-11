import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as RouterLink, withRouter } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import { Card, CardContent } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
    },
    errorMessageContainer: {
        marginBottom: theme.spacing(1),
        color: theme.palette.error.dark,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    }
}));

const Login = ({ history }) => {
    const classes = useStyles();

    const onSubmitForm = () => {
        history.replace('/dashboard');
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Card>
                    <CardContent className={classes.cardContent}>
                        <AccountCircleIcon className={classes.avatar} />
                        <Typography component="h1" variant="h5">Sign in</Typography>
                        <form className={classes.form} onSubmit={onSubmitForm}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Email Address *"
                                name="email"
                                autoComplete="email"
                                autoFocus />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                name="password"
                                label="Password *"
                                type="password"
                                autoComplete="current-password" />

                            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}>
                                Sign In
                                </Button>

                            <Grid container>
                                <Grid item xs>
                                    <Link component={RouterLink} to="#" variant="body2">Forgot password?</Link>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </Container>
    );
}

export default withRouter(Login);