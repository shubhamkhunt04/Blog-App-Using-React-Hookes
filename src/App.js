import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
// import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/HomePage/Home";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import AutherDetail from "./Pages/AutherDetail/AutherDetail";
import PostDetail from "./Pages/PostDetail/PostDetail";
import MostLikedPosts from "./Pages/MostLikedPosts/MostLikedPosts";
import MostCommentedPost from "./Pages/MostLikedComments/MostCommentedPosts";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/authors" component={Home} />
          <Route exact path="/authors/:id" component={AutherDetail} />
          <Route exact path="/posts/:postId" component={PostDetail} />
          <Route exact path="/mostlikedposts" component={MostLikedPosts} />
          <Route exact path="/mostcommentedpost" component={MostCommentedPost} />
          <Redirect to="/authors"></Redirect>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
