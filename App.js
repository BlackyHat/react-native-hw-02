import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/LoginScreen";
import Register from "./screens/RegistrationScreen";

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>WELCOME TO UKRAINE 2023</Text>
      </View>
      {/* <Register /> */}
      <Login />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 160,
    backgroundColor: "#0c0c31",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#bebe35",
    fontSize: 24,
  },
});

export default App;
