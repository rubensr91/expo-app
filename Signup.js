import React from "react";
import { Text, View } from "react-native";

const SignupScreen = () => {
  return (
    <View>
      <Text>Profile Screen</Text>

      <Button title="Register" onPress={() => Actions.signup()}>
        <Text style={styles.signupLinkText}>Don't you have an account?</Text>
      </Button>
    </View>
  );
};

export default SignupScreen;
