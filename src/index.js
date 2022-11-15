import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const bloggers = [
  {
    name: "Сергей Иванов",
    avatar: "https://pickaface.net/gallery/avatar/acrovin559439058dc7f.png",
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt rerum ametvoluptatibus voluptas quos repellendus dolor. Natus, modi et!",
  },
  {
    name: "Петр Петров",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3MMleJTsvxXrWLqg8XEeMcVgRkFu1okrTaQ&usqp=CAU",
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    name: "Иван Иванов",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM37K_9ZjynSqoSDA0Nyl2oqIZRV6p4xfVxvd-57q19ZJDLCB23qhHF0zwqLkycRplQ-A&usqp=CAU",
    bio: "Lorem ipsum dolor sit, 333333",
  },
];

const Blogger = (props) => {
  const { avatar, name, bio } = props;
  return (
    <div className='main-container'>
      <Avatar url={avatar} />
      <BloggerName name={name} />
      <Bio bio={bio} />
    </div>
  );
};
const Avatar = ({ url }) => {
  return (
    <div className='image-container'>
      <img src={url} alt='avatar' />
    </div>
  );
};
const BloggerName = ({ name }) => {
  return (
    <div className='blogger-name-container'>
      <p>{name}</p>
    </div>
  );
};
const Bio = ({ bio }) => {
  return (
    <div className='bio'>
      <p>{bio}</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className='root'>
    {bloggers.map((blogger) => {
      return <Blogger {...blogger} />;
    })}
  </div>
);
