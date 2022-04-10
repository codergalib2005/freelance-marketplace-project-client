import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SendIcon from '@mui/icons-material/Send';
import { Fade } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import { message } from 'antd';
import axios from 'axios';
import * as React from 'react';
import { useForm } from "react-hook-form";

const Input = styled('input')({
  display: 'none',
});
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: "600px",
  bgcolor: "background.paper",
  boxShadow: "0px 0px 100px #fe6b8b",
  padding: "20px",
  border: "2px solid #fe6b8b",
  background: "#5a4348",
  p: 4,
};
const ProfilePicUpload = ({ handleProfileClose, handleOpenProfile, openProfile, id, setOpenProfile }) => {
  const { register, handleSubmit, reset } = useForm();
  const primary = red[500];
  const onSubmit = (data) => {
    const rf = new FileReader();
    rf.readAsDataURL(data.image[0])
    rf.onloadend = function (event) {
      const body = new FormData();
      body.append("image", event.target.result.split(",").pop()); //To delete 'data:image/png;base64,' otherwise imgbb won't process it.
      body.append("name", data.image[0].name);
      fetch("https://api.imgbb.com/1/upload?expiration=600&key=aace97b9a0d4e6d8a83442b26ddb021e", {
        method: "POST",
        body: body
      })
        .then(res => res.json())
        .then(result => {
          axios.put(`https://dry-plains-53771.herokuapp.com/auth/users/banner/${id}`, {
            image: result.data.url
          })
            .then(function (response) {
              setOpenProfile(false);
              message.success("Profile Banner Update Successfully!")
            })
            .catch(function (error) {
              console.log(error);
            });
        })
    }
  }
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openProfile}
      onClose={handleProfileClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fade in={openProfile}>
          <Box sx={style} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <label htmlFor="icon-button-file">
              <Input {...register("image", { required: true })} accept="image/*" id="icon-button-file" type="file" />
              <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
              </IconButton>
              <span className='font-bold text-lg text-gray-50 pr-3'>Upload Banner Image</span>
              <Button type="submit" variant="contained" color="primary" xs={{ background: 'blue', paddingLeft: '1rem' }} endIcon={<SendIcon />}>
                Send
              </Button>
            </label>
          </Box>
        </Fade>
      </form>
    </Modal>
  );
};

export default ProfilePicUpload;