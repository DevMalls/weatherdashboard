import { Box, Button, Grid2 } from "@mui/material";
import { useEffect, useState } from "react";
import WeatherWidget from "../widget/WeatherWidget";

const Dashboard: React.FC = () => {
  const [showWidget, setShowWidget] = useState<boolean>(() => {
    let savedState = localStorage.getItem("widgetState");
    return savedState ? JSON.parse(savedState) : false;
  });

  //==========================================================================

  useEffect(() => {
    localStorage.setItem("widgetState", JSON.stringify(showWidget));
  }, [showWidget]);

  //==========================================================================

  const onAddClick = (): void => {
    setShowWidget(true);
  };

  const onRemoveClick = (): void => {
    setShowWidget(false);
  };

  //==========================================================================

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      {!showWidget ? (
        <Button variant="contained" onClick={onAddClick}>
          Add Widget
        </Button>
      ) : (
        <Grid2>
          <WeatherWidget onRemoveClick={onRemoveClick} />
        </Grid2>
      )}
    </Box>
  );
};
export default Dashboard;
