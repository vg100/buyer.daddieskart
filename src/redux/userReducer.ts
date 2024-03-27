export const userLoginReducer = (state = {}, action:any) => {
    switch (action.type) {
      case "login":
        return { loading: true }
      case "login sucess":
        return { loading: false, userInfo: action.payload }
      case "login fail":
        return { loading: false, error: action.payload }
      case "login logout":
        return {}
      default:
        return state
    }
  }