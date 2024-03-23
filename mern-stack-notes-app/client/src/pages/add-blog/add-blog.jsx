import { useContext, useEffect } from "react";
import "./add-blog.styles.css";
import { GlobalContext } from "../../context/context";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export const AddBlog = () => {
  const { formData, setFormData, setIsEdit, isEdit } =
    useContext(GlobalContext);
  const navigate = useNavigate();
  const location = useLocation();

  async function handleAddNewBlogToDB() {
    const response = isEdit
      ? await axios.put(
          `http://localhost:5000/api/blogs/update/${location.state.currentBlog._id}`,
          {
            title: formData.title,
            description: formData.description,
          }
        )
      : await axios.post("http://localhost:5000/api/blogs/add", {
          title: formData.title,
          description: formData.description,
        });

    const result = await response.data;
    if (result) {
      setFormData({ title: "", description: "" });
      navigate("/");
      setIsEdit(false);
    }
  }

  useEffect(() => {
    if (location.state) {
      const { currentBlog } = location.state;
      setIsEdit(true);
      setFormData({
        title: currentBlog.title,
        description: currentBlog.description,
      });
    }
  }, [location]);

  return (
    <div className="add-blog-container">
      <h1>{isEdit ? "Edit the blog" : "Add a new blog"}</h1>
      <div className="input-container">
        <input
          type="text"
          name="title"
          placeholder="Enter blog title"
          id="title"
          value={formData.title}
          onChange={(e) => {
            setFormData({ ...formData, title: e.target.value });
          }}
        />
        <textarea
          name="description"
          placeholder="Enter blog tdescriptionitle"
          id="description"
          value={formData.description}
          onChange={(e) => {
            setFormData({ ...formData, description: e.target.value });
          }}
        />
        <button onClick={handleAddNewBlogToDB}>
          {isEdit ? "Edit the Blog" : "Add New Blog"}
        </button>
      </div>
    </div>
  );
};
