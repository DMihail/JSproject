export default function (state = null, action) {
    switch (action.type) {
        case "CLIENT_SELECT":
            return action.payload;
            break;
        default:
            return state;
    }
}