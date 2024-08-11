import {combineReducers} from 'redux';
import LangReducer from '../reducers/lang_reducer';
import ThemeReducer from '../reducers/theme_reducer';



export default combineReducers(

    {
        myLang:LangReducer,
        myTheme:ThemeReducer
    }
)
