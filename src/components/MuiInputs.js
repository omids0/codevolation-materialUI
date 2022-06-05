import {
  IconButton,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Checkbox,
  FormGroup,
  Switch,
  Rating,
  Autocomplete,
} from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function MuiTextField() {
  const [showPassword, setshowPassword] = useState(false);
  const [selectedCountry, setselectedCountry] = useState(null);
  const [selectCheckBox, setselectCheckBox] = useState(false);
  const [skills, setskills] = useState([]);
  const [darkmode, setdarkmode] = useState(false);
  const [rating, setrating] = useState(0);

  console.log({ rating });

  const skillsOptions = ["html", "css", "javascript", "react js"];

  const handelSelectSkill = (e) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setskills([...skills, e.target.value]);
    } else {
      setskills(skills.filter((skill) => skill !== e.target.value));
    }
  };

  return (
    <Stack spacing={2} direction="column" p={2}>
      <Stack spacing={4} direction="row">
        <TextField label="First Name" variant="outlined" />
        <TextField label="First Name" variant="filled" />
        <TextField label="First Name" variant="standard" />
      </Stack>
      <Stack spacing={4} direction="row">
        <TextField
          label="Username"
          variant="outlined"
          color="secondary"
          required
        />
        <TextField
          label="Password"
          variant="filled"
          required
          type={showPassword ? "text" : "password"}
          helperText="Dont let anyone to see your password!"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setshowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField label="Search" variant="standard" type="search" />
      </Stack>
      <Stack width="200px">
        <TextField
          label="Select Country"
          select
          value={selectedCountry}
          multiple
          onChange={(e) => setselectedCountry(e.target.value)}
        >
          <MenuItem value="IRAN">Iran</MenuItem>
          <MenuItem value="TURKEY">Turkey</MenuItem>
          <MenuItem value="IRAQ">Iraq</MenuItem>
          <MenuItem value="PAKISTAN">Pakistan</MenuItem>
        </TextField>
      </Stack>
      <Stack>
        <FormControl>
          <FormLabel id="radio-btn-label">Testing radio button</FormLabel>
          <RadioGroup
            name="test-radio-btn"
            aria-labelledby="radio-btn-label"
            row
          >
            <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
            <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
            <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
          </RadioGroup>
        </FormControl>
      </Stack>

      <Stack>
        <FormControlLabel
          label="I accept terms and conditions"
          control={
            <Checkbox
              checked={selectCheckBox}
              onChange={() => setselectCheckBox(!selectCheckBox)}
            />
          }
        />
      </Stack>
      <Stack>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              value="html"
              control={
                <Checkbox
                  checked={skills.includes("html")}
                  onChange={handelSelectSkill}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value="css"
              control={
                <Checkbox
                  checked={skills.includes("css")}
                  onChange={handelSelectSkill}
                />
              }
            />
            <FormControlLabel
              label="JAVASCRIPT"
              value="javascript"
              control={
                <Checkbox
                  checked={skills.includes("javascript")}
                  onChange={handelSelectSkill}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Stack>
      <Stack>
        <FormControlLabel
          label="Dark mode"
          control={
            <Switch value={darkmode} onChange={() => setdarkmode(!darkmode)} />
          }
        />
      </Stack>
      <Stack>
        <Rating
          value={rating}
          onChange={(e) => setrating(e.target.value)}
          precision={0.5}
        />
      </Stack>
      <Stack width="250px">
        <Autocomplete
          options={skillsOptions}
          renderInput={(params) => <TextField {...params} label="Skills" />}
        />
      </Stack>
    </Stack>
  );
}
