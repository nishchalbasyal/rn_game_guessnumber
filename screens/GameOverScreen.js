import { View, Image, StyleSheet,Text } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewgame}) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>

      <Text style={styles.summaryText}>
        Your phone needed &nbsp;
        <Text style={styles.highlight}>{roundsNumber}</Text>&nbsp;
        rounds to guess the number &nbsp;
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewgame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 24,
  },
  imageContainer: {
    width: 250,
    height: 250,
    borderRadius: 150,
    borderWidth: 3,
    overflow: "hidden",
    borderColor: Colors.primary800,
    margin: 36,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 20,
    marginBottom:24,
    textAlign: 'center'
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
   },
});
