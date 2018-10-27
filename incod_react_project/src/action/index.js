export const select = (client)=>{

    return {
        type: "CLIENT_SELECTED",
        payload: client
    };
};