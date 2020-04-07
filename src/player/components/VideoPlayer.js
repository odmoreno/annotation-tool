import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';

import ReactPlayer from 'react-player'
import Duration from './Duration'


import './VideoPlayer.css';


const VideoPlayer = props => {


  const [url, setUrl] = useState(props.url)
  const [pip, setPip] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [controls, setControls] = useState(true)
  const [light, setLight] = useState(false)
  const [volume, setVolumen] = useState(0.8)
  const [muted, setMuted] = useState(false)
  const [played, setPlayed] = useState(0)
  const [loaded, setLoaded] = useState(0)
  const [duration, setDuration] = useState(0)
  const [playbackRate, setPlaybackRate] = useState(1.0)
  const [loop, setLoop] =useState(false)
  

  const loadHandle = url => {
    console.log('onReady')
    setUrl(url)
    setPlayed(0)
    setLoaded(0)
    setPip(0)
    setControls(true)
    setLight(false)
    setVolumen(volume)
    setMuted(false)
    setLoop(false)
    setPlaybackRate(1.0)
  } 


  const handlePlay = () => {
    console.log('onPlay')
    setPlaying(true);
  }

  const handlePause = () => {
    console.log('onPause')
    setPlaying(false);
  }

  const handleProgress = state => {
    console.log('onProgress', state)
    setPlayed(state.played)
    setLoaded(state.loaded)
    if (!played) {
      
    }
  }

  const handleDuration = (duration) => {
    console.log('onDuration', duration)
    setDuration(duration)
  }

  function pad (string) {
    return ('0' + string).slice(-2)
  }

  useEffect(() => {
    setUrl(props.url)
    const seconds = duration*played
    const date = new Date(seconds * 1000)
    const mm = date.getUTCMinutes()
    const ss = pad(date.getUTCSeconds())
    const format = '0' + mm.toString() +':' + ss.toString()
    console.log('total', format)
    props.onnAddTime(format)
  }, [duration, played, props]);


  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs= {12} >
          <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url= {url}
              pip = {pip}
              playing={playing}
              controls={controls}
              light={light}
              loop={loop}
              playbackRate={playbackRate}
              volume={volume}
              muted={muted}
              width='100%'
              height='100%'
              onChange={loadHandle}
              onReady={() => console.log('onReady')}
              onStart={() => console.log('onStart')}
              onPlay={handlePlay}
              onPause={handlePause}
              onSeek={e => console.log('onSeek', e)}
              onProgress={handleProgress}
              onDuration={handleDuration}
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="info">
            <h2>Estado</h2>
            <table className="info-info">
            <tbody>
              <tr>
                <th>playing</th>
                <td>{playing ? 'true' : 'false'}</td>
              </tr>
              <tr>
                <th>volume</th>
                <td>{volume.toFixed(3)}</td>
              </tr>
              <tr>
                <th>played</th>
                <td>{played.toFixed(3)}</td>
              </tr>
              <tr>
                <th>loaded</th>
                <td>{loaded.toFixed(3)}</td>
              </tr>
              <tr>
                <th>duration</th>
                <td><Duration seconds={duration} /></td>
              </tr>
              <tr>
                <th>elapsed</th>
                <td><Duration seconds={duration * played} /></td>
              </tr>
              <tr>
                <th>remaining</th>
                <td><Duration seconds={duration * (1 - played)} /></td>
              </tr>
            </tbody>
          </table>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default VideoPlayer;