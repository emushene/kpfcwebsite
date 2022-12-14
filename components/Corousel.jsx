import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import styles from "../styles/Corousel.module.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: "./Images/Home Page Slider 1.webp",
  },
  {
    imgPath: "./Images/Home Page Slider 2.webp",
  },
  {
    imgPath: "./Images/Home Slider 3.webp",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlayDiv}>
        <h1>Quality Building Materials</h1>
        <p>

        Join the KPFC Builders investiment program with selected
        products such as Deformed Bars, Square Tubes & other Building Materials.

       
        </p>
      </div>
      <div className={styles.couAndIntro}>
        <div className={styles.couDiv}>
          <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 0,
                pl: 2,
                bgcolor: "background.default",
              }}
            >
              <Typography>{images[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: 700,
                        width: "100%",
                        display: "blog",
                        overflow: "hidden",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <div className={styles.reachOut}>
        
        <div className={styles.salesTeam}> <h2>LOOKING TO START A HARDWARE STORE?</h2> </div>
        <div className={styles.appointment}> <h2>LEARN MORE </h2></div>
       </div>
          </Box>
        </div>
        <div className={styles.couDivMobile}>
          <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 0,
                pl: 6,
                bgcolor: "background.default",
              }}
            >
              <Typography>{images[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: 230,
                        width: "100%",
                        display: "blog",
                        overflow: "hidden",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
    
          </Box>
        </div>
        <div className={styles.couDivMobileLandscape}>
          <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 0,
                pl: 6,
                bgcolor: "background.default",
              }}
            >
              <Typography>{images[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: 350,
                        width: "100%",
                        display: "blog",
                        overflow: "hidden",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            
          </Box>
        </div>
      </div>
    </div>
  );
}

export default SwipeableTextMobileStepper;
