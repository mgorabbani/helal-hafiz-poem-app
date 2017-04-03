import React from 'react';
// import Animation from 'lottie-react-native';
import { Animated, StyleSheet, Text, TextInput, TouchableOpacity,TouchableNativeFeedback, View, ListView, ScrollView, Share, AsyncStorage, ToastAndroid } from 'react-native';
import { StackNavigator } from 'react-navigation';
import poems from './Poems'
import { observer } from 'mobx-react/native'

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

@observer
export default class Single extends React.Component {
    _shareMessage: Function;
    constructor(props) {
        super(props)
        this.state = {
            color: !this.props.screenProps.nightMode ? '#282C34' : '#9C9C9E',
            bgColor: this.props.screenProps.nightMode ? '#282C34' : '#fff',
            love: this.props.screenProps.isFav ? true : false,
            height: 250,
            size: Number(this.props.screenProps.size),
        };

        this._shareMessage = this._shareMessage.bind(this);
        this._setLove = this._setLove.bind(this);
    }

    static navigationOptions = {
        header: ({ state, setParams }) => ({
            style: {
                backgroundColor: '#12CC7B',
            },
            tintColor: '#fff',
            titleStyle: {
                color: '#fff',
                fontFamily: 'CharukolaUltraLight'
            }
        })
    };

    componentDidMount() {
        this.props.navigation.setParams({ share: this._shareMessage, setLove: this._setLove });
        this.props.screenProps.checkFavItem(this.props.navigation.state.params.title)
    }
    _setLove() {
        that = this
        if (this.props.screenProps.isFav) {
            this.props.screenProps.isFav = false
             this.props.screenProps.removeFav(that.props.navigation.state.params.title)
             ToastAndroid.show('কবিতা প্রিয় থেকে সরানো হয়েছে!', ToastAndroid.SHORT);
        } else {
            let ds = {
                title: that.props.navigation.state.params.title,
                poem: that.props.navigation.state.params.poem
            };
            this.props.screenProps.addtoFav(ds)
            ToastAndroid.show('কবিতা প্রিয়তে রাখা হয়েছে!', ToastAndroid.SHORT);
            this.props.screenProps.isFav = true
        }

    }

    _shareMessage() {
        Share.share({
            message: this.props.navigation.state.params.poem,
            url: 'http://melopixel.com/apps',
            title: this.props.navigation.state.params.title
        }, {
                dialogTitle: 'Share with Your Friends',
            })
            .then(this._showResult)
            .catch((error) => this.setState({ result: 'error: ' + error.message }));

    }

    render() {
        return (

            <View style={{ flex: 1, backgroundColor: this.state.bgColor, }}>
                <View style={{ paddingRight:10, flexDirection: 'row', backgroundColor: "#12CC7B",justifyContent:'space-between'}}>
                     <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{ paddingLeft:20,paddingRight:20,padding: 10}} >
                                <Ionicons name="ios-arrow-back" size={35} color="#FFFFFF" />
                        </TouchableOpacity>
                     <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={this._setLove} style={{ padding: 10 }} >
                            <Ionicons name={this.props.screenProps.isFav ? "md-heart" : "md-heart-outline"} size={35} color={this.props.screenProps.isFav ? "#ff316b" : "#D4FCEA"} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._shareMessage} style={{ padding: 10 }}>
                            <Ionicons name="md-share-alt" size={35} color="#FFFFFF" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: .85 }}>
                    <View style={{ alignItems: 'center' }}>

                                <Text style={{ color: this.state.color, fontSize: 24, paddingTop: 10 }}>{this.props.screenProps.fontSize} {this.props.navigation.state.params.title}</Text>


                    </View>

                    <ScrollView style={{ height: 20, padding: 10, paddingTop: 0 }}>

                                <TextInput
                                    editable={false}
                                    multiline={true}
                                    numberOfLines={20}
                                    onContentSizeChange={(event) => {
                                        this.setState({ height: event.nativeEvent.contentSize.height });
                                    }}

                                    style={[this.jewelStyle(), { height: Math.max(35, this.state.height) }]}
                                    value={this.props.navigation.state.params.poem}

                                />

                    </ScrollView>
                    <View style={{ flex: .15 }}>

                    </View>
                </View>
            </View>
        );
    }

    jewelStyle = function () {

        return {
            color: this.state.color,
            fontSize: this.state.size,
            lineHeight: 34,
            textAlign: 'center',
            backgroundColor: 'transparent'
        }
    }

}
