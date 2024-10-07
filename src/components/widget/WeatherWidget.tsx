import { useContext, useState } from "react";
import { Card, CardContent, IconButton, Typography, Switch, FormGroup, FormControlLabel, Grid2 } from "@mui/material";
import { WbSunny as SunnyIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { context } from "../context/TemperatureContext";

interface WeatherWidgetProps {
  onRemoveClick: () => void;
}


const WeatherWidget: React.FC<WeatherWidgetProps> = ({ onRemoveClick }) => {

  const [checked, setChecked] = useState(false);
  const contexttemp = useContext(context);
  const temperature = 25;
  const weatherCondition = 'Sunny';

  // Check if context is undefined and handle it
  if (!contexttemp) {
    throw new Error('TemperatureComponent must be used within a TemperatureProvider');
  }

  const { unit, toggleUnit }: any = contexttemp;

  //==================================================================================

  const onClickToggle = () => {
    setChecked(prev => !prev);
    toggleUnit();
  }

  //==================================================================================

  return (
    <Card>
      <CardContent>
        <Grid2
          container
          justifyContent="center"
          alignItems="center"
        >
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={checked}
                  onChange={onClickToggle} />}
              label={unit === 'Celsius' ? 'Fahrenheit' : 'Celsius'} />
          </FormGroup>
        </Grid2>
        <Typography variant="h5">New York</Typography>
        <Typography>{temperature}°{unit === 'Celsius' ? 'C' : 'F'}</Typography>
        <SunnyIcon />
        <Typography>{weatherCondition}</Typography>
        <IconButton onClick={onRemoveClick}>
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}
export default WeatherWidget;