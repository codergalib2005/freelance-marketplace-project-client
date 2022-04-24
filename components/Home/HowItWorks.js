/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import { Collapse } from 'antd';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ReactPlayer from 'react-player'
import { BsFillPlayFill } from 'react-icons/bs';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "100%",
  maxWidth: "500px",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24
};

const videoSideStyle = {
  background: "url(/home/how_works.jpg) no-repeat center center",
  minHeight: '300px',
  width: '100%',
  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '1rem'
}

const { Panel } = Collapse;

const HowItWorks = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const { Panel } = Collapse;

  function callback(key) {
    console.log(key);
  }
  const data = [
    {
      question: "This is a new question for users!",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aperiam esse enim tempore quaerat, porro perferendis reiciendis facilis, optio, harum nulla adipisci dignissimos! Totam commodi ipsam officia dolor eum repudiandae!"
    },
    {
      question: "This is a new question for users!",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aperiam esse enim tempore quaerat, porro perferendis reiciendis facilis, optio, harum nulla adipisci dignissimos! Totam commodi ipsam officia dolor eum repudiandae!"
    },
    {
      question: "This is a new question for users!",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aperiam esse enim tempore quaerat, porro perferendis reiciendis facilis, optio, harum nulla adipisci dignissimos! Totam commodi ipsam officia dolor eum repudiandae!"
    }
  ]
  return (
    <div className="how_it_work_component">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
          <div className="">
            <Collapse defaultActiveKey={['0']} onChange={callback}>
              {
                data.map((item, index) => (
                  <Panel header={item?.question} key={index}>
                    <p>{item?.answer}</p>
                  </Panel>
                ))
              }
            </Collapse>
          </div>
          <div>
            <div onClick={handleOpen} style={videoSideStyle}>
              <span className="how_works_play_button"><BsFillPlayFill /></span>
            </div>
            <div>
              <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <ReactPlayer
                    className="how_it_works_video_class"
                    url='https://youtu.be/eaB1bXTA23w'
                    playing={true}
                  // controls="true"
                  />
                </Box>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
