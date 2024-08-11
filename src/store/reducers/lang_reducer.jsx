const INITIAL_VALUE = {
    lang: "EN"
  }
  
  export default function Reducer(state = INITIAL_VALUE, action) {
    switch (action.type) {
      case "CHANGE_LANG":
        console.log("CHANGE_LANG", action.payload);
        return {
          ...state,
          lang: action.payload
        };
      default:
        return state;
    }
  }
  