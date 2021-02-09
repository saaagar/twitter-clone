import React from 'react'
import './Widgets.css';
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search"

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon/>
                <input placeholder="Search Twitter" type="text"/>
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1358658587644596224"}/>
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="elonmusk"
                option={{height:300}}
                />

                <TwitterShareButton url={"http://www.sagarmishra.com.np"} options={{text:"#reactjs is awesome",via:"saagarOfficial"}} />

            </div>
        </div>
    )
}

export default Widgets
