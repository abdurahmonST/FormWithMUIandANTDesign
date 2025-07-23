import React, { useState } from "react";
import {
  Autocomplete,
  Button,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import {
  ButtonContainer,
  InputWrapper,
  MaterialWrapper,
} from "./materialStyle";

const FormPageMaterialUi = () => {
  const genderOptions = ["Male", "Female"];
  const steps = ["Step 1", "Step 2", "Confirmation"];
  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    phone: "",
    address: "",
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <MaterialWrapper>
      <form onSubmit={handleSubmit}>
        <h2>Multi Step Form</h2>
        <p>React Material UI multi step form with basic validation.</p>

        <Stepper activeStep={activeStep} className="StepperWrapper">
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel className="MakeColumn">{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === 0 && (
          <>
            <InputWrapper>
              <TextField
                label="First Name"
                required
                variant="standard"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
              <TextField
                label="Last Name"
                required
                variant="standard"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <TextField
                label="Email"
                type="email"
                variant="standard"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              <Autocomplete
                disablePortal
                options={genderOptions}
                value={formData.gender}
                onChange={(e, value) => handleChange("gender", value || "")}
                sx={{ width: 224 }}
                renderInput={(params) => (
                  <TextField {...params} label="Gender" variant="standard" />
                )}
              />
            </InputWrapper>
          </>
        )}

        {activeStep === 1 && (
          <InputWrapper>
            <TextField
              label="Phone Number"
              variant="standard"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
            <TextField
              label="Address"
              variant="standard"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />
          </InputWrapper>
        )}

        {activeStep === 2 && (
          <div style={{ marginTop: 20 }}>
            <Typography variant="h6">Confirm Your Details:</Typography>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </div>
        )}

        <ButtonContainer>
          {activeStep > 0 && (
            <Button variant="outlined" onClick={handleBack}>
              Back
            </Button>
          )}
          {activeStep < steps.length - 1 ? (
            <Button variant="contained" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button type="submit" variant="contained">
              Submit
            </Button>
          )}
        </ButtonContainer>
      </form>
    </MaterialWrapper>
  );
};

export default FormPageMaterialUi;
