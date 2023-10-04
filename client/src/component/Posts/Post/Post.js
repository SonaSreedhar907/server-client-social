import React from 'react'

function Post() {
  return (
    <div>Post</div>
  )
}

export default Post

// import React from 'react';
// import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
// import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
// import DeleteIcon from '@mui/icons-material/Delete';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import moment from 'moment';
// import { useDispatch } from 'react-redux';
// import { deletePost } from '../../../actions/posts';

// const Post = ({ post, setCurrentId }) => {
//   const dispatch = useDispatch();

//   const cardStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     borderRadius: '15px',
//     height: '100%',
//     position: 'relative',
//   };

//   const mediaStyle = {
//     height: 0,
//     paddingTop: '56.25%',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     backgroundBlendMode: 'darken',
//   };

//   const overlayStyle = {
//     position: 'absolute',
//     top: '20px',
//     left: '20px',
//     color: 'white',
//   };

//   const overlay2Style = {
//     position: 'absolute',
//     top: '20px',
//     right: '20px',
//     color: 'white',
//   };

//   const detailsStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     margin: '20px',
//   };

//   const titleStyle = {
//     padding: '0 16px',
//   };

//   const cardActionsStyle = {
//     padding: '0 16px 8px 16px',
//     display: 'flex',
//     justifyContent: 'space-between',
//   };

//   return (
//     <Card style={cardStyle}>
//       <CardMedia style={mediaStyle} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
//       <div style={overlayStyle}>
//         <Typography variant="h6">{post.creator}</Typography>
//         <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
//       </div>
//       <div style={overlay2Style}>
//         <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
//       </div>
//       <div style={detailsStyle}>
//         <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
//       </div>
//       <Typography style={titleStyle} gutterBottom variant="h5" component="h2">{post.title}</Typography>
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
//       </CardContent>
//       <CardActions style={cardActionsStyle}>
//         <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default Post;
