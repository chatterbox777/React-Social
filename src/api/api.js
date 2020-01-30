
import * as axios from 'axios';


const instance = axios.create  ({
withCredentials: true,
baseURL: 'https://social-network.samuraijs.com/api/1.0/',
headers: {
    'API-KEY': '87347c7d-c349-41a1-9f6c-baa1f3d81a40'
}
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {

        return instance.get(`users?page=${currentPage} & count=${pageSize}`)  
              .then(response => {
                  return response.data;
              });
      },

    follow (userId) {
       return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow (userId) {
       return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    getProfile (userId) {
        console.warn('old method. Please use profileAPI object')
        return profileAPI.getProfile(userId);
    }
      
 }

 export const profileAPI = {
   
    getProfile (userId) {
        return instance.get('profile/' + userId);
    }, 
    getStatus (userId) {
        return instance.get('profile/status/' + userId);
    },
    updateStatus (status) {
        return instance.put ('profile/status', { status: status })
    }
      
 }

export const authAPI = {
    me() {
        return instance.get('auth/me');
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe});
    },
    logout() {
        return instance.delete('auth/login');
    }
}