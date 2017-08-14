# react-native-stateview

A react native wrapper view to add `loading`, `content`, `error` and `placeholder` states to your component

<p align="center">
<img style="box-shadow: 0 2px 8px 2px rgba(0,0,0,.1)" src="art/demo.gif" alt="" width="300">
</p>

###Expo
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

##API
###Props

| **Prop** | **Type** | **Defaults** | **Description** |
|----------|----------|--------------|-----------------|
| `mode` | `string` | `StateView.Mode.content` | The mode of StateView is in. One of `loading`, `content`, `error` and `placeholder` |
| `style` | `object` | - | Style of content view |
| `loadingView` | `object` | `undefined` | A custom loading view |
| `loadingTitle` | `string` | `""` | The title for the default loading view |
| `placeholderView` | `` | `undefined` | A custom placeholder view |
| `placeholderImageRes` | `number` | `undefined` | Image resource id of the placeholder view image |
| `placeholderTitle` | `string` | `""` | Title text of the placeholder view |
| `placeholderBody` | `string` | `""` | Body text of the placeholder view |
| `placeholderButtonText` | `string` | `undefined` | Action button text of the placeholder view |
| `placeholderButtonAction` | `() => undefined` | `undefined` | Function that is executed when the placeholder view button is clicked. The button is not rendered if this is `null` or `undefined` |
| `errorView` | `object` | `undefined` | A custom error view |
| `errorImageRes` | `number` | `undefined` | Image resource id of the error view image |
| `errorTitle` | `string` | `""` | Title text of the error view |
| `errorBody` | `string` | `""` | Body text of the error view |
| `errorButtonText` | `string` | `undefined` | Action button text of the error view |
| `errorButtonAction` | `() => undefined` | `undefined` | Function that is executed when the error view button is clicked. The button is not rendered if this is `null` or `undefined` |

## License

MIT.
