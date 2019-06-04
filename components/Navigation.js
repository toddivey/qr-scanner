import React from "react";
import { Container, Text, Button } from "native-base";
import { Grid, Row } from "react-native-easy-grid";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Constants } from "expo";

//First Screen Component
class ScannerScreen extends React.Component {
  static navigationOptions = {
    header: null //hide the header bar
  };
  render() {
    return (
      <Container style={{ marginTop: Constants.statusBarHeight }}>
        <Grid
          style={{
            alignItems: "center"
          }}
        >
          <Row>
            <Text>Scanner Screen</Text>
          </Row>
          <Row>
            <Button onPress={() => this.props.navigation.navigate("History")}>
              <Text>History</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate("Result")}>
              <Text>Result</Text>
            </Button>
          </Row>
        </Grid>
      </Container>
    );
  }
}

//Second Screen Component
class HistoryScreen extends React.Component {
  static navigationOptions = {
    title: "History" //set the header title
  };
  render() {
    return (
      <Container style={{ marginTop: Constants.statusBarHeight }}>
        <Grid
          style={{
            alignItems: "center"
          }}
        >
          <Row>
            <Text>History Screen</Text>
          </Row>
        </Grid>
      </Container>
    );
  }
}

//Third Screen Component
class ResultScreen extends React.Component {
  static navigationOptions = {
    title: "Scan Detail" //set the header title
  };
  render() {
    return (
      <Container style={{ marginTop: Constants.statusBarHeight }}>
        <Grid
          style={{
            alignItems: "center"
          }}
        >
          <Row>
            <Text>Result Screen</Text>
          </Row>
        </Grid>
      </Container>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Scanner: {
      screen: ScannerScreen
    },
    History: {
      screen: HistoryScreen
    },
    Result: {
      screen: ResultScreen
    }
  },
  {
    initialRouteName: "Scanner" //Default screen name
  }
);

export default createAppContainer(RootStack);
