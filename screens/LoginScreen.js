import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Pressable,
  Text,
} from "react-native";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isShowPass, setIsShowPass] = useState(true);

  const passwordHandler = (text) => setPassword(text);
  const emailHandler = (text) => setEmail(text);
  const showPassToggle = () => setIsShowPass(!isShowPass);

  const onLogin = () => {
    Alert.alert(`User Password: ${password}, Email: ${email}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.registerContainer}>
        <Text style={styles.registerTitle}>Увійти</Text>
        <View style={styles.formBox}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <TextInput
              value={email}
              onChangeText={emailHandler}
              placeholder="Адресa електронної пошти"
              style={styles.input}
            />
            <View style={styles.showPasscontainer}>
              <TextInput
                value={password}
                onChangeText={passwordHandler}
                placeholder="Пароль"
                secureTextEntry={isShowPass}
                style={[styles.inputPassword, styles.input]}
              />
              <Pressable
                title={"Показати"}
                onPress={showPassToggle}
                accessibilityLabel="Показати пароль"
                style={styles.showPass}
              >
                <Text style={[styles.showPassLabel]}>Показати</Text>
              </Pressable>
            </View>
            <Pressable
              title={"Увійти"}
              onPress={onLogin}
              accessibilityLabel="Увійти"
              style={styles.button}
            >
              <Text style={styles.buttonLabel}>Увійти</Text>
            </Pressable>
            <Text style={styles.link}>Немає акаунту? Зареєструватися</Text>
          </KeyboardAvoidingView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
    padding: 16,
  },
  registerTitle: {
    fontFamily: "Roboto",
    fontSize: 30,
    marginTop: 32,
    marginBottom: 32,
    fontWeight: "500",
    textAlign: "center",
  },
  formBox: {
    width: "100%",
    marginBottom: 43,
  },
  input: {
    width: "100%",
    height: 48,
    padding: 8,
    backgroundColor: "#F6F6F6",
    marginBottom: 16,
    borderRadius: 8,
    border: "1px solid #E8E8E8",
  },
  button: {
    width: "100%",
    marginTop: 43,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginBottom: 16,
  },
  buttonLabel: {
    color: "white",
    textAlign: "center",
  },
  text: {
    color: "black",
    fontSize: 16,
  },
  link: {
    color: "#1B4371",
    fontSize: 16,
    textDecorationLine: "underline",
    textAlign: "center",
  },
  showPasscontainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    width: "100%",
    backgroundColor: "#F6F6F6",
    marginBottom: 16,
    borderRadius: 8,
    border: "1px solid #E8E8E8",
    position: "relative",
  },
  showPassLabel: {
    position: "absolute",
    top: 12,
    right: 16,
    height: 25,
    fontSize: 16,
    color: "#1B4371",
  },
});

export default Login;
