export const setFilter = (text) => {
    return {
        type: 'SET_FILTER',
        data: {
            filter: text
        }
    }
}

export const removeFilter = () => {
    return {
        type: 'REMOVE_FILTER',
    }
}

const filterReducer = (state = '', action) => {
    switch(action.type){
        case 'SET_FILTER':
            return action.data.filter
        case 'REMOVE_FILTER':
            return ''
        default:
            return state
    }

}

export default filterReducer