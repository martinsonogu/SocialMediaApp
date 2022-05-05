import { MoreVert } from '@mui/icons-material';
import React from 'react';
import "./Post.css"

const Post = () => {
  return (
    <div className='post'>
      <div className="postWrapper">
          <div className="postTop">
              <div className="postTopLeft">
                  <img src="https://images.pexels.com/photos/1205405/pexels-photo-1205405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="" className="postTopImg" />
                  <span className="postUsername">Enemali Alhassan</span>
                  <span className="postDate">5 mins ago</span>
              </div>
              <div className="postTopRight"> <MoreVert/> </div>
          </div>
          <div className="postCenter">
              <span className="postText">Hey, it's my first post and i am delighted to be on here.</span>
              <img src="https://images.pexels.com/photos/11800382/pexels-photo-11800382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="" className="postImg" />
          </div>
          <div className="postBottom">
              <div className="postBottomLeft">
                  <img className="likeIcon" src="https://pngimg.com/uploads/like/like_PNG14.png" alt="" />
                  <img className="likeIcon" 
                  src="https://pngimg.com/uploads/like/like_PNG14.png" 
                  alt="" />
                  <span className="postLikeCounter">32 people liked </span>
              </div>
              <div className="postBottomRight">
                  <span className="postCommentText">9 comments</span>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Post
