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
  Image,
  Text,
} from "react-native";

const Register = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isShowPass, setIsShowPass] = useState(true);

  const loginHandler = (text) => setLogin(text);
  const passwordHandler = (text) => setPassword(text);
  const emailHandler = (text) => setEmail(text);
  const showPassToggle = () => setIsShowPass(!isShowPass);

  const onRegister = () => {
    Alert.alert(`User login: ${login}, Password: ${password}, Email: ${email}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.registerContainer}>
        <View
          style={[
            styles.avatar,
            {
              transform: [{ translateY: -50 }, { translateX: 50 }],
            },
          ]}
        >
          <Pressable
            style={[
              styles.addButton,
              {
                transform: [{ translateY: 75 }, { translateX: 10 }],
              },
            ]}
          >
            <Image
              source={require("../img/icon-plus.png")}
              style={{ width: 13, height: 13 }}
            />
          </Pressable>
        </View>
        <Text style={styles.registerTitle}>Реєстрація</Text>
        <View style={styles.formBox}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <TextInput
              value={login}
              onChangeText={loginHandler}
              placeholder="Логін"
              style={styles.input}
            />
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
              title={"Зареєструватися"}
              onPress={onRegister}
              accessibilityLabel="Зареєструватися"
              style={styles.button}
            >
              <Text style={styles.buttonLabel}>Зареєструватися</Text>
            </Pressable>
            <Text style={styles.link}>Вже маєте акаунт? Увійти</Text>
          </KeyboardAvoidingView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
    padding: 16,
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    position: "absolute",
    top: 0,
    right: "50%",
    borderRadius: 16,
  },
  addButton: {
    width: 25,
    height: 25,
    backgroundColor: "#fff",
    borderColor: "1px solid orange",
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: 50,
    borderColor: "#FF6C00",
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  registerTitle: {
    fontFamily: "Roboto",
    fontSize: 30,
    marginTop: 92,
    marginBottom: 32,
    fontWeight: "500",
    textAlign: "center",
  },
  formBox: {
    width: "100%",
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

export default Register;
