import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image';



var listOfImages = [];

export default class ComboBox extends Component {
  constructor() {
    super();
    this.state = {
      state: "Uttar Pradesh",
    }

  }
  onTagsChange = (event, values) => {
    if (values) {
      this.setState({
        state: values,
      });
    }

  }

  importAll(r) {
    return r.keys().map(r);
  }

  componentWillMount() {
    const regex = /\.(png|jpe?g|svg)$/;
    const path = require.context('../data/img/')
    listOfImages = this.importAll(path, false, regex);
  }
  render() {
    // console.log(this.state.state,"State");
    const { state } = this.state;
    console.log(state, "State")
    console.log(states.indexOf(state))
    // console.log(this.state.imageIndex,"imageIndex");
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{
          marginTop: "20px"
        }}
      >
        <Typography variant="h5" component="h1" style = {{padding:"20px"}}>
          Kalman prediction
              </Typography>

        <Autocomplete
          onChange={this.onTagsChange}
          id="combo-box-demo"
          options={states}
          getOptionLabel={(option) => option}
          style={{ width: 300}}
          renderInput={(params) => <TextField {...params} label="State" variant="outlined" />}
        />
        {this.state.state === "All" ? listOfImages.map(
          (image, index) => <img key={index} src={image} alt="info" style={{ "width": "800px", "maxWidth": '100%', "height": "inherit" }} />
        ) : <img
            src={listOfImages[states.indexOf(this.state.state)]}
            color="inherit"
            style={{ "width": "800px", "maxWidth": '100%', "height": "inherit" ,padding:"20px"}}
          />}
      </Grid>
    );
  }

}


const states = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Mizoram",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "Telangana",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "All",]

console.log(states.length)