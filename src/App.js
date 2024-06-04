import  { useState, useEffect } from "react"
import { getPosts, getRandomUser } from "./api"; 
import PostCard from "./components/PostCard";
import UserCard from "./components/UserCard";
import './App.css';

function App() {
    const [data, setData] = useState(null);
    const [userData, setUserData] = useState(null);

   useEffect(() =>{
  getPosts().then((Posts) => setData(Posts));
   }, []);

   useEffect(() =>{
    getRandomUser().then((user) => setUserData(user.results[0]))
   },[]);

   const refresh = () =>{
    getRandomUser().then((user) => setUserData(user.results[0]))
   };

   console.log(userData);

    return (
    <div className="App">
      {userData && <UserCard data={userData} />}
        <button onClick={refresh}> refresh user </button>
        
        {data ? (
          data.map((e) => <PostCard title={e.title} body={e.body} />))
           :( <p>NO DATA</p>
           )}
    </div>
  );
}

export default App;
