import { createStore } from 'redux';

const store = () => (
  createStore((state = {}, action) => {
    switch (action.type) {
      case 'GET_ID':
        return {
          albumId: action.id
        }
      default:
        return state
    }

  }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)



export { store as default }
