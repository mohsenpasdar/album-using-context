import React, {useReducer} from 'react'

const albumsReducer = (state, action) => {
  switch (action.type) {
    case "GET_ID":
      return {
        albumId: action.id
      }
    default:
      return state
  }
}

export default albumsReducer
