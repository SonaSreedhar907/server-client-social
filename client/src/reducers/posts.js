// export default (posts=[],action)=>{
//     switch(action.type){
//         case 'FETCH ALL':
//             return posts;
//         case 'CREATE':
//             return posts
//         default:
//             return posts
//     }
// }

const postsReducer = (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload; 
        case 'CREATE':
            return [...posts, action.payload]; 
        default:
            return posts;
    }
};

export default postsReducer;
