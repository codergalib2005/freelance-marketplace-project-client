import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import React, { useState } from "react";
import styles from "../../styles/HowItWork.module.css";
import { BsFillPlayFill } from "react-icons/bs";
import ModalPage from "../Modal/Modal";

const { Panel } = Collapse;

const bgImg = {
  backgroundImage: `url(/home/how-it-works.png)`,
  backgroundSize: "cover",
  minHeight: "280px",
};

const HowItWorks = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className={`p-12 ${styles.how_it_work_container}`}>
      <div className="container-fluid mx-auto px-12">
        <div className="grid lg:grid-cols-2 grid-cols-1  gap-12 ">
          <div>
            <p className="text-cyan-500 text-xl font-light">How Its Work</p>
            <h2 className="text-4xl font-semibold font-sans mt-2">
              Start Find a job You Love <br /> With Us Easily{" "}
            </h2>
            <div className="collaps-container mt-6">
              <Collapse
                bordered={false}
                defaultActiveKey={["1"]}
                expandIcon={({ isActive }) => (
                  <CaretRightOutlined rotate={isActive ? 90 : 0} />
                )}
                className="site-collapse-custom-collapse"
              >
                <Panel
                  header="Complete Profile"
                  key="1"
                  className="site-collapse-custom-panel"
                >
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil quos quis nam velit, sed et explicabo. Porro eos
                    voluptates qui!{" "}
                  </p>
                </Panel>
                <Panel
                  header="Search Vacancies"
                  key="2"
                  className="site-collapse-custom-panel"
                >
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Placeat rerum sequi dicta, praesentium ipsa dolores illum
                    quia voluptate eos eum!
                  </p>
                </Panel>
                <Panel
                  header="Apply Job"
                  key="3"
                  className="site-collapse-custom-panel"
                >
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa, inventore nulla? Sed enim architecto ab corporis nihil
                    eius tempore pariatur, iure eaque! Modi, porro ipsam.
                  </p>
                </Panel>
              </Collapse>
            </div>
          </div>
          <div
            style={bgImg}
            className={` border flex justify-center items-center`}
          >
            <button
              onClick={() => setOpen(true)}
              className=" py-1 px-4 bg-red-600 text-gray-200 rounded-sm"
            >
              <BsFillPlayFill></BsFillPlayFill>
            </button>
            <ModalPage open={open} setOpen={setOpen}></ModalPage>
          </div>
        </div>
              <Panel header="Complete Profile" key="1" className="site-collapse-custom-panel">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quos quis nam velit, sed et explicabo. Porro eos voluptates qui! </p>
              </Panel>
              <Panel header="Search Vacancies" key="2" className="site-collapse-custom-panel">

                <p>Lorem ipsum  dolor sit, amet consectetur adipisicing elit. Placeat rerum sequi dicta, praesentium ipsa dolores illum quia voluptate eos eum!</p>
              </Panel>
              <Panel header="Apply Job" key="3" className="site-collapse-custom-panel">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, inventore nulla? Sed enim architecto ab corporis nihil eius tempore pariatur, porro ipsam.</p>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat rerum sequi dicta, praesentium ipsa dolores illum quia voluptate eos eum!</p>
              </Panel>
              <Panel header="Apply Job" key="3" className="site-collapse-custom-panel">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, inventore nulla? Sed enim architecto ab corporis nihil eius tempore pariatur, iure eaque! Modi, porro ipsam.</p>
              </Panel>
            </Collapse>
          </div>
        </div>
        <div className='mt-10'>
          {/* eslint-disable-next-line react/no-unknown-property */}
          <iframe className={`${styles.how_it_work_img} w-full`} height="380" src="https://www.youtube.com/embed/77g4KA9WQL4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
