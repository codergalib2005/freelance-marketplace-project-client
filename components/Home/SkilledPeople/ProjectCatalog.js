import React from "react";

const ProjectCatalog = () => {
  return (
    <>
      <div className="grid justify-items-center">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <ul>
              <li>Blockchain</li>
              <li>Node.js</li>
              <li>Vue.js</li>
              <li>HR consulting</li>
              <li>Microsoft Power BI</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Instructional design</li>
              <li>React.js</li>
              <li>Videographers</li>
              <li>HTML5 Developers</li>
              <li>Ghostwriters</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Unity 3D Developers</li>
              <li>Business Consultants</li>
              <li>Coders</li>
              <li>Marketing Consultants</li>
              <li>Web Developers</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCatalog;
