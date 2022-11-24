const Avatar = ({ url }) => {
  return (
    <div className='image-container'>
      <img src={url} alt='avatar' />
    </div>
  );
};
export default Avatar;
