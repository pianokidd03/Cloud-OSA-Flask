import './App.css';
import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Button, Icon, Modal, Header } from 'semantic-ui-react'
import Loading from './components/Loader';


function App() {
  // const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState({});
  // const [isReady, setIsReady] = useState(true);
  const [startGraph, setStartGraph] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [pauseBtnText, setPausedBtnText] = useState('Pause')
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  useEffect(() => {
    fetch('/instrument_reading').then(response => 
    response.json().then(data => {
      var xdata = data['xdata'];
      var ydata = data['ydata'];

        if(xdata[0] === -1){
          setError(true);
          setErrorMessage(data['instrumentError']);
        }else{
          if(!isPaused){
            setError(false);
            var array = [];
            for (let i = 0; i < xdata.length; i++) {
              var tuple = [];
              tuple.push(xdata[i]);
              tuple.push(ydata[i]);
              array.push(tuple)
            }
            setOptions({
              title: {
                  text: ''
              },
              yAxis: {
                title: {
                  text: ''
                },
              },
              chart: {
                  zoomType: 'xy',
              },
              series: [
                {
                  name: 'Frequency vs. Signal Strength',
                  data: array,
                }
              ]
            })
            // setLoading(true);
          }
        }
    })
    );
  });

  function showGraph() {
    setStartGraph(true);
  }

  function hideGraph() {
    setStartGraph(false)
  }

  function pauseGraph() {
    if(isPaused){
      setIsPaused(false);
      setPausedBtnText('Pause');
    }else{
      setIsPaused(true);
      setPausedBtnText('Resume');
    }
  }
  
  return (
    <div className="App">
      <Modal
      basic
      onClose={() => setError(false)}
      open={error}
      size='small'
      >
        <Header icon>
          <Icon name='exclamation circle' color='red'/>
          OSA Error
        </Header>
        <Modal.Content>
          <p>
            Error Message: <b>{errorMessage}</b>
          </p>
          <br />
          <p>Please reload the page to rerender the graph.</p>
        </Modal.Content>
      </Modal>
      <h1>Cloud Optical Spectrum Analyzer</h1>
      {startGraph ? <HighchartsReact highcharts={Highcharts} options={options} /> : null}
      {/* {loading ? options : <h1>Loading...</h1>} */}
      <Button icon labelPosition='left' onClick={showGraph}>
        <Icon name='play' />
        Start
      </Button>
      <Button icon labelPosition='left' onClick={pauseGraph}>
        {pauseBtnText}
        <Icon name='pause' />
      </Button>
      <Button icon labelPosition='left' onClick={hideGraph}>
        Stop
        <Icon name='stop' />
      </Button>
      <Loading show={isPaused} />
    </div>
  );
}

export default App;

