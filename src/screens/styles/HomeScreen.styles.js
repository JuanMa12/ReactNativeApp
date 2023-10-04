import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  text2: {
    backgroundColor: "#323232",
    padding: 5,
  },
  button: {
    backgroundColor: "#1AB990",
    paddingTop: 8,
    paddingBottom: 8,
    borderWidth: 2,
    borderColor: "#323232",
    borderRadius: 15,
    marginBottom: 5,
    marginTop: 5,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
    minWidth: "50%",
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
    height: "50%",
  },
});

export { styles };
