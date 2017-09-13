import React, {Component} from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';

import ActionView from './ActionView';
import PropTypes from 'prop-types';

export default class StateView extends Component {

    static get State() {
        return {
            loading: '0',
            placeholder: '1',
            error: '2',
            content: '3',
        }
    }

    _makeState = (state) => {
        console.log('state', state);
        return {
            showLoading: state === '0',
            showPlaceholder: state === '1',
            showError: state === '2',
            showContent: state === '3',
        }
    };

    constructor(props) {
        super(props);
        if (!Object.values(StateView.State).includes(this.props.state)) {
            throw new Error(`State ${this.props.state} for StateView is undefined or invalid. Should be one of ${Object.keys(StateView.State)}`)
        }
        this.state = this._makeState(this.props.state)
    }

    componentWillReceiveProps(nextProps) {
        this.setState(this._makeState(nextProps.state))
    }

    _loadingView = () => {
        if (!!this.props.loadingView) {
            return (
                <View style={[styles.container, this.props.containerStyle]}>
                    {this.props.loadingView}
                </View>
            )
        } else {
            return (
                <View style={[styles.container, this.props.containerStyle]}>
                    <ActivityIndicator
                        color={this.props.color}
                        style={this.props.loadingLoaderStyle}/>
                    <Text style={[
                        styles.placeholderText,
                        this.props.titleStyle,
                        this.props.loadingTitleStyle
                    ]}>
                        {this.props.loadingTitle}
                    </Text>
                </View>
            )
        }
    };

    _errorView = () => {
        if (!!this.props.errorView) {
            return (
                <View style={[styles.container, this.props.containerStyle]}>
                    {this.props.errorView}
                </View>
            )
        } else {
            return (
                <View style={[styles.container, this.props.containerStyle]}>
                    <ActionView
                        color={this.props.color}
                        imageRes={this.props.errorImageRes}
                        title={this.props.errorTitle}
                        body={this.props.errorBody}
                        buttonText={this.props.errorButtonText}
                        action={this.props.errorButtonAction}
                        imageStyle={{...this.props.imageStyle, ...this.props.errorImageStyle}}
                        titleStyle={{...this.props.titleStyle, ...this.props.errorTitleStyle}}
                        bodyStyle={{...this.props.bodyStyle, ...this.props.errorBodyStyle}}
                        buttonStyle={{...this.props.buttonStyle, ...this.props.errorButtonStyle}}
                        buttonTextStyle={{...this.props.buttonTextStyle, ...this.props.errorButtonTextStyle}}
                    />
                </View>
            )
        }
    };

    _placeholderView = () => {
        if (!!this.props.placeholderView) {
            return (
                <View style={[styles.container, this.props.containerStyle]}>
                    {this.props.placeholderView}
                </View>
            )
        } else {
            return (
                <View style={[styles.container, this.props.containerStyle]}>
                    <ActionView
                        color={this.props.color}
                        imageRes={this.props.placeholderImageRes}
                        title={this.props.placeholderTitle}
                        body={this.props.placeholderBody}
                        buttonText={this.props.placeholderButtonText}
                        action={this.props.placeholderButtonAction}
                        imageStyle={{...this.props.imageStyle, ...this.props.placeholderImageStyle}}
                        titleStyle={{...this.props.titleStyle, ...this.props.placeholderTitleStyle}}
                        bodyStyle={{...this.props.bodyStyle, ...this.props.placeholderBodyStyle}}
                        buttonStyle={{...this.props.buttonStyle, ...this.props.placeholderButtonStyle}}
                        buttonTextStyle={{...this.props.buttonTextStyle, ...this.props.placeholderButtonTextStyle}}
                    />
                </View>
            )
        }
    };

    render() {
        switch (this.props.state) {
            case StateView.State.loading:
                return this._loadingView();
            case StateView.State.error:
            case StateView.State.offline:
                return this._errorView();
            case StateView.State.placeholder:
                return this._placeholderView();
            case StateView.State.content:
                return (
                    <View style={this.props.style}>
                        {this.props.children}
                    </View>
                );
            default:
                throw new Error(`State ${this.props.state} for StateView is invalid. Should be one of ${Object.keys(StateView.State)}`);
        }
    }

}

StateView.propTypes = {
    containerStyle: PropTypes.object,
    state: PropTypes.oneOf([
        StateView.State.loading,
        StateView.State.placeholder,
        StateView.State.error,
        StateView.State.content
    ]),

    color: PropTypes.string,
    imageStyle: PropTypes.object,
    titleStyle: PropTypes.object,
    bodyStyle: PropTypes.object,
    buttonStyle: PropTypes.object,
    buttonTextStyle: PropTypes.object,

    loadingView: PropTypes.element,
    loadingTitle: PropTypes.string,
    loadingTitleStyle: PropTypes.object,
    loadingLoaderStyle: PropTypes.object,

    placeholderView: PropTypes.element,
    placeholderImageRes: PropTypes.number.isRequired,
    placeholderTitle: PropTypes.string,
    placeholderBody: PropTypes.string,
    placeholderButtonText: PropTypes.string,
    placeholderButtonAction: PropTypes.func,
    placeholderImageStyle: PropTypes.object,
    placeholderTitleStyle: PropTypes.object,
    placeholderBodyStyle: PropTypes.object,
    placeholderButtonStyle: PropTypes.object,
    placeholderButtonTextStyle: PropTypes.object,


    errorView: PropTypes.element,
    errorImageRes: PropTypes.number.isRequired,
    errorTitle: PropTypes.string,
    errorBody: PropTypes.string,
    errorButtonText: PropTypes.string,
    errorButtonAction: PropTypes.func,
    errorImageStyle: PropTypes.object,
    errorTitleStyle: PropTypes.object,
    errorBodyStyle: PropTypes.object,
    errorButtonStyle: PropTypes.object,
    errorButtonTextStyle: PropTypes.object,
};

StateView.defaultProps = {
    containerStyle: {},
    state: StateView.State.loading,

    color: '#000',
    imageStyle: {},
    titleStyle: {},
    bodyStyle: {},
    buttonStyle: {},
    buttonTextStyle: {},

    loadingView: undefined,
    loadingTitle: '',
    loadingTitleStyle: {},
    loadingLoaderStyle: {},

    placeholderView: undefined,
    placeholderTitle: '',
    placeholderBody: '',
    placeholderButtonText: '',
    placeholderButtonAction: () => {},
    placeholderImageStyle: {},
    placeholderTitleStyle: {},
    placeholderBodyStyle: {},
    placeholderButtonStyle: {},
    placeholderButtonTextStyle: {},

    errorView: undefined,
    errorTitle: '',
    errorBody: '',
    errorButtonText: '',
    errorButtonAction: () => {},
    errorImageStyle: {},
    errorTitleStyle: {},
    errorBodyStyle: {},
    errorButtonStyle: {},
    errorButtonTextStyle: {},
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    placeholderText: {
        marginTop: 10,
        color: '#999',
    },
});
