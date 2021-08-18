const initialState = {
    showAbout: false,
    showSkills: false,
    showProjects: false
}
const rootReducer = (state = initialState, action) =>{
    if (action.type === "SET_ABOUT"){
        state = {...state, showAbout: action.data}
    }
    if (action.type === "SET_SKILLS"){
        state = {...state, showSkills: action.data}
    }
    if(action.type === "SET_PROJECTS"){
        state = {...state, showProjects: action.data}
    }
    return state;
}

export default rootReducer;