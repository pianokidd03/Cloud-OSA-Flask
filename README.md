# Cloud-OSA-Flask

## About
The porpose of this app is to fetch live data from a virtual Optical Spectrum Analyser (OSA). The data is then displayed on a graph. 

This app uses Flask as the framework for the backend and React.js for the front end. Semantic-UI React was used to style the webapp. 

Highcharts is the graphing library I used to graph the data coming in from the OSA.

## Installation
To install this app on a local machine, [first download node](https://nodejs.org/en/). Once node is downloaded, clone the repo: <br />
`$ git clone https://github.com/pianokidd03/Cloud-OSA-Flask.git` <br /> <br />
Next, change directories into the project: <br />
`$ cd cloud-osa-flask`<br /><br />
Now you have to install yarn using npm (npm comes with node.js): <br />
`$ npm install --global yarn` <br /><br />
Once that is finished, setup a virtual enviroment and point Flask to the correct directory <br />
`$ cd flask-app` <br />
`$ pip3 install virtualenv` <br />
`$ virtualenv env` <br />
`$ source env/bin/activate` for a Mac or Linux or `env\Scripts\activate.bat` for Windows <br />
`$ export FLASK_APP=api` <br />
`$ pip3 install requirements.txt`<br />
Now run the Flask server: <br />
`$ flask run` <br /> <br />
The front end packages should all be preinstalled. <b />
To run the front end navagate to the `front-end` directory then run <br />
`$ yarn start` <br />
The app will automaticly open to `localhost:3000` and the app display the dynamically changing graph 

