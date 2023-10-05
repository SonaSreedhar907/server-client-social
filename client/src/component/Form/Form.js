import React, { useState } from 'react';
import { styled } from '@mui/system';
import { TextField, Button, Typography } from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';

const FormContainer = styled('div')(({ theme }) => ({
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
  },
  padding: theme.spacing(2),
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
}));

const FileInputContainer = styled('div')({
  width: '97%',
  margin: '10px 0',
});

const SubmitButton = styled(Button)({
  marginBottom: 10,
});

const Form = () => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createPost(postData))
  };

  const clear = () => {
    // Clear form logic
  };

  return (
    <FormContainer>
      <form autoComplete="off" noValidate onSubmit={handleSubmit} sx={{ width: '100%' }}>
        <Typography variant="h6">{postData.currentId ? `Editing "${postData.title}"` : 'Creating a Memory'}</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (comma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <FileInputContainer>
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </FileInputContainer>
        <SubmitButton variant="contained" color="primary" size="large" type="submit" fullWidth>
          Submit
        </SubmitButton>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
          Clear
        </Button>
      </form>
    </FormContainer>
  );
};

export default Form;
