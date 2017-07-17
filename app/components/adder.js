import React, { Component } from "react";
import {
  StyleSheet,
  ListView,
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";

export default class Adder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };
  }
 _add(){
   this.props.add(this.state.username)
 }
  render() {
    
    console.log("render adder");
    const {adder,add}=this.props;
    return (
      <View style={styles.rowContainter}>
        <TextInput
          style={{ flex: 8 }}
          placeholder="Name"
          onChangeText={text => {
            this.setState({ username: text });
          }}
        />
        <TouchableOpacity style={styles.button} onPress={()=>this._add()} >
          <Text>Add</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 2,
    width: 50,
    height: 30,
    padding: 10,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    margin: 3,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d6d7da",
  },
  rowContainter: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    margin: 6,
    borderColor: "#d6d7da",
    justifyContent: "space-between"
  },
  textInputUser: {
    borderRadius: 8,
    borderWidth: 1,
    margin: 6,
    borderColor: "#d6d7da"
  }
});
