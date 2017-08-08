/* @flow */
import React, { Component } from 'react'
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
} from 'react-native'

import ActionView from './ActionView'
import Colors from './Colors'

type Props = {
    mode: typeof StateView.Mode,
    style: any,
    children: ?any,

    loadingView?: React.Component<any>,
    loadingTitle: string,

    placeholderView?: React.Component<any>,
    placeholderImageRes: number,
    placeholderTitle: string,
    placeholderBody?: string,
    placeholderButtonText?: string,
    placeholderButtonAction?: () => undefined,

    errorView?: React.Component<any>,
    errorImageRes: number,
    errorTitle: string,
    errorBody?: string,
    errorButtonText?: string,
    errorButtonAction?: () => undefined,
}

type State = {
    showLoading: boolean,
    showPlaceholder: boolean,
    showError: boolean,
    showContent: boolean
}

export default class StateView extends Component {

    static get Mode() {
        return {
            loading: '0',
            placeholder: '1',
            error: '2',
            content: '3',
            offline: '4',
        }
    }

    state: State
    makeState: (mode: typeof StateView.Mode) => State = (mode: typeof StateView.Mode) => {
        return {
            showLoading: mode === '0',
            showPlaceholder: mode === '1',
            showError: mode === '2',
            showContent: mode === '3',
        }
    }

    constructor(props: Props) {
        super(props)
        if (!Object.values(StateView.Mode).includes(this.props.mode)) {
            throw new Error(`Mode ${this.props.mode} for LCE View is undefined or invalid. Should be one of ${Object.keys(StateView.Mode)}`)
        }
        this.state = this.makeState(this.props.mode)
    }

    componentWillReceiveProps(nextProps: Props) {
        this.setState(this.makeState(nextProps.mode))
    }

    _loadingView = () => {
        if (!!this.props.loadingView) {
            return (
                <View style={styles.container}>
                    {this.props.loadingView}
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <ActivityIndicator color={Colors.tintColor}/>
                    <Text style={styles.placeholderText}>{this.props.loadingTitle}</Text>
                </View>
            )
        }
    }

    _errorView = () => {
        if (!!this.props.errorView) {
            return (
                <View style={styles.container}>
                    {this.props.errorView}
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <ActionView
                        imageRes={this.props.errorImageRes}
                        title={this.props.mode === StateView.Mode.offline ? I18n.t('lce_view_offline_title') : this.props.errorTitle}
                        body={this.props.mode === StateView.Mode.offline ? I18n.t('lce_view_offline_body') : this.props.errorBody}
                        buttonText={this.props.errorButtonText}
                        action={this.props.errorButtonAction}/>
                </View>
            )
        }
    }

    _placeholderView = () => {
        if (!!this.props.placeholderView) {
            return (
                <View style={styles.container}>
                    {this.props.placeholderView}
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <ActionView
                        imageRes={this.props.placeholderImageRes}
                        title={this.props.placeholderTitle}
                        body={this.props.placeholderBody}
                        buttonText={this.props.placeholderButtonText}
                        action={this.props.placeholderButtonAction}/>
                </View>
            )
        }
    }

    render() {
        switch (this.props.mode) {
            case StateView.Mode.loading:
                return this._loadingView()
            case StateView.Mode.error:
            case StateView.Mode.offline:
                return this._errorView()
            case StateView.Mode.placeholder:
                return this._placeholderView()
            case StateView.Mode.content:
                return (
                    <View style={this.props.style}>
                        { this.props.children }
                    </View>
                )
            default:
                throw new Error(`Mode ${this.props.mode} for LCE View is undefined or invalid. Should be one of ${Object.keys(StateView.Mode)}`)
        }
    }

}

StateView.defaultProps = {
    mode: StateView.Mode.loading
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white
    },
    placeholderText: {
        marginTop: 10,
        color: Colors.textSecondary,
    },
})
