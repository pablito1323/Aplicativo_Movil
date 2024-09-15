import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import RadioButton from "../components/RadioButton"; // Ajusta la ruta según la ubicación del archivo
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

// Componente principal RadioButtonGroup
export default function MediosDePago({  }) {
  const [selectedValue, setSelectedValue] = useState("Tarjeta");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");

  // Función para manejar el cambio de texto del número de tarjeta
  const handleCardNumberChange = (text) => {
    const digitsOnly = text.replace(/\D/g, "");
    const formattedText = digitsOnly.match(/.{1,4}/g)?.join(" ") || "";
    setCardNumber(formattedText.slice(0, 19));
  };

  // Función para manejar el cambio de texto de la fecha de caducidad
  const handleExpiryDateChange = (text) => {
    const digitsOnly = text.replace(/\D/g, "");
    const formattedText =
      digitsOnly.slice(0, 2) +
      (digitsOnly.length > 2 ? "/" + digitsOnly.slice(2, 4) : "");
    setExpiryDate(formattedText);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>MEDIOS DE PAGO</Text>
      <Text style={styles.subtitle}>Todos los campos son obligatorios</Text>

      <Text style={styles.label}>Seleccione el tipo de pago</Text>
      <View style={styles.radioGroup}>
        {["Tarjeta", "Transferencia", "Plin", "Yape"].map((type) => (
          <RadioButton
            key={type}
            label={type}
            value={type}
            selectedValue={selectedValue}
            onSelect={setSelectedValue}
          />
        ))}
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Número de tarjeta</Text>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="credit-card"
            size={24}
            color="#666"
            style={styles.icon}
          />
          <TextInput
            style={styles.inputWithIcon}
            value={cardNumber}
            onChangeText={handleCardNumberChange}
            placeholder="XXXX XXXX XXXX XXXX"
            keyboardType="numeric"
            maxLength={19}
          />
        </View>

        <View style={styles.row}>
          <View style={styles.halfWidth}>
            <Text style={styles.label}>Fecha de caducidad</Text>
            <TextInput
              style={styles.input}
              value={expiryDate}
              onChangeText={handleExpiryDateChange}
              placeholder="MM/AA"
              keyboardType="numeric"
              maxLength={5} // mm/aa tiene 5 caracteres
              placeholderTextColor="#999"
            />
          </View>
          <View style={styles.halfWidth}>
            <Text style={styles.label}>Código de seguridad</Text>
            <TextInput
              style={styles.input}
              value={cvv}
              onChangeText={setCvv}
              placeholder="CVV"
              keyboardType="numeric"
              maxLength={3} // tiene 3 caracteres
              placeholderTextColor="#999"
            />
          </View>
        </View>

        <Text style={styles.label}>País o Región</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={country}
            onValueChange={setCountry}
            style={styles.picker}
            mode="dropdown"
          >
            <Picker.Item label="SELECCIONE" value="" />
            {[
              "Argentina",
              "Perú",
              "Bolivia",
              "Brasil",
              "Chile",
              "Colombia",
              "Costa Rica",
              "Cuba",
              "Ecuador",
              "El Salvador",
              "Guatemala",
              "Honduras",
              "México",
              "Nicaragua",
              "Panamá",
              "Paraguay",
              "República Dominicana",
              "Uruguay",
              "Venezuela",
            ].map((countryName, index) => (
              <Picker.Item
                key={index}
                label={countryName}
                value={countryName.slice(0, 2).toUpperCase()}
              />
            ))}
          </Picker>
        </View>

        <Text style={styles.label}>Nombre completo del titular</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="JUAN MENDIVI LAZO"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>DNI</Text>
        <TextInput
          style={styles.input}
          value={dni}
          onChangeText={setDni}
          placeholder="DNI"
          keyboardType="numeric"
          placeholderTextColor="#999"
          maxLength={8}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Ejemplo@gmail.com"
          placeholderTextColor="#999"
          keyboardType="email-address"
        />
      </View>

      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>GUARDAR</Text>
        </TouchableOpacity>

    </ScrollView>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "white",
    alignItems: "center",
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
    marginBottom: 8,
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
    backgroundColor: '#2196F3',
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
});
