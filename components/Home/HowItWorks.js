import React from 'react';
import styles from '../../styles/HowItWork.module.css';

import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
const { Panel } = Collapse;

const HowItWorks = () => {

  return (
    <section className={`p-12 ${styles.how_it_work_container}`}  >
      <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  gap-12 '>
        <div>
          <p className='text-cyan-500 text-xl font-light'>How It's Work</p>
          <h2 className='text-4xl font-semibold font-sans mt-2'>Start Find  a job You Love <br /> With Us Easily </h2>

            <div className='collaps-container mt-6'>

              <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                className="site-collapse-custom-collapse"
              >
                <Panel header="Complete Profile" key="1" className="site-collapse-custom-panel">
                  <p> Lorem20      </p>
                </Panel>
                <Panel header="Search Vacancies" key="2" className="site-collapse-custom-panel">
                  <p>  Lorem if some 20</p>
                </Panel>
                <Panel header="Apply Job" key="3" className="site-collapse-custom-panel">
                  <p> lorem 30 </p>
                </Panel>
              </Collapse>

            </div>

        </div>
        <div className='mt-10'>
          <iframe className={`${styles.how_it_work_img}`} width="480" height="380" src="https://www.youtube.com/embed/77g4KA9WQL4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;