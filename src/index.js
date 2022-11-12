import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Blogger = () => {
  return (
    <div className='main-container'>
      <Avatar />
      <BloggerName />
      <Bio />
    </div>
  );
};
const Avatar = (props) => {
  console.log(props);
  return (
    <div className='image-container'>
      <img
        src='https://pickaface.net/gallery/avatar/acrovin559439058dc7f.png'
        alt='avatar'
      />
    </div>
  );
};
const BloggerName = () => {
  return (
    <div className='blogger-name-container'>
      <p>Сергей Иванов!!!</p>
    </div>
  );
};
const Bio = () => {
  return (
    <div className='bio'>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt rerum
        amet, doloremque sint voluptate pariatur perferendis. Iusto quae eos,
        totam facilis quasi voluptatibus voluptas quos repellendus dolor. Natus,
        modi et!
      </p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className='root'>
    <Blogger />
    <Blogger />
    <Blogger />
  </div>
);
