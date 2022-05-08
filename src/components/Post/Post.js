import { MoreVert } from '@mui/icons-material';
import React, { useState } from 'react';
import { Posts, Users } from '../../dummydata';
import "./Post.css"

const Post = ({post}) => {
    const [like, setLike] = useState (post.like);
    const [isLiked, setIsLiked] = useState(false);
    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

  return (
    <div className='post'>
      <div className="postWrapper">
          <div className="postTop">
              <div className="postTopLeft">
                  <img src={Users.filter((user) => user.id === post.userId)[0].ProfilePicture} 
                  alt="" className="postTopImg" />
                  <span className="postUsername">{Users.filter((user) => user.id === post.userId)[0].username}</span>
                  <span className="postDate">{post.date}</span>
              </div>
              <div className="postTopRight"> <MoreVert/> </div>
          </div>
          <div className="postCenter">
              <span className="postText">{post?.desc}.</span>
              <img src={post.photo} 
              alt="" className="postImg" />
          </div>
          <div className="postBottom">
              <div className="postBottomLeft">
                  <img className="likeIcon" 
                  src="https://pngimg.com/uploads/like/like_PNG14.png" 
                  onClick={likeHandler} alt="" />
                  <img className="likeIcon" 
                  src="https://pics.clipartpng.com/midle/Large_Red_Heart_PNG_Clipart-992.png" 
                  onClick={likeHandler}
                  alt="" />
                  <span className="postLikeCounter">{like} people liked </span>
              </div>
              <div className="postBottomRight">
                  <span className="postCommentText">{Posts.comment} comments</span>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Post
