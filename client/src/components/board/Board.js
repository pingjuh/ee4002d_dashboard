import React, { useContext } from 'react'
import boardjpeg from './board.jpeg'
import boardgif from './board.gif'
import sensorContext from '../../context/sensor/sensorContext'

const Board = () => {
  const { connected } = useContext(sensorContext)
  if (connected) return (
    <img src={boardgif} alt="board" style={{ width: '201px', height: '390px', margin: 'auto', display: 'block' }} />
  );
  else return (
    <img src={boardjpeg} alt="board" style={{ width: '201px', height: '390px', margin: 'auto', display: 'block' }} />
  );
}
    
export default Board;