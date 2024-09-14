import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: "white",
        alignItems: "center",
      },
      title: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: "bold",
      },
      subtitle: {
        fontSize: 16,
        marginBottom: 20,
        color: "#666",
      },
      radioGroup:{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }
      ,
      label: {
        fontSize: 16,
        marginBottom: 8,
        color: "#333",
      },
      field: {
        marginBottom: 20,
        width: '100%',
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
        backgroundColor: "#1877f2",
        borderColor: "white",
        borderWidth: 2,
        paddingVertical: 15,
        paddingHorizontal: 45,
        borderRadius: 25,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        alignItems: "center",
      },
      buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
      },

  });