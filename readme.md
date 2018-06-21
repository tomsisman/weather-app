# React Weather App for BGL-Group technical exercise

A simple react weather app with displaying data on 5 European cities.

## Getting Started

Only supported for: Google Chrome - 65+
                   Firefox - 60+

### Prerequisites

Make sure you have node installed, please find information here: https://nodejs.org/en/

### Installing

Enter Project directory and run the following commands:

```
$ npm install
```
```
$ npm run build:prod
```

By running npm run build:prod, you will be transpiling the code to allow you to view the project by opening public/index.html

## Development

Enter Project directory and run the following commands:

```
$ npm run dev-server
```
By running npm run dev-server you will be able to view live changes while you make changes to the code by opening up http://localhost:8080

## Built With

* [React](https://reactjs.org/)
* [Bootstrap](https://getbootstrap.com/)
* [Chart.js](https://www.chartjs.org/)
* [Open weather Current weather API](https://www.openweathermap.org/api)
* [Open weather 5 day/3 hour forecast API](https://www.openweathermap.org/api)

## High level overview of how the app functions

### App.js

Imports style sheets, and dependencies then renders the WeatherApp component to the DOM

### WeatherApp.js

Creates 5 instances of the City component, feeding in the city and the country as props.

### City.js

The city component contains the data for any given city. It will generate a card for the inputted city, handling the input when the user to clicks on the card to either show the weather situation with the time for sunrise and sun down, or show a chart of the sea levels at 0900am.

If certain conditions are met it does this for creating an instance of the component for WeatherCurrent or SeaLevels passing down the city and the country as props.

#### WeatherCurrent.js

WeatherCurrent handles the API call for the Open weather current weather API, setting the states for the relevant data. Does any changes required do make the data easier to understand then creates an HTML element for the data.

#### SeaLevels.js

SeaLevels handles the API call for the Open weather 5 day/3 hour forecast API, creating an array for both the sea levels at 0900am and the days, manipulating the data as needed to make it easy for the user to read.

If certain conditions are met it will create an instant of the component SeaLevelsChart, passing the aforementioned states as props.

##### SeaLevelsCharts.js

SeaLevelCharts uses Chart.js to help generate a chart for the given data using the props provided by SeaLevels.js. Then returns a line chart displaying the sea level on the Y axis and the day on the X avis.






