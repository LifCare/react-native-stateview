# react-native-stateview

A react native wrapper view to add `loading`, `content`, `error` and `placeholder` states to your component

<p align="center">
    <img style="box-shadow: 0 2px 8px 2px rgba(0,0,0,.1)" src="art/demo_ios.gif" alt="" width="300">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img style="box-shadow: 0 2px 8px 2px rgba(0,0,0,.1)" src="art/demo_android.gif" alt="" width="300">
</p>

### Expo

Try it out on expo. Just download the [expo](https://expo.io/) app, scan code and you are good to go.

<p align="center">
<img style="box-shadow: 0 2px 12px 4px rgba(0,0,0,.1)" src="art/qr.png" alt="" width="150">
</p>

## Installation

Using npm:

```shell
npm i --save react-native-stateview
```

Using yarn:

```shell
yarn add react-native-stateview
```

##Usage

You can wrap your view in `StateView` to give states to it. The `StateView` has with 4 states: `loading`, `content`, `placeholder` and `error`.

Import react-native-keyboard-aware-scroll-view and wrap your content inside it:

```jsx
import StateView from 'react-native-stateview'
<StateView>
    <View>
        // ...
    </View>
</StateView>
```

There are some props which you can use to configure the `StateView`, as given below in API section, but all of them are *optional*.

## API

### Props

| **Prop** | **Type** | **Defaults** | **Required** | **Description** |
|----------|----------|--------------|--------------|-----------------|
| `containerStyle` | `PropTypes.object` | `{}` |  | Style of container view |
| `state` | `PropTypes.oneOf([StateView.State.loading, StateView.State.placeholder, StateView.State.error, StateView.State.content])` | `StateView.State.loading` |  | The state of StateView. |
| `color` | `PropTypes.string` | `'#000'` |  | A general tint color for all views. |
| `imageStyle` | `PropTypes.object` | `{}` |  | Styles for image of placeholder and error view. Overrides the default styles. |
| `titleStyle` | `PropTypes.object` | `{}` |  | Styles for title of loading, placeholder and error view. Overrides the default styles. |
| `bodyStyle` | `PropTypes.object` | `{}` |  | Styles for body of placeholder and error view. Overrides the default styles. |
| `buttonStyle` | `PropTypes.object` | `{}` |  | Styles for button of placeholder and error view. Overrides the default styles. |
| `buttonTextStyle` | `PropTypes.object` | `{}` |  | Styles for button text of placeholder and error view. Overrides the default styles. |
| `loadingView` | `PropTypes.element` | `undefined` |  | A custom loading view. |
| `loadingTitle` | `PropTypes.string` | `''` |  | The title for the default loading view. |
| `loadingTitleStyle` | `PropTypes.object` | `{}` |  | Styles for title of loading view. Overrides the `titleStyle` and default styles. |
| `placeholderView` | `PropTypes.element` | `undefined` |  | A custom placeholder view |
| `placeholderImageRes` | `PropTypes.number.isRequirednumber` | NA | Yes | Image resource id of the placeholder view image |
| `placeholderTitle` | `PropTypes.string` | `''` |  | Title text of the placeholder view |
| `placeholderBody` | `PropTypes.string` | `''` |  | Body text of the placeholder view |
| `placeholderButtonText` | `PropTypes.string` | `''` |  | Action button text of the placeholder view |
| `placeholderButtonAction` | `PropTypes.func` | `() => {}` |  | Function that is executed when the placeholder view button is clicked. The button is not rendered if this is `null` or `undefined` |
| `placeholderImageStyle` | `PropTypes.object` | `{}` |  | Styles for image of placeholder view. Overrides the `imageStyle` and default styles. |
| `placeholderTitleStyle` | `PropTypes.object` | `{}` |  | Styles for title of placeholder view. Overrides the `titleStyle` and default styles. |
| `placeholderBodyStyle` | `PropTypes.object` | `{}` |  | Styles for body of placeholder view. Overrides the `bodyStyle` and default styles. |
| `placeholderButtonStyle` | `PropTypes.object` | `{}` |  | Styles for button of placeholder view. Overrides the `buttonStyle` and default styles. |
| `placeholderButtonTextStyle` | `PropTypes.object` | `{}` |  | Styles for button text of placeholder view. Overrides the `buttonTextStyle` and default styles. |
| `errorView` | `PropTypes.element` | `undefined` |  | A custom error view |
| `errorImageRes` | `PropTypes.number.isRequirednumber` | NA | Yes | Image resource id of the error view image |
| `errorTitle` | `PropTypes.string` | `''` |  | Title text of the error view |
| `errorBody` | `PropTypes.string` | `''` |  | Body text of the error view |
| `errorButtonText` | `PropTypes.string` | `''` |  | Action button text of the error view |
| `errorButtonAction` | `PropTypes.func` | `() => {}` |  | Function that is executed when the error view button is clicked. The button is not rendered if this is `null` or `undefined` |
| `errorImageStyle` | `PropTypes.object` | `{}` |  | Styles for image of error view. Overrides the `imageStyle` and default styles. |
| `errorTitleStyle` | `PropTypes.object` | `{}` |  | Styles for title of error view. Overrides the `titleStyle` and default styles. |
| `errorBodyStyle` | `PropTypes.object` | `{}` |  | Styles for body of error view. Overrides the `bodyStyle` and default styles. |
| `errorButtonStyle` | `PropTypes.object` | `{}` |  | Styles for button of error view. Overrides the `buttonStyle` and default styles. |
| `errorButtonTextStyle` | `PropTypes.object` | `{}` |  | Styles for button text of error view. Overrides the `buttonTextStyle` and default styles. |

## License

MIT.
