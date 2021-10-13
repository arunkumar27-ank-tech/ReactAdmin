import React from "react";
import {Admin, Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import Postlist from "./components/Postlist";
import Createpost from "./components/Createpost";
import Editpost from "./components/Postedit";
import Userlist from "./components/Userslist";
import Edituser from "./components/Useredit";
import Createuser from "./components/Createuser";
function App() {
  return   <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource name='posts' 
    list={Postlist}
    create={Createpost}
    edit={Editpost}/>
    <Resource name='users' 
    list={Userlist}
    create={Createuser}
    edit={Edituser}/>
  </Admin>
  
}

export default App;
