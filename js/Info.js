
import React from 'react';
import { StyleSheet, Text, View,  TouchableNativeFeedback, Switch, Picker, Modal, TouchableHighlight,Linking } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {observer} from 'mobx-react/native'
@observer
export default class Info extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      falseSwitchIsOn: false,
      size: 13,
      modalVisible: false
    }

  }
  changeFontSize(s) {
    this.setState({ size: s })
    this.props.screenProps.changeFontSize(s)

  }
toggleNightMode () {
    this.setState({ falseSwitchIsOn: !this.state.falseSwitchIsOn })
    this.props.screenProps.toggleNightMode()
}
  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor:'#fff'}}>
          <Text style={{ color: '#0D8F4F' , padding: 20 }}>Preference and Settings</Text>




          <TouchableNativeFeedback onPress={() => this.toggleNightMode()} >
            <View style={{  padding: 20 , flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#f7f7f7' }}>
              <View style={{ flexDirection: 'row' }}>
                <Entypo name="moon" size={32} color='#0D8F4F' />
                <View>
                  <View style={{ flexDirection: 'column', alignItems: 'stretch' }}>
                    <Text style={{ marginLeft: 15, fontSize:16 }}>Night Mode</Text>
                    <Text style={{ fontWeight: '400', color: '#696969',fontSize:14,  marginLeft: 15 }}>Text readibility at night</Text>
                  </View>
                </View>
              </View>

              <Switch
                onValueChange={(value) => this.toggleNightMode()}
                style={{ alignItems: 'flex-end' }}
                value={this.state.falseSwitchIsOn} />
            </View>
          </TouchableNativeFeedback>

<TouchableNativeFeedback>
            <View style={{  padding: 20 , flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#f7f7f7' }}>
              <View style={{ flexDirection: 'row' }}>
                <Octicons name="text-size" size={32} color='#0D8F4F' />
                <View>
                  <View style={{ flexDirection: 'column', alignItems: 'stretch',marginRight:100 }}>
                    <Text style={{ marginLeft: 15, fontSize:18  }}>Font Size</Text>
                    <Text style={{ fontWeight: '400', color: '#696969',fontSize:14 , marginLeft: 15 }}>Text readibility at night</Text>
                  </View>
                </View>
              </View>
              <View style={{backgroundColor:'red'}}>
                <Picker style={{ color:'#0D8F4F', backgroundColor: '#fff',width:100}}
                selectedValue={this.state.size}
                onValueChange={(s) => this.changeFontSize(s)}>
                <Picker.Item label="15" value="15" />
                <Picker.Item label="17" value="17" />
                <Picker.Item label="19" value="19" />
              </Picker>
              </View>
            </View>
</TouchableNativeFeedback>
        </View>

        <View style={{ borderTopColor:'#d9d9d9',borderTopWidth: 15,backgroundColor:'#fff'}}>
          <Text style={{ color: '#0D8F4F', padding: 20  }}>Other</Text>
          < TouchableNativeFeedback onPress={() => this.props.navigation.navigate('about')} >
            <View style={{  padding: 20 , flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#f7f7f7' }}>
              <View style={{ flexDirection: 'row' }}>
                <Entypo name="info" size={32} color='#0D8F4F' />
                <View>
                  <View style={{ flexDirection: 'column', alignItems: 'stretch' }}>
                    <Text style={{ marginLeft: 15, fontSize:18 }}>About Apps & Privacy Policy</Text>
                  </View>
                </View>
              </View>

               <Ionicons name="ios-arrow-forward-outline" size={32} color='#0D8F4F' />
            </View>
          </ TouchableNativeFeedback>
          < TouchableNativeFeedback onPress={() => Linking.openURL("mailto:mgorabbani@gmail.com?subject=From Helal Hafiz\'s app")} >
            <View style={{  padding: 20 , flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#f7f7f7' }}>
              <View style={{ flexDirection: 'row' }}>
                <Entypo name="chat" size={32} color='#0D8F4F' />
                <View>
                  <View style={{ flexDirection: 'column', alignItems: 'stretch' }}>
                    <Text style={{ marginLeft: 15, fontSize:18}}>Contact with us</Text>
                  </View>
                </View>
              </View>

               <Ionicons name="ios-arrow-forward-outline" size={32} color='#0D8F4F' />
            </View>
          </ TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
