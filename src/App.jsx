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
  FormHelperText,
} from "@mui/material";
import "./App.css";
import { frameworks } from "./items/frameworks";
import { hobbies } from "./items/hobbies";
import { useAppHooks } from "./hooks/useAppHook";

const App = () => {
  const {
    name,
    lastName,
    date,
    feTechno,
    framewordVer,
    email,
    selectHobbies,
    errorName,
    errorLastName,
    errorDate,
    errorFeTechno,
    errorVer,
    errorEmail,
    errorHobbies,
    handleChangeName,
    handleChangeLastName,
    handleChangeEmail,
    handleChangeDate,
    handleChangeFeTechono,
    handleChangeVer,
    handleChangeHobbies,
    handleClear,
    handleSubmit,
  } = useAppHooks();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <form className="form" id="form" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={handleChangeName}
          error={errorName}
          helperText={errorName ? "Name is required" : ""}
        />
        <TextField
          label="LastName"
          value={lastName}
          onChange={handleChangeLastName}
          error={errorLastName}
          helperText={errorLastName ? "LastName is required" : ""}
        />
        <DatePicker
          label="Date of Birth"
          value={date}
          onChange={handleChangeDate}
          slotProps={{
            textField: {
              error: errorDate,
              helperText: errorDate ? "Date is required" : "",
              fullWidth: true,
              margin: "normal",
            },
          }}
        />
        <FormControl fullWidth className="control">
          <InputLabel>FE technology</InputLabel>
          <Select
            value={feTechno}
            onChange={handleChangeFeTechono}
            label="FE technology"
          >
            <MenuItem disabled>
              <em>Select FE technology</em>
            </MenuItem>
            {Object.keys(frameworks).map((fw) => (
              <MenuItem key={fw} value={fw}>
                {fw}
              </MenuItem>
            ))}
          </Select>
          {errorFeTechno && (
            <FormHelperText error>FE technology is required</FormHelperText>
          )}
        </FormControl>

        <FormControl fullWidth className="control">
          <InputLabel>FE version</InputLabel>
          <Select
            value={framewordVer}
            onChange={handleChangeVer}
            disabled={!feTechno}
            label="FE version"
          >
            <MenuItem disabled>
              <em>Select FE version</em>
            </MenuItem>
            {feTechno &&
              frameworks[feTechno].map((v) => (
                <MenuItem key={v} value={v}>
                  {v}
                </MenuItem>
              ))}
          </Select>
          {errorVer && (
            <FormHelperText error>FE version is required</FormHelperText>
          )}
        </FormControl>
        <TextField
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
          variant="outlined"
          error={errorEmail}
          helperText={errorEmail ? "Valid email is required" : ""}
          fullWidth
          required
        />
        <FormControl fullWidth className="control">
          <InputLabel>Hobbies</InputLabel>
          <Select
            multiple
            value={selectHobbies || []}
            onChange={handleChangeHobbies}
            label="Hobbies"
          >
            <MenuItem disabled>
              <em>Select Hobbies</em>
            </MenuItem>
            {hobbies.map((h) => (
              <MenuItem key={h} value={h}>
                {h}
              </MenuItem>
            ))}
          </Select>
          {errorHobbies && (
            <FormHelperText>Choose at least one hobby</FormHelperText>
          )}
        </FormControl>
        <div className="button">
          <Button variant="contained" type="submit" fullWidth>
            Submit
          </Button>
          <Button variant="contained" onClick={handleClear} fullWidth>
            Clear
          </Button>
        </div>
      </form>
    </LocalizationProvider>
  );
};

export default App;
