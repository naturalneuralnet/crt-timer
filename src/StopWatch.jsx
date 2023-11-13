import { Box, Typography, Button, Stack, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import { useState, useEffect } from "react";
import tickSound from "./assets/watch-ticking1.mp3";

const StopWatch = () => {
  const font = "Courier";

  /// local state
  /// the time counted up in milliseconds
  const [time, setTime] = useState(0);
  /// whether the timer is active or not
  const [isActive, setIsActive] = useState(false);
  /// / whether the timer is paused or not
  const [isPaused, setIsPaused] = useState(true);

  // useEffect is called when isActive or isPaused changes

  useEffect(() => {
    const tickingAudio = new Audio(tickSound);

    /// variable for the interval function
    let interval = null;

    // when the start button has been clicked
    if (isActive && isPaused === false) {
      // counts up the time in 10 milliseconds
      interval = setInterval(() => {
        setTime((tick) => tick + 10);
      }, 10);

      // calculates each tock, a full second or 1000 millisecond that has passed
      const tock = (time / 1000) % 100;

      // this if statement plays the tick sound every second
      // checks if the tock is a whole second and divisble by 1 to 0
      if (tock % 1 === 0) {
        // if it is then it plays the sound
        tickingAudio.play();
      }

      /// if isActive is not true then the interval is cleared, the timer is stopped
    } else {
      tickingAudio.pause();
      clearInterval(interval);
    }
    /// clears the interval on return
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused, time]);

  // Starts the timer
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  // Pauses or Resumes the timer
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  // Resets the timer
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <>
      <Box
        margin={"10px "}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignContent={"center"}
        sx={{
          backgroundColor: "transparent",
          width: "100%",
        }}
      >
        <Typography
          className="separation"
          fontSize={{ lg: "55px", md: "45px", sm: "40px", xs: "35px" }}
          color={"whitesmoke"}
          fontFamily={font}
          margin={"15px"}
        >
          STOPWATCH
        </Typography>
      </Box>
      <Box
        sx={{
          background: "transparent",
          padding: "0px 5px 0px 5px",
          borderRadius: "10%",
          width: "90%",
          height: "50%",
          margin: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "whitesmoke",
        }}
      >
        <Stack spacing={3}>
          <Stack
            direction="row"
            spacing={1}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            alignContent={"center"}
          >
            <Typography
              fontFamily={font}
              fontSize={{ lg: "65px", md: "45px", sm: "40px", xs: "35px" }}
            >{`${`0${Math.floor((time / 60000) % 60)}`.slice(
              -2
            )}:`}</Typography>
            <Typography
              fontFamily={font}
              fontSize={{ lg: "65px", md: "45px", sm: "40px", xs: "35px" }}
            >{`${`0${Math.floor((time / 1000) % 60)}`.slice(-2)}:`}</Typography>
            <Typography
              fontFamily={font}
              fontSize={{ lg: "65px", md: "45px", sm: "40px", xs: "35px" }}
            >
              {`0${Math.floor((time / 10) % 100)}`.slice(-2)}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Button
              name="start"
              sx={{
                borderRadius: "0px",
                backgroundColor: "transparent",
              }}
              onClick={handleStart}
            >
              <Typography
                className="separation"
                color="whitesmoke"
                fontFamily={font}
                fontSize={{ lg: "35px", md: "25px", sm: "22px", xs: "18px" }}
              >
                Start
              </Typography>
            </Button>

            <Button
              name="pause"
              sx={{
                borderRadius: "0px",
                backgroundColor: "transparent",
              }}
              onClick={handlePauseResume}
            >
              <Typography
                className="separation"
                color="whitesmoke"
                fontFamily={font}
                fontSize={{ lg: "35px", md: "25px", sm: "22px", xs: "18px" }}
              >
                {isPaused ? "Resume" : "Pause"}
              </Typography>
            </Button>
            <Button
              name="stop"
              sx={{
                borderRadius: "0px",
                backgroundColor: "transparent",
              }}
              onClick={handleReset}
            >
              <Typography
                className="separation"
                color="whitesmoke"
                fontFamily={font}
                fontSize={{ lg: "35px", md: "25px", sm: "22px", xs: "18px" }}
              >
                Reset
              </Typography>
            </Button>
          </Stack>
        </Stack>
      </Box>

      <Box
        sx={{
          backgroundColor: "transparent",
          borderRadius: "1%",
          width: "50%",
          height: "15%",
          margin: "40px",
          display: "flex",
          padding: "0px 5px 0px 5px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton
          type="link"
          href="https://github.com/naturalneuralnet/crt-timer"
          sx={{
            color: "white",
            "&:hover": { backgroundColor: "white", color: "#272c2a" },
          }}
        >
          <GitHubIcon></GitHubIcon>
        </IconButton>
      </Box>
    </>
  );
};

export default StopWatch;
