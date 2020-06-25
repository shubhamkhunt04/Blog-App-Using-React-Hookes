import React, { useState, useEffect } from "react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Axios from "axios";
import Posts from "../../Components/Posts/Posts";

const AutherDetail = ({ match }) => {
  // console.log(match);

  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState({});

  // Fetching Author From Server
  const fetchAuthor = async () => {
    const fetchPerticularAuthor = await Axios.get(
      `http://localhost:3004/authors/${match.params.id}`
    );
    const author = await fetchPerticularAuthor.data;
    setAuthor(author);
  };

  // Fetching Author Posts From Server
  const fetchAuthorPosts = async () => {
    const fetchAllPosts = await Axios.get(`http://localhost:3004/posts`);
    const datas = await fetchAllPosts.data;
    const authorPosts = datas.filter(
      (post) => post.authorId === parseInt(match.params.id)
    );
    // Setting posts state
    setPosts(authorPosts);
  };

  // Fetching Author Comments From Server
  const fetchAuthorComments = async () => {
    const fetchAllCommnets = await Axios.get(`http://localhost:3004/comments`);
    const datas = await fetchAllCommnets.data;

    const authorComments = datas.filter(
      (comment) => comment.authorId === parseInt(match.params.id)
    );

    // Setting comments state
    setComments(authorComments);
  };

  useEffect(() => {
    fetchAuthor();
  }, []);

  useEffect(() => {
    fetchAuthorPosts();
  }, []);

  useEffect(() => {
    fetchAuthorComments();
  }, []);

  const getStyle = () => {
    return {
      width: "24rem",
      padding: "20px",
      backgroundColor: "#C3FFA9",
      border: "none",
      margin: "15px",
      textAlign: "center",
    };
  };

  // For Selecting Option in Forms
  const [state, setState] = useState("");

  const inputChanged = (e) => {
    console.log("Input changed called");
    setState(e.target.value);

    console.log("state.value ", state);
    
  sorting();
  };

  const sorting = () => {
    if (state === "dateAsc") {
      let dateAsc = posts.sort((a, b) => {
        return b.datePublished - a.datePublished;
      });
      setPosts(dateAsc);
      console.log("dateAsc", state);
    } else if (state === "dateDesc") {
      let dateDes = posts.sort((a, b) => {
        return a.datePublished - b.datePublished;
      });
      setPosts(dateDes);
      console.log("dateDesc", state);
    } else if (state === "likesAsc") {
      let likesAsc = posts.sort((a, b) => {
        return b.numLikes - a.numLikes;
      });
      setPosts(likesAsc.reverse());
      console.log("likesAsc", state);
    } else if (state === "likesDesc") {
      let likesDesc = posts.sort((a, b) => {
        return a.numLikes - b.numLikes;
      });
      setPosts(likesDesc);
      console.log("likesDesc", state);
    }
  };

  // useEffect(() => {
  //   console.log("UseEffect Called");
  // }, [state]);

  console.log("Printing posts", posts);

  return (
    <div>
      <NavigationBar />
      <div className="card mx-auto" style={getStyle()}>
        <img
          src={`https://www.shareicon.net/data/512x512/2015/10/02/649910_user_512x512.png`}
          className="card-img-top"
          alt="user"
          height="300px"
        />
        <h4>{author.firstName + " " + author.lastName}</h4>
        <p className="title text-secondary">Mobile : {author.phone}</p>
        <p>POSTS : {author.numPosts}</p>
        <p>
          LIKES (<i className="fa fa-thumbs-up fa-1x"></i>) : {author.numLikes}
        </p>
      </div>

      <div className="container text-white">
        <h3 className="pt-4 text-center">Posts</h3>
        <div className="container mb-5">
          <form>
            <div className="form-row align-items-center">
              <div className="col-auto my-1">
                <label className="mr-sm-2 font-weight-bold font-italic">
                  Sort Post List
                </label>
                <select
                  className="custom-select mr-sm-2"
                  value={state.value}
                  onChange={inputChanged}
                >
                  <option defaultValue>Choose...</option>
                  <option value="dateAsc">
                    Sort By Date Published (Ascending)
                  </option>
                  <option value="dateDesc">
                    Sort By Date Published (Descending)
                  </option>
                  <option value="likesAsc">
                    Sort By Number Of Likes (Ascending)
                  </option>
                  <option value="likesDesc">
                    Sort By Number Of Likes (Descending)
                  </option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Posts posts={posts} />
    </div>
  );
};

export default AutherDetail;
