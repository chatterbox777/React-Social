const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {

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
  };

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({
                id: 6,
                message: body
            });
            return state;
        default:
            return state;
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

export default dialogReducer;