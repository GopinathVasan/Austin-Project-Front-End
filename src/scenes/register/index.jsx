import React, { useState } from "react";
import { Box } from "@mui/material";
import FormInput from "../../Components/FormInput";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import axios from "axios";
import "./RegisterStyles.css";
import Header from "../../DashboardC/Header";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    confirmPassword: "",
    role: "",
    phone_number: "",
  });

  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "first_name",
      type: "text",
      placeholder: "First Name",
      errorMessage: "Type your first name",
      label: "First Name",
      required: true,
    },
    {
      id: 4,
      name: "last_name",
      type: "text",
      placeholder: "Last Name",
      errorMessage: "Type your last name",
      label: "Last Name",
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
    {
      id: 7,
      name: "role",
      type: "text",
      placeholder: "Role",
      errorMessage: "Enter correct role",
      label: "Role",
      required: true,
    },
    {
      id: 8,
      name: "phone_number",
      type: "tel",
      placeholder: "Phone Number",
      errorMessage: "Enter correct phone number",
      label: "Phone Number",
      pattern: "[0-9]{10}",
      required: true,
    },
  ];
  const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://austin-partnership-back-end.onrender.com/auth/register", values);
      // const response = await axios.post("http://127.0.0.1:8000/auth/register", values);
      console.log(response.data); // log the response from the API
      setMessage('Registration successful!');
      // Add code to handle success, such as redirecting the user or showing a success message
    } catch (error) {
      console.error("Error:", error);
      // Add code to handle error, such as displaying an error message to the user
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="display-app">
          <Sidebar isSidebar={isSidebar} />
          <main className="display-content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Box m="20px">
            <Header title="Register" subtitle="" />
              <div className="register-container">
                <form className="register-form" onSubmit={handleSubmit}>
                  {inputs.map((input) => (
                    <FormInput
                      key={input.id}
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                    />
                  ))}
                  <button className="register-btn" type="submit" onClick={() => {alert(message);}}>
                    Submit
                  </button>
                </form>
              </div>
            </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Register;
