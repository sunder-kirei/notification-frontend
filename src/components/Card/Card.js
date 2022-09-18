import React from "react";
import "./styles/Card.css";

function Card(props) {
  const baseURL = "images";
  let isDescription = false;
  let typeMsg;
  if (props.type == "reaction") {
    typeMsg = " reacted to your post ";
  } else if (props.type == "follow") {
    typeMsg = " followed you ";
  } else if (props.type == "join") {
    typeMsg = " has joined your group ";
  } else if (props.type == "msg") {
    typeMsg = " sent you a private msg ";
    isDescription = true;
  } else if (props.type == "comment") {
    typeMsg = " commented on your picture ";
  } else if (props.type == "leave msg") {
    typeMsg = " left the group ";
  }

  return (
    <div
      className={props.isUnread ? `card bg-blue` : `card`}
      onClick={props.handleClick}
      data-key={props.user}
    >
      <div className="wrapper">
        <img src={`${baseURL}/${props.icon}`} alt="user icon" />
        <div className="notification">
          <div className="main">
            <span className="wrapper-span">
              <span className="user">{props.user}</span>
              <span className="type-body">{typeMsg}</span>
              <span className="target" id={props.type == "join" ? "yes" : "no"}>
                {props.msgTarget}
              </span>
            </span>
            {props.isUnread && <div className="unread"></div>}
          </div>
          <div className="timeStamp">{props.timestamp}</div>
        </div>
        {props.type == "comment" && (
          <img className="float" src={`${baseURL}/${props.targetImg}`} alt="" />
        )}
      </div>
      {isDescription && <div className="description">{props.description}</div>}
    </div>
  );
}

export default Card;
