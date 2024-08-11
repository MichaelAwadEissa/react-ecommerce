const INITIAL_VALUE = {
    theme: "light" // or "dark" as needed
};

export default function Reducer(state = INITIAL_VALUE, action) {
    switch (action.type) {
        case "CHANGE_THEME": // Consistent casing
            return {
                ...state,
                theme: action.payload
            };
        default:
            return state;
    }
}
