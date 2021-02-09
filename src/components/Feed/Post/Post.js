import { Avatar } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import React,{forwardRef} from 'react'
import './Post.css';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";


const  Post=forwardRef((props,ref)=> {
    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={props.avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>{props.displayName}{"  "}
                            <span className="post__headerSpecial">
                                {props.verified && <CheckCircleIcon className="post__badge" />}
                                @{props.username}
                            </span>
                           
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{props.text}</p>
                    </div>
                </div>
                <img src={props.image} alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
});

export default Post
