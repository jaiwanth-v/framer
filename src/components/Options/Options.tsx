import React, { useContext } from "react";
import "./Options.scss";
import { AppContext } from "../../Context/App.context";
import { ADD_ITEM } from "../../Reducer/types";

interface Props {}

const Options: React.FC<Props> = () => {
  const { dispatch } = useContext(AppContext);
  return (
    <div className="shadow rounded-lg h-75 p-4 mt-5">
      <h3 className="text-center p-2 mb-4">Options</h3>
      <div className="icons">
        <div className="d-flex flex-column text-center">
          <i
            onClick={() => {
              dispatch({ type: ADD_ITEM, payload: "image" });
            }}
            className="fas fa-images fa-2x"
          ></i>
          <small>Image</small>
        </div>
        <div className="d-flex flex-column text-center">
          <i
            onClick={() => {
              dispatch({ type: ADD_ITEM, payload: "text" });
            }}
            className="fas fa-font fa-2x"
          ></i>
          <small>Text</small>
        </div>
        <div className="d-flex flex-column text-center">
          <i
            onClick={() => {
              dispatch({ type: ADD_ITEM, payload: "paragraph" });
            }}
            className="fas fa-paragraph fa-2x"
          ></i>
          <small>Paragraph</small>
        </div>
        <div className="d-flex flex-column text-center">
          <i
            onClick={() => {
              dispatch({ type: ADD_ITEM, payload: "link" });
            }}
            className="fas fa-link fa-2x"
          ></i>
          <small>Link</small>
        </div>
        <div className="d-flex flex-column text-center">
          <i
            onClick={() => {
              dispatch({ type: ADD_ITEM, payload: "heading" });
            }}
            className="fas fa-heading fa-2x"
          ></i>
          <small>Heading</small>
        </div>
        <div className="d-flex flex-column align-items-center">
          <svg
            onClick={() => {
              dispatch({ type: ADD_ITEM, payload: "button" });
            }}
            width="2em"
            height="2.09em"
            viewBox="0 0 16 16"
            className="bi bi-bootstrap-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"
            />
          </svg>
          <small>Button</small>
        </div>
        <div className="d-flex flex-column text-center">
          <i
            onClick={() => {
              dispatch({ type: ADD_ITEM, payload: "hline" });
            }}
            className="fas fa-grip-lines fa-2x"
          ></i>
          <small>Horizontal Line</small>
        </div>
        <div className="d-flex flex-column text-center">
          <i
            onClick={() => {
              dispatch({ type: ADD_ITEM, payload: "vline" });
            }}
            className="fas fa-grip-lines-vertical fa-2x"
          ></i>
          <small>Vertical line</small>
        </div>
        <div className="d-flex flex-column text-center">
          <i
            onClick={() => {
              dispatch({ type: ADD_ITEM, payload: "checkbox" });
            }}
            className="fas fa-check-circle fa-2x"
          ></i>
          <small>Checkbox</small>
        </div>
        <div className="d-flex flex-column align-items-center">
          <svg
            onClick={() => {
              dispatch({ type: ADD_ITEM, payload: "input" });
            }}
            width="2em"
            height="2.09em"
            viewBox="0 0 16 16"
            className="bi bi-input-cursor-text"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5 2a.5.5 0 0 1 .5-.5c.862 0 1.573.287 2.06.566.174.099.321.198.44.286.119-.088.266-.187.44-.286A4.165 4.165 0 0 1 10.5 1.5a.5.5 0 0 1 0 1c-.638 0-1.177.213-1.564.434a3.49 3.49 0 0 0-.436.294V7.5H9a.5.5 0 0 1 0 1h-.5v4.272c.1.08.248.187.436.294.387.221.926.434 1.564.434a.5.5 0 0 1 0 1 4.165 4.165 0 0 1-2.06-.566A4.561 4.561 0 0 1 8 13.65a4.561 4.561 0 0 1-.44.285 4.165 4.165 0 0 1-2.06.566.5.5 0 0 1 0-1c.638 0 1.177-.213 1.564-.434.188-.107.335-.214.436-.294V8.5H7a.5.5 0 0 1 0-1h.5V3.228a3.49 3.49 0 0 0-.436-.294A3.166 3.166 0 0 0 5.5 2.5.5.5 0 0 1 5 2zm3.352 1.355zm-.704 9.29z"
            />
            <path d="M10 5h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4v1h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4v1zM6 5V4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v-1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4z" />
          </svg>
          <small>Input Form</small>
        </div>
        <div className="d-flex flex-column align-items-center">
          <svg
            onClick={() => {
              dispatch({ type: ADD_ITEM, payload: "dropdown" });
            }}
            width="2em"
            height="2.09em"
            viewBox="0 0 16 16"
            className="bi bi-menu-button-wide-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M14 7H2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM2 6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H2z"
            />
            <path
              fillRule="evenodd"
              d="M15 11H1v-1h14v1zM2 12.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0h-13zm1 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm9.927.427l.396.396a.25.25 0 0 0 .354 0l.396-.396A.25.25 0 0 0 13.396 2h-.792a.25.25 0 0 0-.177.427z"
            />
          </svg>
          <small>Select Dropdown</small>
        </div>
        <div className="d-flex flex-column text-center">
          <i
            onClick={() => {
              dispatch({ type: ADD_ITEM, payload: "radio" });
            }}
            className="fas fa-dot-circle fa-2x"
          ></i>
          <small>Radio Input</small>
        </div>
      </div>
    </div>
  );
};

export default Options;