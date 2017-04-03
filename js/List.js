
import React from 'react';
// <StatusBar
// backgroundColor="#18A867"
// barStyle="light-content"
// />
import { StyleSheet, StatusBar,Text, TextInput, TouchableNativeFeedback, View, Button, ListView, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import poems from './Poems'




export default class List extends React.Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(poems),
      fontLoaded: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
        backgroundColor="#18A867"
        barStyle="light-content"
        />
        <View style={{ alignItems: 'center', backgroundColor: "#12CC7B", padding: 10 }}>

            <Text style={{ fontSize: 20, color: '#fff',  }}> কবিতা </Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this._renderScene(rowData)}
        />
      </View>
    )
  }

  _renderScene(rowData) {
    return (
      <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('single', {  title: rowData.title, poem: rowData.poem })}>
        <View style={{ alignItems: 'center', paddingTop: 20, paddingBottom: 20, flexDirection: 'row', borderBottomWidth: 1, borderColor: '#f7f7f7' }}>

              <Text style={{ marginLeft: 15, fontSize: 20 }}>{rowData.title}</Text>
        </View>
      </TouchableNativeFeedback>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
