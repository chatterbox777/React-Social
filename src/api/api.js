
import * as axios from 'axios';


const instance = axios.create  ({
withCredentials: true,
baseURL: 'https://social-network.samuraijs.com/api/1.0/',
headers: {
    'API-KEY': '1d340cda-60a5-49de-bf6a-5cfc74d67d0a'
}
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {

        return instance.get(`users?page=${currentPage} & count=${pageSize}`)  
              .then(response => {
                  return response.data;
              });
      }
      
 }

