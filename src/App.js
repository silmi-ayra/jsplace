import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts"
});

function App() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);

  // GET with Axios
  useEffect(() => {
    const fetchPost = async () => {
      let response = await client.get('?_limit=10');
      setPosts(response.data);
    };
    fetchPost();
  }, []);

  // Delete with Axios
  const deletePost = async (id) => {
    await client.delete(`${id}`);
    setPosts(
      posts.filter((post) => {
        return post.id !== id;
      })
    );
  };

  // Post with Axios
  const addPosts = async (title, body) => {
    let response = await client.post('', {
      title: title,
      body: body,
    });
    setPosts((posts) => [response.data, ...posts]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(title, body);
  };


  return (
    <div className="App">
      <h4>Coba Deploy Github</h4>
      <div className="add-post-container">
        <form onSubmit={handleSubmit}>
          <input type="text" className="form-control" value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea name="" className="form-control" id="" cols="10" rows="8"
            value={body} onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <button type="submit">Add Post</button>
        </form>
      </div>
      <div className="posts-container">
        {posts.map((post) => {
          return (
            <div className="post-card" key={post.id}>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-body">{post.body}</p>
              <div className="button">
                <button onClick={() => deletePost(post.id)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
