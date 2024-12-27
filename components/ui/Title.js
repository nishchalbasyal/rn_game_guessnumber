import { StyleSheet, Text } from "react-native";
 
function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
     color: 'white',
    textAlign: "center",
    borderColor: 'white',
    borderWidth: 2,
    padding: 12,
  },
});
