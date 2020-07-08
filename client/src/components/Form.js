import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                marketgad.com
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const sectors = [
    {
        value: 'a',
        label: 'a',
    },
    {
        value: 'b',
        label: 'b',
    },
    {
        value: 'c',
        label: 'c',
    },
    {
        value: 'd',
        label: 'd',
    },
];

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();
    const [sector, setSector] = React.useState('a');

    const handleChange = (event) => {
        setSector(event.target.value);
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Form
        </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} className={classes.text}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="phone"
                                label="Phone No."
                                name="phone"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="standard-basic"
                                label="Brief about your idea"
                                name="brief-idea"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-select-sector"
                                select
                                label="Sector"
                                value={sector}
                                onChange={handleChange}
                                helperText="Choose your sector"
                                variant="outlined"
                            >
                                {sectors.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="Non disclosure agreement"
                            />
                        </Grid>
                        <div className="center" style={{ margin: "auto" }}>
                            <h5>
                                Refer your friends
                            </h5>
                            <Grid item xs={12}>
                                <TextField
                                    id="email"
                                    type="email"
                                    label="Email Address"
                                    name="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="email"
                                    type="email"
                                    label="Email Address"
                                    name="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="email"
                                    type="email"
                                    label="Email Address"
                                    name="email"
                                />
                            </Grid>
                        </div>

                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
          </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
              </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}