import {
  Autocomplete,
  Button,
  Step,
  StepLabel,
  Stepper,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import {
  ButtonContainer,
  InputWrapper,
  MaterialWrapper,
} from "./materialStyle";

const FormPageMaterialUi = () => {
  const gender = ["Male", "Female"];
  const steps = ["Step 1", "Step 2", "Step 3"];
  const [activeStep, setActiveStep] = useState(0);

  return (
    <MaterialWrapper>
      <nav>Multi Step Form</nav>
      <form>
        <h2>Multi Step Form</h2>
        <p>
          React Material UI multi step from with basic form validation logic.
        </p>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <InputWrapper>
          <TextField label="First Name" required></TextField>
          <TextField label="Last Name" required></TextField>
        </InputWrapper>

        <InputWrapper>
          <TextField label="Email" type="email"></TextField>
          <Autocomplete
            disablePortal
            options={gender}
            sx={{ width: 224 }}
            renderInput={(params) => <TextField {...params} label="Gender" />}
          ></Autocomplete>
        </InputWrapper>
        <ButtonContainer>
          <Button variant="contained" sx={{ width: 24 }}>
            Next
          </Button>
        </ButtonContainer>
      </form>
    </MaterialWrapper>
  );
};

export default FormPageMaterialUi;
