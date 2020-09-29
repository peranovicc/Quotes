export const setNotification = (text) => {
    return {
        type: 'SET_NOTIFICATION',
        data: {
            notification: text
        }
    }
}

export const removeNotification = () => {
    return {
        type: 'REMOVE_NOTIFICATION',
    }
}

const notificationReducer = (state = '', action) => {
    switch(action.type){
        case 'SET_NOTIFICATION':
            return action.data.notification
        case 'REMOVE_NOTIFICATION':
            return ''
        default:
            return state
    }

}

export default notificationReducer