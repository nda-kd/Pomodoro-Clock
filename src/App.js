import { useEffect, useRef, useState } from "react";
import "./App.css";
import clock from "./assets/clock.svg";
import pause from "./assets/pause.svg";
import play from "./assets/play.svg";
import reset from "./assets/reset.svg";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const intervalRef = useRef(null);
  const audioRef = useRef(null);

  const [breaks, setBreaks] = useState(5);
  const [session, setSession] = useState(25);
  const [isPlay, setIsPlay] = useState(false);
  const [time, setTime] = useState(1500);
  const [isBreak, setIsBreak] = useState(false);
  const [isCountDowning, setIsCountDowning] = useState(false);

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
    if (state === "play") {
      setIsPlay(true);
      countDown();
    } else if (state === "stop") {
      console.log("time", time);
      setIsPlay(false);
      setIsCountDowning(false);
      clearInterval(intervalRef.current);
    }
  };

  const countDown = () => {
    setIsCountDowning(true);
    intervalRef.current = setInterval(() => {
      setTime((prev) => parseInt(prev) - 1);
    }, 1000);
  };

  useEffect(() => {
    if (time === 0) {
      audioRef.current.play();
      setTimeout(() => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }, 2000);
    } else if (time < 0) {
      clearInterval(intervalRef.current);
      setIsCountDowning(false);
      setIsBreak((pre) => !pre);

      if (!isBreak) {
        setTime(breaks * 60);
        countDown();
      } else {
        setTime(session * 60);
        countDown();
      }
    }
  }, [time]);

  useEffect(() => {
    if (!isCountDowning && !isBreak) {
      setTime(parseInt(session) * 60);
    }
  }, [session]);

  useEffect(() => {
    if (!isCountDowning && isBreak) {
      setTime(parseInt(breaks) * 60);
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
            <audio
              id="beep"
              preload="auto"
              ref={(audio) => (audioRef.current = audio)}
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
            />
          </div>
          <div>
            <div
              className="session-label"
              id={`${!isBreak ? "timer-label" : ""}`}
            >
              SESSION
            </div>
            <div className="break-label" id={`${isBreak ? "timer-label" : ""}`}>
              BREAK
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
          <div id="reset">
            <img
              src={reset}
              alt="reset"
              onClick={() => {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
                setSession(25);
                setBreaks(5);
                setTime(1500);
                setIsBreak(false);
                setIsPlay(false);
                clearInterval(intervalRef.current);
                setIsCountDowning(false);
              }}
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
                if (!isCountDowning) {
                  if (parseInt(session) > 0) {
                    if (parseInt(session) < 60) {
                      setSession((prevSession) => parseInt(prevSession) + 1);
                    } else {
                      toast.error("Session can't be greater than 60.");
                    }
                  } else {
                    toast.error("Session can't be smaller than one.");
                  }
                }
              }}
            >
              +
            </div>
            <div id="session-length">{parseInt(session)}</div>
            <div
              id="session-decrement"
              onClick={() => {
                if (!isCountDowning) {
                  if (parseInt(session) && parseInt(session) > 1) {
                    setSession((prevSession) => parseInt(prevSession) - 1);
                  } else {
                    toast.error("Session can't be smaller than one.");
                  }
                }
              }}
            >
              -
            </div>
          </div>
        </div>
        <div className="break">
          <span id="break-label">Break Length</span>
          <div className="break-wrap">
            <div
              id="break-increment"
              onClick={() => {
                if (!isCountDowning) {
                  if (breaks) {
                    if (parseInt(breaks) < 60) {
                      setBreaks((prevBreaks) => parseInt(prevBreaks) + 1);
                    } else {
                      toast.error("Break can't be greater than 60.");
                    }
                  }
                }
              }}
            >
              +
            </div>
            <div id="break-length">{parseInt(breaks)}</div>
            <div
              id="break-decrement"
              onClick={() => {
                if (!isCountDowning) {
                  if (parseInt(breaks) && parseInt(breaks) > 1) {
                    setBreaks((prevBreaks) => parseInt(prevBreaks) - 1);
                  } else {
                    toast.error("Break can't be smaller than one.");
                  }
                }
              }}
            >
              -
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
