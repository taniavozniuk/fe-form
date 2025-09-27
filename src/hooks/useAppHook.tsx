import { SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";
import { FormData } from "../types/FromData";

export const useAppHooks = () => {
  //#region Name
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState(false);
  //#endregion
  //#region LastName
  const [lastName, setLastName] = useState("");
  const [errorLastName, setErrorLastName] = useState(false);
  //#endregion
  //#region Date
  const [date, setDate] = useState<Date | null>(null);
  const [errorDate, setErrorDate] = useState(false);
  //#endregion
  //#region FE technology
  const [feTechno, setFeTechno] = useState("");
  const [errorFeTechno, setErrorFeTechno] = useState(false);
  const [framewordVer, setFramewordVer] = useState("");
  const [errorVer, setErrorVer] = useState(false);
  //#endregion
  //#region Email
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  //#endregion
  //#region Hobbies
  const [selectHobbies, setSelectHobbies] = useState<string[]>([]);
  const [errorHobbies, SetErrorHobbies] = useState(false);
  //#endregion

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    if (errorName) {
      setErrorName(false);
    }
  };

  const handleChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLastName(value);
    if (errorLastName) {
      setErrorLastName(false);
    }
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (errorEmail) {
      setErrorEmail(false);
    }
  };

  const handleChangeDate = (date: Date | null) => {
    setDate(date);
    if (errorDate) {
      setErrorDate(false);
    }
  };

  const handleChangeFeTechono = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFeTechno(value);
    setFramewordVer("");
    if (errorFeTechno) {
      setErrorFeTechno(false);
    }
  };

  const handleChangeVer = (e: SelectChangeEvent<string>) => {
    const value = e.target.value;
    setFramewordVer(value);
    if (errorVer) {
      setErrorVer(false);
    }
  };

  const handleChangeHobbies = (e: SelectChangeEvent<string[]>) => {
    const value = e.target.value;
    setSelectHobbies(typeof value === "string" ? value.split(",") : value);
    if (errorHobbies) {
      SetErrorHobbies(false);
    }
  };

  const handleClear = () => {
    setName("");
    setErrorName(false);
    setLastName("");
    setErrorLastName(false);
    setDate(null);
    setErrorDate(false);
    setFeTechno("");
    setErrorFeTechno(false);
    setFramewordVer("");
    setErrorVer(false);
    setEmail("");
    setErrorEmail(false);
    setSelectHobbies([]);
    SetErrorHobbies(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let hasError = false;

    if (!name.trim()) {
      setErrorName(true);
      hasError = true;
    }

    if (!lastName.trim()) {
      setErrorLastName(true);
      hasError = true;
    }

    if (!date) {
      setErrorDate(true);
      hasError = true;
    }

    if (!feTechno.trim()) {
      setErrorFeTechno(true);
      hasError = true;
    }

    if (!framewordVer.trim()) {
      setErrorVer(true);
      hasError = true;
    }

    if (selectHobbies.length === 0) {
      SetErrorHobbies(true);
      hasError = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setErrorEmail(true);
      hasError = true;
    } else if (email === "test@test.test") {
      console.log("Error, email already exists");
      setErrorEmail(true);
      hasError = true;
    }

    if (hasError) {
      return;
    }

    const formattedDate = date
      ? `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
      : "";

    const formData: FormData = {
      name,
      lastName,
      date: formattedDate,
      feTechno,
      framewordVer,
      email,
      hobbies: selectHobbies,
    };

    console.log("Sending form data", JSON.stringify(formData, null, 2));

    handleClear();
  };

  return {
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
  };
};
