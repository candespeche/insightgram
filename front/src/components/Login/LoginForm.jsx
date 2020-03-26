import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import Login from "./Login";
import { Container } from "./styles";
import { connect } from "react-redux";
import { loginUser } from "../../../redux/actions/users";
import { getItemStorage } from "../../../assets/js/AsyncStorage";

const LoginForm = ({ loginUser, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const token = getItemStorage("@Token");

  useEffect(() => {
    if (token._55) {
      navigation.navigate("FeedsStack");
    } else {
      return;
    }
  }, []);

  const changeEmail = email => {
    setEmail(email);
  };

  const changePassword = password => {
    setPassword(password);
  };

  const buttonPressed = () => {
    if (email && password) {
      loginUser(email, password).then(response => {
        if (response == 401) {
          Alert.alert("Email o contraseña incorrecta");
        } else {
          navigation.navigate("FeedsStack");
        }
      });
    } else {
      Alert.alert("¡ERROR! Completá todos los campos");
    }
  };

  return (
    <Container>
      <Login
        changeEmail={changeEmail}
        changePassword={changePassword}
        buttonPressed={buttonPressed}
        email={email}
        password={password}
      />
    </Container>
  );
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    loginUser: (email, password) => dispatch(loginUser(email, password))
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
