import { Input, message, Tooltip } from "antd";
import axios from "axios";
import dynamic from "next/dynamic";
import React, { useReducer, useState } from "react";
import { BsCheck2Square } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import "react-quill/dist/quill.snow.css"; // ES6
import useAuth from "../../hooks/useAuth";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];

const modules = {
  // #3 Add "image" to the toolbar
  toolbar: TOOLBAR_OPTIONS,
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "imageBlot", // #5 Optional if using custom formats
];

const editorMood = {
  editor: null,
};
const controlReducer = (state, action) => {
  switch (action.type) {
    case "ABOUT_EDIT":
      return { editor: (state.editor = "ABOUT_EDIT") };
      break;
    case "SKILLS_EDIT":
      return { editor: (state.editor = "SKILLS_EDIT") };
      break;
    case "EDUCATION_EDIT":
      return { editor: (state.editor = "EDUCATION_EDIT") };
      break;
    case "CLOSE_EDITOR":
      return { editor: (state.editor = null) };
      break;
    default:
      return state;
      break;
  }
};
// this is text area for input
const { TextArea } = Input;

const About = ({ id, education, skills, aboutt }) => {
  const { user } = useAuth();
  const [state, dispatch] = useReducer(controlReducer, editorMood);
  const [aboutBody, setAboutBody] = useState("");
  const [skillsBody, setSkillsBody] = useState("");
  const [educationBody, setEducationBody] = useState("");


  const handleAboutSubmit = e => {
    if (!aboutBody) {
      message.error("About field Must need to fill-up!");
      return;
    } else {
      axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/about/${id}`, {
        about: aboutBody,
      })
        .then(function (response) {
          message.success("About Update Successfully!")
          dispatch({ type: "CLOSE_EDITOR" })
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  const handleSkillsSubmit = e => {
    if (!skillsBody) {
      message.error("Skills field Must need to fill-up!");
      return;
    } else {
      axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/skills/${id}`, {
        skills: skillsBody,
      })
        .then(function (response) {
          message.success("Skills Update Successfully!")
          dispatch({ type: "CLOSE_EDITOR" })
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  const handleEducationSubmit = e => {
    if (!educationBody) {
      message.error("Education field Must need to fill-up!");
      return;
    } else {
      axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/education/${id}`, {
        education: educationBody,
      })
        .then(function (response) {
          message.success("Education Update Successfully!")
          dispatch({ type: "CLOSE_EDITOR" })
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  return (
    <div className="profile_about mt-4">
      <div>
        <ul className="box_list_ul">
          <li className="box_list_li">
            <div>
              <h3 className="text-3xl text-gray-800 font-medium pb-2 flex items-end">
                About
                <span
                  className="text-lg pl-3 cursor-pointer text-[#e83a3b]"
                  onClick={() => dispatch({ type: "ABOUT_EDIT" })}
                >
                  <Tooltip title="Edit About box, add something you self!">
                    <FiEdit />
                  </Tooltip>
                </span>
              </h3>
            </div>
            <div className="pb-4">
              {/* {state.editor === null && (<div>Hello</div>)} */}
              {state.editor === "ABOUT_EDIT" ? (
                <div className="shadow-md p-4">
                  <TextArea showCount maxLength={500} onChange={e => setAboutBody(e.target.value)} />
                  <div>
                    <button
                      className="text-xl mr-3 mt-3"
                      onClick={() => dispatch({ type: "CLOSE_EDITOR" })}
                    >
                      <IoMdClose />
                    </button>
                    <button onClick={handleAboutSubmit} className="text-xl mr-3 mt-3">
                      <BsCheck2Square />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="pl-3 html_parser_in_profile_about">
                  {aboutt}
                </div>
              )}
            </div>
          </li>
          <li className="box_list_li">
            <div>
              <h3 className="text-3xl text-gray-800 font-medium py-2 flex items-end">
                Skills{" "}
                <span
                  className="text-lg pl-3 cursor-pointer text-[#e83a3b]"
                  onClick={() => dispatch({ type: "SKILLS_EDIT" })}
                >
                  <FiEdit />
                </span>
              </h3>
            </div>
            <div className="pb-4">
              {/* {state.editor === null && (<div>Hello</div>)} */}
              {state.editor === "SKILLS_EDIT" ? (
                <div className="shadow-md p-4">
                  <TextArea
                    showCount
                    maxLength={500}
                    onChange={(e) => setSkillsBody(e.target.value)} />
                  <div>
                    <button
                      className="text-xl mr-3 mt-3"
                      onClick={() => dispatch({ type: "CLOSE_EDITOR" })}
                    >
                      <IoMdClose />
                    </button>
                    <button onClick={handleSkillsSubmit} className="text-xl mr-3 mt-3">
                      <BsCheck2Square />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="pl-3 html_parser_in_profile_about">
                  {skills}
                </div>
              )}
            </div>
          </li>
          <li className="box_list_li">
            <div>
              <h3 className="text-3xl text-gray-800 font-medium py-2 flex items-end">
                Eduction{" "}
                <span
                  className="text-lg pl-3 cursor-pointer text-[#e83a3b]"
                  onClick={() => dispatch({ type: "EDUCATION_EDIT" })}
                >
                  <FiEdit />
                </span>
              </h3>
            </div>
            <div className="pb-4">
              {/* {state.editor === null && (<div>Hello</div>)} */}
              {state.editor === "EDUCATION_EDIT" ? (
                <div>
                  <TextArea
                    showCount
                    maxLength={500}
                    onChange={(e) => setEducationBody(e.target.value)}
                  />
                  <div className="shadow-md p-4">
                    <button
                      className="text-xl mr-3 mt-3"
                      onClick={() => dispatch({ type: "CLOSE_EDITOR" })}
                    >
                      <IoMdClose />
                    </button>
                    <button onClick={handleEducationSubmit} className="text-xl mr-3 mt-3">
                      <BsCheck2Square />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="pl-3 html_parser_in_profile_about">
                  {education}
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
