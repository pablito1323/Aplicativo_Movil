import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
     flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    marginTop: -20,
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "#666",
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  field: {
    marginBottom: -5,
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    marginBottom: 10,
  },
  inputWithIcon: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 16,
    borderRadius: 6,
    marginBottom: 20,
  },
  icon: {
    padding: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    marginBottom: 20,
    backgroundColor: "white",
  },
  picker: {
    height: 50,
    width: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  halfWidth: {
    width: "48%",
  },
  button: {
    backgroundColor: '#0f6189',
    padding: 15,
    alignItems: 'center',
    margin: 15,
    borderRadius: 5,
     width: '100%'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rectangle: {
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
    marginBottom:10,
    marginTop:-50,
  },
  rectangleText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  containerC: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: 'white',
  },
  darkOptionContainer: {
    backgroundColor: '#444',
  },
 
  darkOptionText: {
    color: 'white',
  },
  inputC: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 5,
    width: 50,
    textAlign: 'center',
  },
  buttonC: {
    backgroundColor: '#0f6189',
    padding: 15,
    alignItems: 'center',
    margin: 15,
    borderRadius: 5,
  },
});
