# Redux fundamentals

## Concepts

- What is Redux? A predictable state container
- Store
- Listener
- State: Single, immutable value
- Action: Object with a type property
- Action creator: (payload) => action
- Pure/Impure functions
- Reducer (prevState, action) => nextState
- Middleware: (store) => next => action => void
- Store enhancer: (oldCreateStore) => newCreateStore
- DevTools: time travel
- Flux standard actions

## API

- createStore
- Store: subscribe, dispatch, getState, replaceReducer
- combineReducers
- applyMiddleware
- bindActionCreators
- compose
