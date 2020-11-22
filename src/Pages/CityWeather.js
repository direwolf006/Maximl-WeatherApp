import React from "react";
import {Grid,Snackbar} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import WeatherCard from "../Components/WeatherCard";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const CityWeather = () => {
  const [snackBarState, setSnackBarState] = React.useState(false);

  return (
    <div>
      <Grid
        container
        style={{
          position: "relative",
          marginLeft: -1,
          marginRight: -1,
          paddingTop: 50
        }}
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
        item={true}
        sm={12}
        md={12}
        lg={12}
        xl={12}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((city) => (
          <Grid item key={city}>
            <WeatherCard key={city} showError={() => {
                      
                      setSnackBarState(true)}} />
          </Grid>
        ))}
      </Grid>
      <Snackbar
        open={snackBarState}
        autoHideDuration={2000}
        onClose={() => setSnackBarState(false)}
      >
        <Alert severity="error">Invalid City entered</Alert>
      </Snackbar>
    </div>
  );
};
export default CityWeather;