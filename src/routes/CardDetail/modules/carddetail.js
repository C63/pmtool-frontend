// ------------------------------------
// Constants
// ------------------------------------
export const GET_CARD_DETAIL = 'GET_CARD_DETAIL'

// ------------------------------------
// Actions
// ------------------------------------
export function getCardDetail (card) {
  return {
    type    : GET_CARD_DETAIL,
    payload : card
  }
}

export const actions = {
  getCardDetail
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_CARD_DETAIL] : (state, action) => [ ...state, action.payload ]
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function cardDetailReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
