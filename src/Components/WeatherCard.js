import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Card,IconButton,TextField,Typography} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from "@material-ui/icons/Search";
import fetchImage from "./fetchImage";
import fetchWeatherApi from "../OpenWeatherApi/fetchWeatherApi";


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    minHeight: 250,
    maxWidth: 1000,
    backgroundColor: "#b3e5fc"
  },
  media: {
    height: 190,
    width: "100%",
    marginBottom: "2%"
  }
}));

const WeatherCard = ({ showError }) => {
  const classes = useStyles();
  const [cityData, setCityData] = React.useState({
    id: 0,
    name: "Search City",
    temperature: "_ _ °C",
    weather: "Hope its clear :-)"
  });
  const [editMode, setEditMode] = React.useState(false);
  const [cityEntered, setCityEntered] = React.useState(2);
  const setCityWeatherData = async () => {
    const data = await fetchWeatherApi(cityEntered);
    if (data !== 404) {
      setCityData({
        ...cityData,
        id: data.weather[0].id,
        name: data.name,
        temperature: Math.round(data.main.temp).toString() + " °C",
        weather: data.weather[0].description
    });
    } else {
      showError();
    }
    setEditMode(!editMode);
  };

  return (
    <Card className={classes.root}>
      {editMode ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "3% 5%"
          }}
        >
          <TextField
            label="Enter City"
            variant="outlined"
            size="medium"
            className={classes.textField}
            color="primary"
            InputLabelProps={{ color: "primary" }}
            onChange={(event) => {
              setCityEntered(event.target.value);
            }}
          />
          <IconButton aria-label="delete" onClick={() => setCityWeatherData()}>
            <SearchIcon color="primary" />
          </IconButton>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "3% 5%"
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            style={{ marginTop: "3%", color: "#01579b" }}
          >
            {cityData.name}
          </Typography>
          <IconButton
            aria-label="delete"
            onClick={() => {
              setEditMode(!editMode);
            }}
          >
            <EditIcon color="primary" />
          </IconButton>
        </div>
      )}

      <div
        style={{ backgroundImage: `url(${fetchImage(cityData.id)})` }}
        className={classes.media}
      />

      <Typography
        variant="h6"
        gutterBottom
        style={{ color: "#01579b", textAlign: "center" }}
      >
        {cityData.temperature}
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        style={{ color: "#01579b", textAlign: "center" }}
      >
        {cityData.weather}
      </Typography>
    </Card>
  );
};

export default WeatherCard;