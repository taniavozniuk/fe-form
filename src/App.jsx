import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import "./App.css";
import { useState } from "react";
import { frameworks } from "./frameworks";
const App = () => {
  //#region Name
  const [name, setName] = useState("");
  const [hasErrorName, setHasErrorName] = useState("");
  //#endregion
  //#region LastName
  const [lastName, setLastName] = useState("");
  const [hasErrorLastName, setHasErrorLastName] = useState("");
  //#endregion

  //#region FE technology
  const [feTechno, setFeTechno] = useState("");
  const [framewordVer, setFramewordVer] = useState("");
  // const frameworks = useState(frameworks);
  //#endregion
  const [date, setDate] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <form className="form">
        <TextField label="Name" />
        <TextField label="LastName" />
        <DatePicker
          label="Date of Birth"
          value={date}
          onChange={(newValue) => setDate(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />
        <FormControl fullWidth className="control">
          <InputLabel>FE technology</InputLabel>
          <Select
            value={feTechno}
            onChange={(e) => {
              setFeTechno(e.target.value);
              setFramewordVer("");
            }}
          >
            {Object.keys(frameworks).map((fw) => (
              <MenuItem key={fw} value={fw}>
                {fw}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth className="control">
          <InputLabel>FE version</InputLabel>
          <Select
            value={framewordVer}
            onChange={(e) => setFramewordVer(e.target.value)}
            disabled={!feTechno}
          >
            {feTechno &&
              frameworks[feTechno].map((v) => (
                <MenuItem key={v} value={v}>
                  {v}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <Button variant="contained">Submit</Button>
      </form>
    </LocalizationProvider>
  );
};

export default App;
