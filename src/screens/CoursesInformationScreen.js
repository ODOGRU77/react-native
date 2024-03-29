import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Information from "../../components/Information";

export default function CoursesInformationScreen() {
  return (
    <ScrollView>
      <Information
        title="Angular"
        imageSource={require("../../assets/angular.jpg")}
        desc="Angular course"
      />
      <Information
        title="Bootstrap"
        imageSource={require("../../assets/bootstrap5.png")}
        desc="Bootstrap course"
      />
      <Information
        title="C"
        imageSource={require("../../assets/c.png")}
        desc="C course"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
