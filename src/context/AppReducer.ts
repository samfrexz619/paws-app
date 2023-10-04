

export const AppReducer =(state: any, action: any)=> {
  switch(action.type) {
    case 'set_data':
      return {
        ...state,
        mode: action.payload
      }
  }
}