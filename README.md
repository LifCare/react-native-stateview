# react-native-stateview

A react native wrapper view to add `loading`, `content`, `error` and `placeholder` states to your component

<p align="center">
<img style="box-shadow: 0 2px 8px 2px rgba(0,0,0,.1)" src="art/demo.gif" alt="" width="300">
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

You can wrap your view in `StateView` to give states to it. The `StateView` has with 4 states: `loading`, `content`, `placeholder` and `error` but you can add more states if you prefer to it and provide custom views for each state.

Import react-native-keyboard-aware-scroll-view and wrap your content inside it:

```jsx
import StateView from 'react-native-stateview'
<StateView>
    <View>
        // ...
    </View>
</StateView>
```

StateView doesn't do much on it's own without the props

##API
###Props

| **Prop** | **Type** | **Description** |
|----------|----------|-----------------|
| `mode` | `` | |
| `style` | `` | |
| `children` | `` | |
| `loadingView` | `` | |
| `loadingTitle` | `` | |
| `placeholderView` | `` | |
| `placeholderImageRes` | `` | |
| `placeholderTitle` | `` | |
| `placeholderBody` | `` | |
| `placeholderButtonText` | `` | |
| `placeholderButtonAction` | `` | |
| `errorView` | `` | |
| `errorImageRes` | `` | |
| `errorTitle` | `` | |
| `errorBody` | `` | |
| `errorButtonText` | `` | |
| `errorButtonAction` | `` | |

## License

MIT.
