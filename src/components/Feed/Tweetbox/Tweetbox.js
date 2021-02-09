import React,{useState} from 'react';
import "./Tweetbox.css";
import { Button,Avatar } from '@material-ui/core';
import db from "../../../firebase";


function Tweetbox() {
    const [tweetMessage,setTweetMessage]=useState('');
    const [tweetImage,setTweetImage]=useState('');
    const sendTweet=e=>{
        e.preventDefault();
        db.collection('posts').add({
            displayName:'Random User',
            username:'theRandomUser007',
            verified:true,
            text:tweetMessage,
            image:tweetImage,
            avatar:'https://image.winudf.com/v2/image1/Y29tLmJ1bnR5YXBweC5hdnRhcm1ha2VyX3NjcmVlbl8wXzE1NjM0OTUwODFfMDg3/screen-0.jpg?fakeurl=1&type=.jpg'
        });
        setTweetImage("");
        setTweetMessage("");
    };
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" />
                    <input value={tweetMessage} onChange={e=>setTweetMessage(e.target.value)} placeholder="What's happening?" type="text"></input>
                   
                </div>
                <input value={tweetImage} onChange={e=>setTweetImage(e.target.value)} placeholder="Optional:Enter image URL" className="tweetBox__imageInput" type="text"></input>
                <Button type="submit" onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox
