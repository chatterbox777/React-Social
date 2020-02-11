import profileReducer, { deletePost } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "Hello, whats happend to you last night?", likeCount: 11 },
    { id: 2, message: "Sorry, its not adress to you", likeCount: 76 },
    { id: 3, message: 'omg', likeCount: 120 }
  ]

};

it('legth of messages should be decremented after deleting a post', () => {
  // 1. test data

  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expected

  expect(newState.posts.length).toBe(2);
});
