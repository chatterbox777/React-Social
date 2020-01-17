import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/icon_user_default.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';



let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
    <div>
        {pages.map(p => {
            return <span className = {props.currentPage === p && styles.selectedPage}
            onClick = { (e)=> {
                 props.onPageChanged(p);
                 }} >{p}</span>
        })}
    </div>
 {
 props.users.map ( u => <div key={u.id}>
     <span>
         <div>
             <NavLink to = {'/Profile/' + u.id}>
                 <img  src = {u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                 </NavLink>
             
         </div>
         <div>
             { u.followed 
             ? <button onClick = {() => {
                
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                    withCredentials: true,
                    headers: {
                        'API-KEY': '2fd4ffe9-d26d-45b2-8194-7b74d57a4656'
                    }
                })
                .then(response => {
                   if (response.data.resultCode === 0) {
                    props.unfollow(u.id);
                   }

                });
                
            }} >Unfollow</button> 
            
            : <button onClick = {() => {

                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                    withCredentials: true,
                    headers: {
                        'API-KEY': '1d340cda-60a5-49de-bf6a-5cfc74d67d0a'
                    }
                })
                .then(response => {
                   if (response.data.resultCode === 0) {
                    props.follow(u.id);
                   }
                    
                });

                
               
               }} >Follow</button> }
             
         </div>
     </span>

     <span>
         <span>
             <div>{u.name}</div>
             <div>{u.status}</div>
         </span>
         <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
         </span>
     </span>

 </div>)
 }
</div>
}

export default Users;