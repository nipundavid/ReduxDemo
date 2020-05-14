const initState = {
    posts: [{
        id: "1",
        title: "some title 1",
        body: "some body 1"
    }, {
        id: "2",
        title: "some title 2",
        body: "some body 2"
    }, {
        id: "3",
        title: "some title 3",
        body: "some body 3"
    }]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;