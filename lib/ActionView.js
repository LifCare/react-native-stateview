import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'

export default class ActionView extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.imageRes &&
                    <Image
                        source={this.props.imageRes}
                        style={[styles.image, this.props.imageStyle]}
                        resizeMode="contain"/>

                }
                <Text style={[styles.title, this.props.titleStyle]}>{this.props.title}</Text>
                {this.props.body && <Text style={[styles.body, this.props.bodyStyle]}>{this.props.body}</Text>}
                {
                    !!this.props.buttonText && !!this.props.action &&
                    <TouchableOpacity onPress={this.props.action} style={[
                        styles.button,
                        {backgroundColor: this.props.color},
                        this.props.buttonStyle
                    ]}>
                        <Text style={[styles.buttonText, this.props.buttonTextStyle]}>{this.props.buttonText}</Text>
                    </TouchableOpacity>
                }
            </View>
        )
    }

}

ActionView.propTypes = {
    color: PropTypes.string,
    imageRes: PropTypes.number.isRequired,
    title: PropTypes.string,
    body: PropTypes.string,
    buttonText: PropTypes.string,
    action: PropTypes.func,
    imageStyle: PropTypes.object,
    titleStyle: PropTypes.object,
    bodyStyle: PropTypes.object,
    buttonStyle: PropTypes.object,
    buttonTextStyle: PropTypes.object,
}

ActionView.defaultProps = {
    color: '#000',
    title: '',
    body: '',
    buttonText: '',
    action: () => {
    },
    imageStyle: {},
    titleStyle: {},
    bodyStyle: {},
    buttonStyle: {},
    buttonTextStyle: {},
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
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
    },

    body: {
        marginTop: 5,
        marginHorizontal: 20,
        fontSize: 14,
        color: '#000',
        textAlign: 'center',
    },

    button: {
        marginTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 2,
        backgroundColor: '#000',
    },

    buttonText: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 'bold',
    },

})
