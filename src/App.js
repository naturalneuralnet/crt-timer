import { Box } from "@mui/material";
import StopWatch from "./StopWatch";

function App() {
  // change title
  document.title = "Stopwatch";

  // change the icon
  const link = document.querySelector('link[rel="icon"]');
  link.setAttribute("href", "./digital-clock.ico");

  return (
    <div className="App">
      <Box
        display={"flex"}
        className="crt"
        sx={{
          background:
            "radial-gradient(circle, rgba(47,61,61,1) 0%, rgba(14,16,16,1) 100%)",
          minHeight: "100vh",
          justifyContent: "center",
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          sx={{
            width: "50%",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <StopWatch></StopWatch>
        </Box>
      </Box>
    </div>
  );
}

export default App;
