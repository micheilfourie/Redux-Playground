// const reducer = (state = 5) => {
//     return state;
// }

// // Redux methods are available from a Redux object
// // For example: Redux.createStore()
// // Define the store here:

// const store = Redux.createStore(reducer);

// const store = Redux.createStore(
//     (state = 5) => state
// );

// // Change code below this line
// const currentState = store.getState()

// // Define an action here:
// const action = { type: "LOGIN" };

// const action = {
//     type: 'LOGIN'
// }
// // Define an action creator here:

// const actionCreator = () => action;

// const store = Redux.createStore(
//     (state = { login: false }) => state
// );

// const loginAction = () => {
//     return {
//         type: 'LOGIN'
//     }
// };

// // Dispatch the action here:
// store.dispatch(loginAction());

// const defaultState = {
//     login: false
// };

// const reducer = (state = defaultState, action) => {
//     // Change code below this line
//     if (action.type === 'LOGIN') {
//         return { login: true }
//     } else {
//         return state;
//     }
//     // Change code above this line
// };

// const store = Redux.createStore(reducer);

// const loginAction = () => {
//     return {
//         type: 'LOGIN'
//     }
// };

// const defaultState = {
//     authenticated: false
// };

// const authReducer = (state = defaultState, action) => {
//     // Change code below this line
//     switch (action.type) {
//         case 'LOGIN':
//             return {
//                 authenticated: true
//             }
//         case 'LOGOUT':
//             return {
//                 authenticated: false
//             }
//         default:
//             return state;
//     }
//     // Change code above this line
// };

// const store = Redux.createStore(authReducer);

// const loginUser = () => {
//     return {
//         type: 'LOGIN'
//     }
// };

// const logoutUser = () => {
//     return {
//         type: 'LOGOUT'
//     }
// };

// const LOGIN = "LOGIN";
// const LOGOUT = "LOGOUT";

// const defaultState = {
//     authenticated: false
// };

// const authReducer = (state = defaultState, action) => {

//     switch (action.type) {
//         case LOGIN:
//             return {
//                 authenticated: true
//             }
//         case LOGOUT:
//             return {
//                 authenticated: false
//             }

//         default:
//             return state;

//     }

// };

// const store = Redux.createStore(authReducer);

// const loginUser = () => {
//     return {
//         type: LOGIN
//     }
// };

// const logoutUser = () => {
//     return {
//         type: LOGOUT
//     }
// };

// const ADD = 'ADD';

// const reducer = (state = 0, action) => {
//     switch (action.type) {
//         case ADD:
//             return state + 1;
//         default:
//             return state;
//     }
// };

// const store = Redux.createStore(reducer);

// // Global count variable:
// let count = 0;

// // Change code below this line
// const incrementCount = () => {
//     count++;
// }

// store.subscribe(incrementCount);
// // Change code above this line

// store.dispatch({ type: ADD });
// console.log(count);
// store.dispatch({ type: ADD });
// console.log(count);
// store.dispatch({ type: ADD });
// console.log(count);

// const INCREMENT = 'INCREMENT';
// const DECREMENT = 'DECREMENT';

// const counterReducer = (state = 0, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return state + 1;
//         case DECREMENT:
//             return state - 1;
//         default:
//             return state;
//     }
// };

// const LOGIN = 'LOGIN';
// const LOGOUT = 'LOGOUT';

// const authReducer = (state = { authenticated: false }, action) => {
//     switch (action.type) {
//         case LOGIN:
//             return {
//                 authenticated: true
//             }
//         case LOGOUT:
//             return {
//                 authenticated: false
//             }
//         default:
//             return state;
//     }
// };

// const rootReducer = Redux.combineReducers({ count: counterReducer, auth: authReducer }); // Define the root reducer here

// const store = Redux.createStore(rootReducer);

// const ADD_NOTE = 'ADD_NOTE';

// const notesReducer = (state = 'Initial State', action) => {
//     switch (action.type) {
//         // Change code below this line
//         case ADD_NOTE:
//             return action.text;
//         // Change code above this line
//         default:
//             return state;
//     }
// };

// const addNoteText = (note) => {
//     // Change code below this line
//     return {
//         type: ADD_NOTE,
//         text: note
//     }
//     // Change code above this line
// };

// const store = Redux.createStore(notesReducer);

// console.log(store.getState());
// store.dispatch(addNoteText('Hello!'));
// console.log(store.getState());

// const REQUESTING_DATA = "REQUESTING_DATA";
// const RECEIVED_DATA = "RECEIVED_DATA";

// const requestingData = () => {
//     return { type: REQUESTING_DATA };
// };
// const receivedData = data => {
//     return { type: RECEIVED_DATA, users: data.users };
// };

// const handleAsync = () => {
//     return function (dispatch) {
//         // dispatch request action here

//         dispatch(requestingData());

//         setTimeout(function () {
//             let data = {
//                 users: ["Jeff", "William", "Alice"]
//             };
//             // dispatch received data action here

//             dispatch(receivedData(data));
//         }, 2500);
//     };
// };

// const defaultState = {
//     fetching: false,
//     users: []
// };

// const asyncDataReducer = (state = defaultState, action) => {
//     switch (action.type) {
//         case REQUESTING_DATA:
//             return {
//                 fetching: true,
//                 users: []
//             };
//         case RECEIVED_DATA:
//             return {
//                 fetching: false,
//                 users: action.users
//             };
//         default:
//             return state;
//     }
// };

// const store = Redux.createStore(
//     asyncDataReducer,
//     Redux.applyMiddleware(ReduxThunk.default)
// );


// const INCREMENT = "INCREMENT"; // Define a constant for increment action types
// const DECREMENT = "DECREMENT"; // Define a constant for decrement action types

// const counterReducer = (state = 0, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return state + 1;
//         case DECREMENT:
//             return state - 1;
//         default:
//             return state;
//     }
// }; // Define the counter reducer which will increment or decrement the state based on the action it receives

// const incAction = () => {
//     return { type: INCREMENT }
// }; // Define an action creator for incrementing

// const decAction = () => {
//     return { type: DECREMENT }
// }; // Define an action creator for decrementing

// // const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers

// const ADD_TO_DO = 'ADD_TO_DO';

// // A list of strings representing tasks to do:
// const todos = [
//     'Go to the store',
//     'Clean the house',
//     'Cook dinner',
//     'Learn to code',
// ];

// const immutableReducer = (state = todos, action) => {
//     switch (action.type) {
//         case ADD_TO_DO:
//             return [...state, action.todo];
//             // Don't mutate state here or the tests will fail
//         default:
//             return state;
//     }
// };

// const addToDo = (todo) => {
//     return {
//         type: ADD_TO_DO,
//         todo
//     }
// }

// const store = Redux.createStore(immutableReducer);

// const immutableReducer = (state = ['Do not mutate state!'], action) => {
//     switch (action.type) {
//         case 'ADD_TO_DO':
//             // Don't mutate state here or the tests will fail
//             return [...state, action.todo];

//         default:
//             return state;
//     }
// };

// const addToDo = (todo) => {
//     return {
//         type: 'ADD_TO_DO',
//         todo
//     }
// }

// const store = Redux.createStore(immutableReducer);

// const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
//     switch (action.type) {
//         case 'REMOVE_ITEM':
//             // Don't mutate state here or the tests will fail
//             return state.filter((_, index) => index !== action.index);
//         default:
//             return state;
//     }
// };

// const removeItem = (index) => {
//     return {
//         type: 'REMOVE_ITEM',
//         index
//     }
// }

// const store = Redux.createStore(immutableReducer);

const defaultState = {
    user: 'CamperBot',
    status: 'offline',
    friends: '732,982',
    community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ONLINE':
            // Don't mutate state here or the tests will fail
            return Object.assign({}, state, { status: "online" })
        default:
            return state;
    }
};

const wakeUp = () => {
    return {
        type: 'ONLINE'
    }
};

const store = Redux.createStore(immutableReducer);