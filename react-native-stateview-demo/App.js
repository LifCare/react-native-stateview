import React from 'react';
import {
    StyleSheet,
    Button,
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import StateView from 'react-native-stateview'
import dishes from './dishes'


export default class App extends React.Component {

    _getRandomStateViewMode = () => {
        switch (Math.floor(Math.random() * 3)) {
            case 0:
                return StateView.Mode.content;
            case 1:
                return StateView.Mode.error;
            case 2:
            default:
                return StateView.Mode.placeholder;
        }
    };

    _renderItem = ({item}) => {
        return (
            <TouchableOpacity>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', padding: 15}}>
                    <Image source={item.icon} style={{width: 35, height: 35}} resizeMode="contain"/>
                    <Text style={{marginLeft: 10, fontSize: 15}}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    _handleRefresh = (defaultDelay = 1000) => {
        this.setState({refreshing: true});
        setTimeout(() => {
            this.setState({
                mode: this._getRandomStateViewMode(),
                refreshing: false
            });
        }, defaultDelay)
    };

    constructor(props) {
        super(props);
        this.state = {
            mode: StateView.Mode.content,
            refreshing: false,
            modes: [
                {id: 0, name: "Loading", mode: StateView.Mode.loading, selected: false},
                {id: 1, name: "Content", mode: StateView.Mode.content, selected: false},
                {id: 2, name: "Error", mode: StateView.Mode.error, selected: false},
                {id: 3, name: "Placeholder", mode: StateView.Mode.placeholder, selected: false}
            ]

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StateView
                    style={styles.container}
                    mode={this.state.mode}
                    loadingTitle="Loading dishes..."
                    placeholderImageRes={require("./icons/ic_pizza.png")}
                    placeholderTitle="We're all out!"
                    placeholderBody={`It looks like we all out of dishes.\nCome back tomorrow for a nice slice of pizza!`}
                    placeholderButtonText="How about now?"
                    placeholderButtonAction={() => this._handleRefresh(0)}
                    errorImageRes={require("./icons/ic_salt.png")}
                    errorTitle="Eh?! This shouldn't be happening"
                    errorBody="Don't get so salty. We're working on it!"
                    errorButtonText="FIX IT NOW!"
                    errorButtonAction={() => this._handleRefresh(0)}
                >
                    <FlatList
                        style={{flex: 1}}
                        data={dishes}
                        renderItem={this._renderItem}
                        refreshing={this.state.refreshing}
                        onRefresh={this._handleRefresh}
                    />


                </StateView>
                <View style={styles.actionsContainer}>
                    {
                        this.state.modes.map((item) => {
                            return <Text
                                key={item.id}
                                style={this.state.mode===item.mode?styles.selected:styles.normal}
                                onPress={() => this.setState({mode: item.mode})}>{item.name}</Text>
                        })
                    }
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    normal: {
        fontSize: 14,
        paddingBottom: 12,
        paddingTop: 12,
        marginLeft: 2,
        textAlign:"center",
        flex: 1,
        backgroundColor: "#fff",
        color: "#5430ec"
    },
    selected: {
        fontSize: 14,
        paddingBottom: 12,
        paddingTop: 12,
        marginLeft: 2,
        textAlign:"center",
        flex: 1,
        backgroundColor: "#5430ec",
        color: "#fff"
    }
});
