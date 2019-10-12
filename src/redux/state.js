import { statement } from "@babel/template";

  let state = {

    profilePage: {
        posts: [
            {id: 1, message: "Hello, whats happend to you last night?", likeCount: 11}, 
            {id: 2, message: "Sorry, its not adress to you", likeCount: 76},
            {id:3, message: 'omg', likeCount: 120}
          ]
    
        
    },

    
    dialogsPage: {

        dialogs: [
            {id: 1, name: 'Artyom'}, 
            {id: 2, name: 'Vasiliy'},
            {id: 3, name: 'Dmitriy'},
            {id: 4, name: 'Nik'}
          ],

        messages: [
            {id: 1, message: 'Hey'}, 
            {id: 2, message: 'WazzUPPP'},
            {id: 3, message: 'nothing interesting , AND YOU?'},
            {id: 4, message: 'IM TOOOOO'}
          ]
    }
    

  }

  export default state;