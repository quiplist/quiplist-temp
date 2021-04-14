import React from 'react';
import Swal from 'sweetalert2';
//import WheelComponent from 'react-wheel-of-prizes'
import WheelComponent from './WheelComponent';
import 'react-wheel-of-prizes/dist/index.css';

const Wheel = () => {
  const segments =
  ['better luck next time1', 'won 70', 'won 10','better luck next time2', 'won 2', 'won uber pass', 'better luck next time3', 'won a voucher3'];
  const choice = segments[Math.floor(Math.random() * segments.length)];
  const segColors = [
    "#F1823B",
  ];
  const onFinished = (winner) => {
    Swal.fire({
      title: winner,
      showCancelButton: false,
      showConfirmButton: false
    })
    var index = segments.indexOf(winner)
    if (index !== -1) {
      segments.splice(index, 1);
    }else{
      Swal.fire({
        title: "No more names",
        showCancelButton: true,
        showConfirmButton: true
      })
    }
  }

  return (
    <div className="wheel-wrapper" id="canvas-container">
      <WheelComponent
        segments = {segments}
        segColors = {segColors}
        winningSegment = {choice}
        onFinished={(winner)=>onFinished(winner)}
        primaryColor='#BBBBBC'
        contrastColor='white'
        buttonText='Spin'
        isOnlyOnce = {false}
        size={290}/>
    </div>
  );
}

export default Wheel;
