
import * as axios from 'axios';


const instance = axios.create  ({
withCredentials: true,
baseURL: 'https://social-network.samuraijs.com/api/1.0/',
headers: {
    'API-KEY': '903da253-799a-43d5-b336-c341bbe7ea4a'
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

