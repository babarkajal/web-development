### Redux

Redux is a store that handles applications’ global data. So what does mean by global data?
In any application, there may be multiple components engaged.

let's consider any e-commerce application. It may have components like a cart, products, wishlist, etc. Whatever data is in the cart will also be present in the product component. TO share data between components, states and props are used. But in bigger applications. passing props becomes a challenging task.

To access this data, it must be stored somewhere globally. For this purpose, the store can be useful, and to use store redux library is used with react.

To manage the store, redux provides some methods like dispatch, reducers and APIs also.

Some core concepts in redux

1.  What is the Redux Store?
    The global state of an application is stored in an object tree within a single store
    The Redux store is the main, central bucket that stores all the states of an application.
    It should be considered and maintained as a single source of truth for the state of the application
    If the store is provided to the App.js as shown in the code snippet below, then all its children (children components of App.js) can also access the state of the application from the store. This makes it act as a global state.

         // src/index.js
         import React from 'react'
         import ReactDOM from 'react-dom'
         import { Provider } from 'react-redux'

         import { App } from './App'
         import createStore from './createReduxStore'

         const store = createStore()

         const root = ReactDOM.createRoot(document.getElementById('root'))
         root.render(
         <Provider store={store}>
         <App />
         </Provider>
         )

2.  What is action in redux?

- store in redux is immutable. We cannot directly change the store
- To modify it, actions and reducers are used
- An action is a plain object which defined what to update inside the store

        {
        type: “type_of_action”
        payload: Data
        }

- Action objects must contain a type that defines the action type. For example,
  {
  type:”product/add-product”
  payload: data
  }

- This action is passed to the store dispatch method

        store.dispatch({
        type:”product/add-product”
        payload: data
        })

- After dispatching an action, it gets passed to the reducer

3.  Reducer:
    Reducers are responsible for updating the store
    They return a new object which is then assigned to store
    Reducers are passed to the store while creating it
    The reducer takes state and action as parameters and based on the previous state and action, it returns a new state

         const initialCartState = {
         noOfItemInCart: 0,
         cart: []
         }

         const cartReducer = (state = initialCartState, action) => {

        switch (action.type) {
        case "product/add-product":
        return {
        ...state,
        noOfItemInCart: state.noOfItemInCart + 1,
        cart : [
        ...state.cart,
        action.payload
        ]
        }
        default:
        return state
        }

        }

A reducer somewhere looks like this
We can handle as many cases as we want. But convention wise one reducer must contain one feature-related case. As for product management, there should be a separate reducer, for Users management, the user's reducer should be separate

4.  Create Store
    Store is created using reducers
    There are other parameters too
    previous state
    enhancer
    to create store createStore function is used

         const store = createStore(reducer)

store has some methods: dispatch, subscribe, getState
dispatch used to emit action
subscribe used to subscribe to the store updates. Whenever any action is dispatched then this method get called
getState is used to take latest store values

Let’s create one application that makes use of all these concepts

Create app and install dependencies
npx create-react-app counter
npm install redux react-redux

Inside app.js

        import {store} from “./index.js”;
        export default function App(props){
        const count = useSelector(state=>state.count)
        render() {
        return (

        <div className="App">
        <button
        onClick={() => {
        store.dispatch({type:”increment”});
        }} >
        Click me
        </button>
        <p>{count}</p>
        </div>
        );
        }
        }

reducers.js file

        const initialState={
        count: 0
        }
        export default const rootReducer=(state=intialState, action)=>{
        switch(action.type) {
        case “increment”:
        return {
        …state,
        count: state.count + 1
        }
        default: return state
        }
        }

Inside index.js

        import React from 'react'
        import { render } from 'react-dom'
        import { Provider } from 'react-redux'
        import { createStore } from 'redux'
        import rootReducer from './reducers'
        import App from './components/App'

        export const store = createStore(rootReducer)

        render(
        <Provider store={store}>
        <App />
        </Provider>,
        document.getElementById('root')
        )

Let’s understand the flow:
As we know that when we dispatch any action that invokes the reducer function
When we click ‘Click me’ Button it dispatches the action having type ‘increment’.
it invokes rootReducer and finds case matching with type of action
Matching case returns new state
As we have used useSelector() hook inside app component which works as subscriber. Whenever there is a change is store this will re-render the component
