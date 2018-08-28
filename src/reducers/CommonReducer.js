const initialState = {
    data: null
}

const CommonReducer = (state = initialState, action) => {
    console.log(['track_commonreducer_1', state, action])

    if (action.type === 'CREATE_STORE') {
        console.log('track_101');
        console.log(state)
        console.log(action.data)
        let mem = state
        mem.data.storeData.push(action.data)
        mem.data.myStoreID = action.data.id
        return {...state, ...mem}
    }

    if(action.type === 'CREATE_PRODUCT') {
        console.log('track_11')
        console.log(state)
        console.log(action)
        let mem = state
        mem.data.productData.push(action.data)
        return {
            ...state, ...mem
        }
    }

    if (action.type === 'COMMON_DATA'){
        console.log('track_1');
        console.log(action);
        //When back-end is ready it will be removed
        action.payload.productData = state.data.productData
        // return { ...state, ...{data:action.payload}}  
        return {...state}
    }
    
    if (action.type === 'CHANGE_USER_STATE') {
        let mem = state;
        const mindex = 0;
        mem.data.userData.forEach((key, index) => {
            if(key.id === action.data.id) mindex = index;
        })
        mem.data.userData[mindex].userState = action.data.status;
        console.log('mem');
        console.log(mem);
        return {...state, ...mem };
    }

    if (action.type === 'CHANGE_USER_TYPE') {
        let mem = state;
        const mindex = 0;
        mem.data.userData.forEach((key, index) => {
            if(key.id === action.data.id) mindex = index;
        })
        mem.data.userData[mindex].userType = action.data.type;
        console.log('type');
        console.log(mem);
        return {...state, ...mem };
    }
    return state
}

export default CommonReducer
