import SendIcon from "@mui/icons-material/Send";
import { Fade, TextField } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import Modal from "@mui/material/Modal";
import axios from "axios";
import * as React from "react";
import { useForm } from "react-hook-form";
import { notification } from "antd";
const styles = {
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
const BannerPicChange = ({
  handleBannerClose,
  handleopenBanner,
  openBanner,
  id,
  setOpenBanner,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const primary = red[500];
  const onSubmit = (data) => {
    axios
      .put(`${process.env.NEXT_PUBLIC_API_URL}/users/banner/${id}`, data)
      .then(function (response) {
        setOpenBanner(false);
        notification.success({
          message: "Success",
          description: "Profile Banner Update successfully!",
          placement: "top",
          duration: 2,
          style: {
            width: 300,
            //   marginLeft: "calc(50% - 150px)",
            //   marginTop: "calc(50vh - 100px)",
            background: "#ec4899",
            color: "#2a3254 !important",
            borderBottom: "6px solid #3a3",
            boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.4)",
          },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBanner}
      onClose={handleBannerClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fade in={openBanner}>
          <Box
            sx={styles}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <label htmlFor="icon-button-file">
              <TextField
                {...register("image", { required: true })}
                type="text"
              />
              <span className="font-bold text-lg text-gray-50 pr-3">
                Upload Banner Image
              </span>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                xs={{ background: "blue", paddingLeft: "1rem" }}
                endIcon={<SendIcon />}
              >
                Send
              </Button>
            </label>
          </Box>
        </Fade>
      </form>
    </Modal>
  );
};

export default BannerPicChange;
