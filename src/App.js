import React from "react";
import classNames from "classnames";

export default function App() {
  const [likesCounter, setLikesCounter] = React.useState(100);
  const [likesButton, setLikesButton] = React.useState(false);
  const [exe, setExe] = React.useState('')

  const doLike = () => {
    setLikesButton(!likesButton);
    setLikesCounter(likesButton ? 100 : 101);
  };

  let btnLikeClass = classNames("like-button", "like-button");
  let btnLikeCounter = classNames("likes-counter", "likes-counter");

  return (
    <div style={{ padding: 16 }}>
      <button
        onClick={() => doLike()}
        className={btnLikeClass}
        style={{ width: 150, flexDirection: "row", display: "flex" }}
      >
        {/* <div
        style={{
          display: 'flex',
          flexDirection: "row",
          alignItems : 'center'
        }}
        >

        </div> */}
        <img src={likesButton ? '/image/like-blue.svg' :  '/image/like-black.svg'} style={{ width: "20px", height: "20px", position: 'relative', top: '9px', left: '5px' }} />
        <p
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            color: likesButton ? "blue" : "black",
          }}
        >
          {likesButton ? "Liked" : "Like"}
        </p>
        <p style={{ display: "flex", color: likesButton ? "blue" : "black" }}>
          |
        </p>
        <p
          className={btnLikeCounter}
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            color: likesButton ? "blue" : "black",
          }}
        >
          {likesCounter}
        </p>
      </button>


    </div>
  );
}
