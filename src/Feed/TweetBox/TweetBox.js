import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";  // Ensure Firebase Firestore methods are imported
import "./TweetBox.css";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "posts"), {
        username: "kpierce11",
        displayName: "Keira Pierce",
        avatar: "https://avatarfiles.alphacoders.com/183/183861.jpg",  // Replace with the correct avatar URL
        verified: true,
        text: tweetMessage,
        image: tweetImage,
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://avatarfiles.alphacoders.com/183/183861.jpg" />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          placeholder="Optional: Enter image URL"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          type="text"
          className="tweetBox__imageInput"
        />
        <Button onClick={sendTweet} type="submit" className="tweetBox__button">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;