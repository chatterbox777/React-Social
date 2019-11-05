import {
  statement
} from "@babel/template";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
  _state: {

    profilePage: {
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


    },


    dialogsPage: {

      dialogs: [{
          id: 1,
          name: 'Artyom',
          url: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'
        },
        {
          id: 2,
          name: 'Vasiliy',
          url: 'https://photostocky.ru/wp-content/uploads/2019/02/krutye-foto-i-kartinki-v-vk-1.jpg'
        },
        {
          id: 3,
          name: 'Dmitriy',
          url: 'https://lizaalert.org/forum/download/file.php?avatar=10822_1440823850.jpg'
        },
        {
          id: 4,
          name: 'Nik',
          url: 'https://klike.net/uploads/posts/2019-03/1551511804_3.jpg'
        }
      ],

      messages: [{
          id: 1,
          message: 'Hey'
        },
        {
          id: 2,
          message: 'WazzUPPP'
        },
        {
          id: 3,
          message: 'nothing interesting , AND YOU?'
        },
        {
          id: 4,
          message: 'IM TOOOOO'
        }
      ],

      newMessageBody: ''
    },

    sitebarPage: {

    }
  },
  _callSubscriber() {
    console.log('state was changed');
  },

  getState() {

    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY ) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE ) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({ id: 6, message: body });
      this._callSubscriber(this._state);
    }
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

export const sendMessageCreator = () => {
  return {
     type: SEND_MESSAGE
  }
}

export const updateNewMessageBodyCreator = (body) => {
  return {
     type: UPDATE_NEW_MESSAGE_BODY, body: body
  }
}

window.store = store;

export default store;