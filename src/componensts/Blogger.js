import React from "react";

import Avatar from "./Avatar";
import BloggerName from "./BloggerName";
import Bio from "./Bio";

const Blogger = (props) => {
  const { avatar, name, bio, children } = props;
  return (
    <div className='main-container'>
      <Avatar url={avatar} />
      <BloggerName name={name} />
      <Bio bio={bio} />
      {children}
    </div>
  );
};

export default Blogger;
