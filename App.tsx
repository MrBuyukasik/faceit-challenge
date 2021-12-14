import React from "react";
import { StyleSheet } from "react-native";
import Wrappers from "./src/Wrappers";
import Routes from "./src/routes/Routes";

export default function App() {
  return (
    <Wrappers>
      <Routes />
    </Wrappers>
  );
}
