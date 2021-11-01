import { useEffect, useRef, useState } from "react";
import "./App.css";
import clock from "./assets/clock.svg";
import pause from "./assets/pause.svg";
import play from "./assets/play.svg";
import reset from "./assets/reset.svg";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const audioElement = useRef(null);

  const [breaks, setBreaks] = useState(5 * 60);
  const [session, setSession] = useState(25 * 60);
  const [isPlay, setIsPlay] = useState(false);
  const [time, setTime] = useState(60);
  const [isBreak, setIsBreak] = useState(false);
  const [isCountDowning, setIsCountDowning] = useState(false);
  const [intervalID, setIntervalID] = useState(null);

  // const onChangeHandle = (e) => {
  //   const { name, value } = e.target;

  //   console.log(value);
  //   if (!/\w/.test(value)) {
  //     if (value === "") {
  //       if (name === "session") {
  //         setSession(" ");
  //       } else if (name === "break") {
  //         setBreaks(" ");
  //       }
  //     } else {
  //       e.preventDefault();
  //     }
  //   } else {
  //     if (name === "session" && value <= 60 && value > 0) {
  //       setSession(value);
  //     } else if (name === "break" && value > 0) {
  //       setBreaks(value);
  //     }
  //   }
  // };

  const timer = () => {
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return minutes + ":" + seconds;
  };

  const playStop = (state) => {
    if (intervalID === null) {
      setIsPlay(true);
      countDown();
    } else {
      console.log("time", time);
      setIsPlay(false);
      setIsCountDowning(false);
      clearInterval(intervalID);
      setIntervalID(null);
    }
  };

  const countDown = () => {
    setIsCountDowning(true);
    var interval = setInterval(() => {
      setTime((previousdisplayTime) => previousdisplayTime - 1);
    }, 1000);
    setIntervalID(interval);
  };

  const resetHandler = () => {
    audioElement.current.pause();
    audioElement.current.currentTime = 0;
    setSession(25 * 60);
    setBreaks(5 * 60);
    setTime(1500);
    setIsBreak(false);
    setIsPlay(false);
    clearInterval(intervalID);
    setIntervalID(null);
    setIsCountDowning(false);
  };

  const incSessionTime = () => {
    if (!isCountDowning) {
      setSession(session >= 60 * 60 ? session : session + 60);
    }
  };

  const decSessionTime = () => {
    if (!isCountDowning) {
      setSession(session <= 60 ? session : session - 60);
    }
  };

  const incBreakTime = () => {
    if (!isCountDowning) {
      setBreaks(breaks >= 60 * 60 ? breaks : breaks + 60);
    }
  };

  const decBreakTime = () => {
    if (!isCountDowning) {
      setBreaks(breaks <= 60 ? breaks : breaks - 60);
    }
  };

  useEffect(() => {
    if (time === 0) {
      audioElement.current.play();
      setTimeout(() => {
        audioElement.current.pause();
        audioElement.current.currentTime = 0;
      }, 2000);
      clearInterval(intervalID);
      setIntervalID(null);
      setIsCountDowning(false);
      setIsBreak((pre) => !pre);

      if (!isBreak) {
        setTime(breaks);
        countDown();
      } else {
        setTime(session);
        countDown();
      }
    }
  }, [time]);

  useEffect(() => {
    if (!isCountDowning && !isBreak) {
      setTime(parseInt(session));
    }
  }, [session]);

  useEffect(() => {
    if (!isCountDowning && isBreak) {
      setTime(parseInt(breaks));
    }
  }, [breaks]);

  return (
    <div className="App">
      <Toaster position="bottom-left" reverseOrder={false} />
      <header>
        <h1>Pomodoro Clock</h1>
      </header>
      <section>
        <div className="section-wrap">
          <div className="image-wrap">
            <img src={clock} alt="clock" />
            <div
              id="time-left"
              className={`${
                time < 60
                  ? "under-one-minute"
                  : isBreak
                  ? "breakColor"
                  : "sessionColor"
              }`}
            >
              {timer()}
            </div>
          </div>
          <audio
            src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
            id="beep"
            ref={audioElement}
          ></audio>
          <div>
            <div
              className="session-label"
              id={`${!isBreak ? "my-timer-label" : ""}`}
            >
              SESSION
            </div>
            <div style={{ position: "relative" }}>
              <span
                className="break-label"
                id={`${isBreak ? "my-timer-label" : ""}`}
              >
                BREAK
              </span>
              <div id="timer-label">{isBreak ? "Break" : "Session"}</div>
            </div>
          </div>
        </div>
        <div className="timer-control">
          <div
            id="start_stop"
            onClick={() => {
              isPlay ? playStop("stop") : playStop("play");
            }}
          >
            {isPlay ? (
              <img src={pause} id="stop" alt="pause" />
            ) : (
              <img src={play} id="start" alt="play" />
            )}
          </div>
          <div>
            <img
              id="reset"
              src={reset}
              alt="reset"
              onClick={() => resetHandler()}
            />
          </div>
        </div>
      </section>
      <div className="buttons">
        <div className="session">
          <span id="session-label">Session Length</span>
          <div className="session-wrap">
            <div
              id="session-increment"
              onClick={() => {
                incSessionTime();
              }}
            >
              +
            </div>
            <div id="session-length">{parseInt(session) / 60}</div>
            <div
              id="session-decrement"
              onClick={() => {
                decSessionTime();
              }}
            >
              -
            </div>
          </div>
        </div>
        <div className="break">
          <span id="break-label">Break Length</span>
          <div className="break-wrap">
            <div id="break-increment" onClick={() => incBreakTime()}>
              +
            </div>
            <div id="break-length">{parseInt(breaks) / 60}</div>
            <div id="break-decrement" onClick={() => decBreakTime()}>
              -
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
