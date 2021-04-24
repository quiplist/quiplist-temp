import React, { useEffect, useState } from 'react'
import OuterWheel from "images/spin.png";

const WheelComponent = ({
  segments,
  segColors,
  winningSegment,
  onFinished,
  primaryColor,
  contrastColor,
  buttonText,
  isOnlyOnce = true,
  size = 290,
  upDuration = 100,
  downDuration = 1000,
  isRunning,
  isDone,
  isDisabled,
  onDrawMouseOver,
  onDrawMouseOut,
  currentEvent,
  onWinnerMouseOver,
  onWinnerMouseOut,
  setWinner,
  currentChoice
}) => {
  let currentSegment = ''
  let isStarted = false
  const [isFinished, setFinished] = useState(false)
  let timerHandle = 0
  const timerDelay = segments.length
  let angleCurrent = 0
  let angleDelta = 0
  let canvasContext = null
  let maxSpeed = Math.PI / `${segments.length}`
  const upTime = segments.length * upDuration
  const downTime = segments.length * downDuration
  let spinStart = 0
  let frames = 0
  const centerX = 300
  const centerY = 300
  useEffect(() => {
    wheelInit()
    setTimeout(() => {
      window.scrollTo(0, 1)
    }, 0)
  }, [])
  const wheelInit = () => {
    initCanvas()
    wheelDraw()
    //drawBgImg()
  }

  const initCanvas = () => {
    let canvas = document.getElementById('canvas');
    let spinBtn = document.getElementById('spinWheel');

    if (navigator.appVersion.indexOf('MSIE') !== -1) {
      canvas = document.createElement('canvas')
      canvas.setAttribute('width', 1000)
      canvas.setAttribute('height', 600)
      canvas.setAttribute('id', 'canvas')
      document.getElementById('wheel').appendChild(canvas)
    }
    spinBtn.addEventListener('click', spin, false)
    //canvas.addEventListener('click', spin, false)
    canvasContext = canvas.getContext('2d')

   // canvasContext.drawImage(OuterWheel,0,0);

  }

  const drawBgImg = () => {
    let bgImg = new Image();
    bgImg.src = OuterWheel;
    bgImg.onload = () => {
      canvasContext.drawImage(bgImg, 0, 0);
    }
  }

  const spin = () => {
    isStarted = true
    isRunning = true
    if (timerHandle === 0) {
      spinStart = new Date().getTime()
      //maxSpeed = Math.PI / ((segments.length*2) + Math.random())
      maxSpeed = Math.PI / segments.length
      frames = 0
      timerHandle = setInterval(onTimerTick, timerDelay)
    }
  }
  const onTimerTick = () => {
    frames++
    draw()
    const duration = new Date().getTime() - spinStart
    let progress = 0
    let finished = false
    if (duration < upTime) {
      progress = duration / upTime
      angleDelta = maxSpeed * Math.sin((progress * Math.PI) / 2)
    } else {
      if (winningSegment) {
        if (currentSegment === winningSegment && frames > segments.length) {
          progress = duration / upTime
          angleDelta =
            maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2)
          progress = 1
        } else {
          progress = duration / downTime
          angleDelta =
            maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2)
        }
      } else {
        progress = duration / downTime
        angleDelta = maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2)
      }
      if (progress >= 1) finished = true
    }

    angleCurrent += angleDelta
    while (angleCurrent >= Math.PI * 2) angleCurrent -= Math.PI * 2
    if (finished) {
      setFinished(true)
      onFinished(currentSegment)
      clearInterval(timerHandle)
      timerHandle = 0
      angleDelta = 0
    }
  }

  const wheelDraw = () => {
    clear()
    drawWheel()
    drawNeedle()
  }

  const draw = () => {
    clear()
    drawWheel()
    drawNeedle()
  }

  const drawSegment = (key, lastAngle, angle) => {
    const ctx = canvasContext
    const value = segments[key]

    ctx.save()
    ctx.beginPath()
    ctx.moveTo(centerX, centerY)
    ctx.arc(centerX, centerY, size, lastAngle, angle, false)
    ctx.lineTo(centerX, centerY)
    ctx.closePath()
    ctx.fillStyle = segColors[key]




    ctx.fill()
    ctx.stroke()
    ctx.save()
    ctx.translate(centerX, centerY)
    ctx.rotate((lastAngle + angle) / 2)
    ctx.fillStyle = contrastColor || 'white'
    ctx.font = 'bold 1em proxima-nova'
    ctx.fillText(value.user.full_name.substr(0, 21), size / 2 + 20, 0)
    ctx.restore()
  }

  const drawWheel = () => {
    const ctx = canvasContext
    let lastAngle = angleCurrent
    const len = segments.length
    const PI2 = Math.PI * 2
    ctx.lineWidth = 1
    ctx.strokeStyle = primaryColor || 'black'
    ctx.textBaseline = 'middle'
    ctx.textAlign = 'center'
    ctx.font = '1em proxima-nova'
    for (let i = 1; i <= len; i++) {
      const angle = PI2 * (i / len) + angleCurrent
      drawSegment(i - 1, lastAngle, angle)
      lastAngle = angle
    }

    // Draw a center circle
    ctx.beginPath()
    ctx.arc(centerX, centerY, 20, 0, PI2, false)
    ctx.closePath()
    ctx.fillStyle = '#F7B944' || 'black'
    ctx.lineWidth = 0
    ctx.fill()
    ctx.textAlign = 'center'
    ctx.stroke()

    // Draw outer circle
    // ctx.beginPath()
    // ctx.arc(centerX, centerY, size, 0, PI2, false)
    // ctx.closePath()

    // ctx.lineWidth = 10
    // ctx.strokeStyle = primaryColor || 'black'
    // ctx.stroke()
  }

  const drawNeedle = () => {
    const ctx = canvasContext
    ctx.lineWidth = 1
    ctx.strokeStyle = contrastColor || 'white'
    ctx.fileStyle = contrastColor || 'white'
    ctx.beginPath()
    ctx.moveTo(centerX + 0, centerY - 50)
    ctx.lineTo(centerX - 20, centerY - 50)
    ctx.lineTo(centerX, centerY - 70)
    ctx.closePath()
    //ctx.fill() //display arrow
    const change = angleCurrent + Math.PI / 2
    let i =
      segments.length -
      Math.floor((change / (Math.PI * 2)) * segments.length) -
      1
    if (i < 0) i = i + segments.length
    ctx.textAlign = 'center'
    ctx.textBaseline = 'top'
    ctx.fillStyle = primaryColor || 'black'
    ctx.font = 'bold 1.5em proxima-nova'
    currentSegment = segments[i]
    isStarted && ctx.fillText(currentSegment, centerX + 10, centerY + size + 50)
  }

  const clear = () => {
    const ctx = canvasContext
    ctx.clearRect(0, 0, 1000, 800)
  }
  return (
    <div id='wheel'>
      <div className="canvas-wrapper">
        <canvas
          id='canvas'
          width='600'
          height='600'
          style={{
            pointerEvents: isFinished && isOnlyOnce ? 'none' : 'auto',
            //backgroundImage: `url(${OuterWheel})`
          }}
        />
      </div>
      <div className="RandomPicker__controls">
        <button id="spinWheel"
          style={{ background : currentEvent.random_number_winner_mouse_out, border : '1px solid' + currentEvent.random_number_winner_mouse_out }}
          onMouseEnter={event => onWinnerMouseOver(event)}
          onMouseOut={event => onWinnerMouseOut(event)}
          className="RandomPicker__button mb-2" disabled={isDone}>{buttonText}</button>
        <form
          action="."
          onSubmit={e => {
            e.preventDefault()
            setWinner(currentChoice)
          }}>
          <input
            type="submit" value={'Winner'}
            className="RandomPicker__button"
            style={{ background : currentEvent.random_number_winner_mouse_out, border : '1px solid' + currentEvent.random_number_winner_mouse_out }}
            onMouseEnter={event => onWinnerMouseOver(event)}
            onMouseOut={event => onWinnerMouseOut(event)}
            disabled={isDone || isDisabled} />
        </form>
      </div>
    </div>
  )
}
export default WheelComponent
