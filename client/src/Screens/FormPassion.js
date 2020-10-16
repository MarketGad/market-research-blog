import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "20ch",
    },
    paper: {
      marginTop: theme.spacing(0),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      color: "#080808d9",
      backgroundColor: "transparent",
      fontSize: "48vw",
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(0),
    },
    submit: {
      margin: theme.spacing(2, 0, 2),
    },
  },
}));

export default function FormPassion() {
  const classes = useStyles();

  return (
    <div>
      <div className="row">
        <div
          className="col l6 s12"
          style={{
            backgroundColor: "white",
            height:
              "300px" /*, borderRight:'2px solid #87879f' ,borderTopLeftRadius:'20px', borderBottomLeftRadius:'20px' */,
          }}
        >
          <p style={{ textAlign: "center" }}>
            <img
              width="80%"
              src={
                "https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1602422996/Theme/2_kkipf5.png"
              }
            />
          </p>
        </div>

        <div
          className="col l6 s12"
          style={{
            backgroundColor: "white",
            height:
              "300px" /*,borderTopRightRadius:'20px',borderBottomRightRadius:'20px'*/,
          }}
        >
          <div
            className="center"
            style={{
              fontSize: "1.3em",
              fontFamily: "Bahnschrift",
              color: "darkblue",
              padding: "3% 0 2% 0",
              textAlign: "center",
            }}
          >
            It will just take two minutes to launch your the future of your
            career with MarketGad
          </div>
          <div
            className="center"
            style={{
              fontSize: "1.2em",
              fontFamily: "Bahnschrift",
              color: "#87879f",
              marginBottom: "5%",
              /*padding: "0% 10% 0% 0%",*/
              textAlign: "center",
            }}
          >
            Professional Details
          </div>
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            style={{ textAlign: "center" }}
          >
            <div>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="passionate"
                label="Passionate About"
                name="passionate"
                /*value={passionate}
											onChange={(e) => setPassionate(e.target.value)}*/
              />
              <TextField
                variant="outlined"
                required
                fullWidth
                id="location"
                label="Current City"
                name="location"
                /*value={location}
											onChange={(e) => setLocation(e.target.value)}*/
              />
            </div>
          </form>

          <div
            className="center"
            style={{ padding: "4% 0 0 0", textAlign: "center" }}
          >
            <div
              class="btn-small"
              style={{
                backgroundColor: "#1e4a72",
                color: "white",
                border: "none",
                borderRadius: "15px",
                paddingLeft: "7%",
                paddingRight: "7%",
              }}
            >
              Next
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
