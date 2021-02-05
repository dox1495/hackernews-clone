import React from 'react';
import ShowMore from "./ShowMore"

const News = (props) => {
    return (
        <div className="news-div">
            <p>{props.title}</p>
            <button onClick={props.handleClick}>{props.showMore ? "Show less" : "Show more!"}</button>
            <br></br>
            {props.showMore && <ShowMore/>}
        </div>
    )
}

export default News;