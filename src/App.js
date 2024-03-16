import './App.css';
//import axios from "axios";
//import { useEffect, useState } from 'react';
import GetToken from './pages/GetToken';

// const client = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com/posts"
// });

function App() {


  return (
    <>
      <h1 className="text-3xl font-bold underline border-2">
        Coba Satu Sehat 2023
      </h1>
      <GetToken />
      {/* <GetIHS />
      <GetPraktisioner />
      <Location />
      <PostLocation />
      <Bundle />
      <Bundles /> */}
    </>
  );
}

export default App;
