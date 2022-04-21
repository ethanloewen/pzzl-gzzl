import React from "react";
import './Timer.scss'
import { useEffect, useState } from "react";

export default function Timer(props) {

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    toggle();
  }, []);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div class='timer'>
        {/* <button onClick={toggle}>{isActive ? 'Pause' : 'Start'}</button> */}
        <p>{props.title}</p>
        <p>{seconds}</p>
    </div>
  );
}