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
  ]
};



const dialogReducer = (state = initialState, action) => {

  switch (action.type) {
    
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }]
      };
      
    default:
      return state;
  }

}

export const sendMessageCreator = (newMessageBody) => {
  return {
    type: SEND_MESSAGE,
    newMessageBody
  }
}


export default dialogReducer;