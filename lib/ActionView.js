//@flow
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native'
import Colors from './Colors'

export type Props = {
    imageRes: any,
    title: string,
    body: ?string,
    buttonText: ?string,
    action: ?() => {}
}

export default class ActionView extends Component {

    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={this.props.imageRes} style={styles.image} resizeMode="contain"/>
                <Text style={styles.title}>{this.props.title}</Text>
                { this.props.body && <Text style={styles.body}>{this.props.body}</Text> }
                {
                    this.props.buttonText && this.props.action &&
                    <TouchableOpacity onPress={this.props.action} style={styles.button}>
                        <Text style={styles.buttonText}>{this.props.buttonText}</Text>
                    </TouchableOpacity>
                }
            </View>
        )
    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        maxWidth: 80,
        maxHeight: 80,
    },

    title: {
        marginTop: 20,
        marginHorizontal: 20,
        fontSize: 17,
        color: Colors.black,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    body: {
        marginTop: 5,
        marginHorizontal: 20,
        fontSize: 14,
        color: Colors.black,
        textAlign: 'center',
    },

    button: {
        marginTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 2,
        backgroundColor: Colors.tintColor,
    },

    buttonText: {
        color: Colors.white,
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 'bold',
    },

})
