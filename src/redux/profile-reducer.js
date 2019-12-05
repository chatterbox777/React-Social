const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [{
    id: 1,
    message: "Hello, whats happend to you last night?",
    likeCount: 11
  },
  {
    id: 2,
    message: "Sorry, its not adress to you",
    likeCount: 76
  },
  {
    id: 3,
    message: 'omg',
    likeCount: 120
  }
  ],

  newPostText: 'chatterbox777'


};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    
    }
    case UPDATE_NEW_POST_TEXT: {
     return {
        ...state,
        newPostText: action.newText
      }
    
    }
    default:
      return state;
  }

}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT, newText: text
  }
}


export default profileReducer;