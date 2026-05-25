import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function PruebaHome() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.prueba}>
        <Text>Hola-Carsonhkjhlkjhdsdfsxxxxxxxx</Text>
        <TextInput />
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Alamaula</Text>

        <Text style={styles.subtitle}>Iniciá sesión</Text>

        <TextInput placeholder="Correo electrónico" style={styles.input} />

        <TextInput
          placeholder="Contraseña"
          secureTextEntry
          style={styles.input}
        />

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>

        <Text style={styles.register}>¿No tenés cuenta? Registrate</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  prueba: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
    backgroundColor: "#F5F5F5",
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 40,
    color: "gray",
  },

  input: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,

    borderWidth: 1,
    borderColor: "#ddd",
  },

  button: {
    backgroundColor: "#E63946",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  register: {
    textAlign: "center",
    marginTop: 25,
    color: "gray",
  },
});
