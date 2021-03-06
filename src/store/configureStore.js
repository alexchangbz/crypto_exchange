import rootReducer from "./reducers"

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState
    )
}