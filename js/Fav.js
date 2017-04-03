
import React from 'react';

import { StyleSheet, Text, TextInput, TouchableNativeFeedback, View, Button, ListView, ScrollView, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import poems from './Poems'

import { observer } from 'mobx-react/native'
import Ionicons from 'react-native-vector-icons/Ionicons';


@observer
export default class List extends React.Component {
  ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.screenProps.updateAsync()
  }



  render() {

    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center', backgroundColor: "#12CC7B", padding: 10 }}>

              <Text style={{ fontSize: 20, color: '#fff' }}> প্রিয় কবিতা </Text>

        </View>
        {

          this.props.screenProps.favDataSet.length>0 ? (
            <ListView
              enableEmptySections={true}
              dataSource={this.ds.cloneWithRows(this.props.screenProps.favDataSet.slice())}
              renderRow={(rowData) => this._renderScene(rowData)}
            />
          ) : (<View style={{flex:.5,justifyContent:'center',alignItems:'center'}}>
             <Text style={{alignItems:'center',padding:10}}> এখনও প্রিয়তে কোন কবিতা রাখা হয়নি</Text>
               <Ionicons name="md-sad" size={200} color="#9C9C9E" />
          </View>
           )
        }
      </View>
    );
  }

  _renderScene(rowData) {
    return (
      <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('singleFav', { title: rowData.title, poem: rowData.poem })}>
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
