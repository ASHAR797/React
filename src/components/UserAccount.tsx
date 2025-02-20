import { FC } from "react";

type Login = {
    UserLogin: boolean;
}


const UserAccount :FC<Login> = ({UserLogin})=>{
return<>
 <div><h1>{  UserLogin ? "Hello Welcome back" : "Please Create a account first"  }</h1></div>
</>      
}

export default UserAccount;