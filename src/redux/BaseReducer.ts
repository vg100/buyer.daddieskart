export class BaseReducer {
    initialState:any = {};
  
    public reducer = (state:any = this.initialState, action:any) => {
      const method= this[action.type];
  
      if (!method || action.error) {
        return state;
      }
  
      return method.call(this, state, action);
    };
  }