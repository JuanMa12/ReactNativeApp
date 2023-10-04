import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Modal, Pressable, Button } from "react-native";

import { styles } from "./src/screens/styles/HomeScreen.styles";

export default function App() {
  //const [stateLoading, setStateLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.text2]}>
        Open up App.js to start working on your app! Test2
      </Text>
      <StatusBar style="auto" />
      <Text style={[styles.text, styles.text2]}>Test2</Text>

      <Pressable style={[styles.button]} onPress={() => setModalVisible(true)}>
        <Text style={styles.textButton}>Show Modal</Text>
      </Pressable>

      <Button
        style={[styles.button]}
        onPress={() => setModalVisible(true)}
        title="Show Modal Button"
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.mt20]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textButton}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
