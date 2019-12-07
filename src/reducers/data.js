export { SET_DATA } from '../constants/types';

const initialState = {
  name: '',
  lastName: '',
  position: '',
  email: '',
  projectName: '',
  shareViaLink: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_DATA':
      return {...state, ...action.payload}
  }
  return state
}
