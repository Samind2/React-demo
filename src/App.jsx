import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Post from "./component/post";
import PostFunction from "./component/PostFunction";
import Comment from "./component/Comment";
import StateInClass from "./component/StateInClass";
import StateInFunction from "./component/StateInFunction";

function App() {
  return (
    <>
      {/* <Post userId="Supanee" message="แย่จัง">
        <Comment userId="Supanee" message="หิวข้าววววว" />
      </Post>
  <PostFunction /> */}
     {/* <StateInClass name="Supanee Rungsirat"/> */}
     <StateInFunction name="Supanee Rungsirat"/>
    </>
  );
}

export default App;
