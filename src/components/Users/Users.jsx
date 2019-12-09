import React from 'react';
import UsersContainer from './UsersContainer';
import styles from './users.module.css'

let Users = (props) => {
    
    if (props.users.length === 0) {
        props.setUsers(   [
            { id: 1, photoUrl: 'https://download-cs.net/steam/avatars/3412.jpg', followed: false, fullName: 'Sergey', status: 'its ok to be gay', location: { city: 'Krasnodar', country: 'Russia' } },
            { id: 2, photoUrl: 'https://download-cs.net/steam/avatars/3425.jpg', followed: true, fullName: 'Vasiliy', status: 'bugaga', location: { city: 'Moscow', country: 'Russia' } },
            { id: 3, photoUrl: 'https://download-cs.net/steam/avatars/3417.jpg', followed: true, fullName: 'Artyom', status: 'ez pz', location: { city: 'Chelyabinsk', country: 'Russia' } },
            { id: 4, photoUrl: 'https://download-cs.net/steam/avatars/3421.jpg', followed: false, fullName: 'Kirill', status: 'lemons squezy', location: { city: 'seoul', country: 'South Korea' } }
            
        ]
            )
    }
   
debugger;
    return <div>
        {
        props.users.map ( u => <div key={u.id}>
            <span>
                <div>
                    <img  src = {u.photoUrl} className={styles.userPhoto} />
                </div>
                <div>
                    { u.followed 
                    ? <button onClick = {() => {props.unfollow(u.id)}} >Unfollow</button> 
                    : <button onClick = {() => {props.follow(u.id)}} >Follow</button> }
                    
                </div>
            </span>

            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                     <div>{u.location.country}</div>
                     <div>{u.location.city}</div>
                </span>
            </span>

        </div>)
        }
    </div>
}

export default Users;