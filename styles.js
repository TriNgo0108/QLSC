import { StyleSheet, Dimensions } from "react-native";
const DeviceHieht = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    width: 400,
    display: "flex",
    flexDirection: "column",
  },
  input: {
    borderWidth: 2,
    borderColor: "#ff9933",
    borderRadius: 4,
    marginTop: 10,
    marginRight: 30,
    marginLeft: 30,
    height: 40,
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 5,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#ff9933",
    elevation: 3,
    borderRadius: 4,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    height: 40,
    justifyContent: "center",
  },
  button_text: {
    color: "#fff",
    fontSize: 20,
    alignSelf: "center",
  },
  iconButton: {
    width: 44,
    height: 60,
    color: "#ff9933",
  },
  main: {
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  chooseDate: {
    borderWidth: 2,
    borderColor: "#ff9933",
    borderRadius: 4,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 20,
    paddingRight: 10,
  },

  header: {
    marginLeft: 20,
    marginBottom: 20,
    height: 50,
    width: "85%",
  },
  modal: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#000000AA",
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#fff",
    maxHeight: DeviceHieht * 0.8,
  },
  cusotmDatePicker: {
    margin: 10,
  },
  search_button: {
    padding: 10,
  },

  cancel_button: {
    backgroundColor: "transparent",
    elevation: 0,
    borderRadius: 0,
  },
  cancel_button_text: {
    color: "red",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  titile: {
    marginTop: 10,
    fontSize: 24,
    justifyContent: "center",
    alignSelf: "center",
  },

  normal_text: {
    fontSize: 18,
    marginLeft: 5,
    marginBottom: 10,
  },
  FloatingAction: {
    position: "absolute",
    bottom:500,
    right: 1,
  },
  tabBarLabel: {
    fontSize: 12,
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  row_item: {
    display: "flex",
    flexDirection: "row",
  },
  item_text: {
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 10,
  },
  item: {
    marginRight: 5,
    marginLeft: 5,
    paddingTop: 10,
    borderColor: "#ff9933",
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 10,
    backgroundColor: "#fff",
  },
  flatList: {
    backgroundColor: "#f2f2f2",
    marginBottom:20,
  },
  shadow: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    marginBottom: 140,
    elevation: 4,
  },
  bold: {
    fontWeight: "bold",
  },
  incidentObject: {
    color: "#ff9933",
  },
  noMarignLeft: {
    marginLeft: 0,
  },
  verticalBar: {
    marginLeft: 10,
    marginRight: 10,
  },
  time: {
    fontStyle: "italic",
  },
  verticalOption: {
    textAlign:'right'

  },
  spaceBetwween:{
    justifyContent:'space-between'
  }
});
export default styles;
