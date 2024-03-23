import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/context";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import "./home.styles.css";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const { blogList, setBlogList, loading, setLoading, isEdit, setIsEdit } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  function handleEditBlock(currentBlog) {
    navigate("/add", { state: { currentBlog } });
  }

  async function handleDeleteBlock(currentBlogId) {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/blogs/delete/${currentBlogId}`
      );
      const result = await response.data;
      if (result.message) {
        fetchBlogList();
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchBlogList() {
    setLoading(true);

    try {
      const response = await axios.get("http://localhost:5000/api/blogs");
      const result = await response.data;
      if (result && result.length) {
        setBlogList(result);
      } else {
        setBlogList([]);
      }

      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBlogList();
  }, []);
  return (
    <div className="home-container">
      {loading ? (
        <div>Loading blogs</div>
      ) : (
        <div className="blogs-list">
          {blogList && blogList.length ? (
            blogList.map((blog) => (
              <div key={blog._id} className="blog-container">
                <p>{blog.title}</p>
                <p>{blog.description}</p>
                <FaEdit onClick={() => handleEditBlock(blog)} size={30} />
                <FaTrash
                  onClick={() => handleDeleteBlock(blog._id)}
                  size={30}
                />
              </div>
            ))
          ) : (
            <div>No blogs found</div>
          )}
        </div>
      )}
    </div>
  );
};
