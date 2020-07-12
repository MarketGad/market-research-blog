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
import axios from 'axios';


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
        value: 'individualIdeator',
        label: 'Individual ideator',
    },
    {
        value: 'registeredStartup',
        label: 'Registered Startup',
    },
];

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(2),
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
        margin: theme.spacing(8, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();
    const [sector, setSector] = React.useState(null);
    const [email, setEmail] = React.useState('');
    const [topic, setTopic] = React.useState('');
    const [briefIdea, setBriefIdea] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [f1email, setF1email] = React.useState('');
    const [f2email, setF2email] = React.useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        axios({
            method: "PUT",
            url: "http://localhost:5000/api/ideasubmit",
            data: { sector, topic, briefIdea, phone, f1email, f2email, email }
        }).then((response) => {
            console.log(response);
        }).catch((response) => {
            console.log(response);
        })

        // make all the field null

        console.log({
            sector, topic, briefIdea, phone, f1email, f2email, email
        })
    };

    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Submit your idea
        </Typography>
                <form className={classes.form} noValidate onSubmit={submitHandler}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Use your logged in email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-select-sector"
                                fullWidth
                                select
                                required
                                label="Idea Stage"
                                value={sector}
                                helperText="Choose the stage of your idea"
                                variant="outlined"
                                onChange={(e) => setSector(e.target.value)}
                            >
                                {sectors.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="topic"
                                label="Give your idea in one line"
                                name="topic"
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="standard-basic"
                                label="Brief us about your idea"
                                name="briefIdea"
                                value={briefIdea}
                                onChange={(e) => setBriefIdea(e.target.value)}
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
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </Grid>


                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="Non disclosure agreement"
                            />
                        </Grid>
                        <Typography component="h1" variant="h5">
                            Refer Your Friends
                        </Typography>
                        <Grid container justify="flex-begin">
                            <Grid item>
                                <Link href="/privacy" variant="body2">
                                    Click Here to view our privacy policy
                                </Link>
                            </Grid>
                        </Grid>
                        <div className="center" style={{ margin: "auto" }}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="email"
                                    type="email"
                                    label="Email Address 1"
                                    name="f1email"
                                    value={f1email}
                                    onChange={(e) => setF1email(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="email"
                                    type="email"
                                    label="Email Address 2"
                                    name="f2email"
                                    value={f2email}
                                    onChange={(e) => setF2email(e.target.value)}
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
                        Scale Up!
                    </Button>
                </form>
            </div>
            <Box m={3}>
                <Copyright />
            </Box>
        </Container>
    );
}