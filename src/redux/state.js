import { statement } from "@babel/template";
import { rerenderEntireTree } from "../render";

  let state = {

    profilePage: {
        posts: [
            {id: 1, message: "Hello, whats happend to you last night?", likeCount: 11}, 
            {id: 2, message: "Sorry, its not adress to you", likeCount: 76},
            {id:3, message: 'omg', likeCount: 120}
          ],

        newPostText: 'chatterbox777'
    
        
    },

    
    dialogsPage: {

        dialogs: [
            {id: 1, name: 'Artyom', url: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'}, 
            {id: 2, name: 'Vasiliy', url: 'https://photostocky.ru/wp-content/uploads/2019/02/krutye-foto-i-kartinki-v-vk-1.jpg'},
            {id: 3, name: 'Dmitriy', url: 'https://lizaalert.org/forum/download/file.php?avatar=10822_1440823850.jpg'},
            {id: 4, name: 'Nik', url: 'https://klike.net/uploads/posts/2019-03/1551511804_3.jpg'}
          ],

        messages: [
            {id: 1, message: 'Hey'}, 
            {id: 2, message: 'WazzUPPP'},
            {id: 3, message: 'nothing interesting , AND YOU?'},
            {id: 4, message: 'IM TOOOOO'}
          ]
    },
    
    sitebarPage: {

    }
  }

  window.state = state;

export let addPost = () => {
    debugger;
    let newPost = {
      id:5,
      message: state.profilePage.newPostText,
      likeCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}


export let updateNewPostText = (newText) => {

  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

  export default state;