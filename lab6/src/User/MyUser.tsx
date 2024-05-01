import "./formstyle.css"
import React from "react";
import ExtendUser from "../Component/User"
const user : ExtendUser = {
    name:"Georgica",
    username:"Cel Mare",
    nickname:"Vanil",
    email:"uwu.gmail.com",
    phone:"069005462",
    age:21,
    sex:"Other"
}
const MyUser = () => {
    return(
        <div className="divuser">
            <div>
            <h1>User information</h1>
            <p className="paragraph">Name:  {user.name}</p>
            <p className="paragraph">Username:  {user.username}</p>
            <p className="paragraph">Nickname:  {user.nickname}</p>
            <p className="paragraph">Email: {user.email}</p>
            <p className="paragraph">Phone: {user.phone}</p>
            <p className="paragraph">Age:   {user.age}</p>
            <p className="paragraph">Sex:   {user.sex}</p>
            </div>
        </div>
    )
}
export default MyUser;