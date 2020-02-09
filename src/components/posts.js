import React from "react";
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';

export default class Posts extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){

        let posts = this.props.posts;
        let postsData = posts.data || [];
        let postDataChildren = postsData.children || [];

        return(
            <React.Fragment>
                {postDataChildren.map((post, index) => {
                    return (
                        <div key={index} style={{marginTop: '20px'}}>
                            <div style={{marginBottom: '10px'}}>{post.data.title}</div>
                            <div style={{marginBottom: '10px'}}>{ReactHtmlParser(ReactHtmlParser(post.data.selftext_html ? post.data.selftext_html.substring(0, 299) : null))}</div>
                            <div style={{marginBottom: '10px'}}>{post.data.author_fullname}</div>
                            <div style={{marginBottom: '10px'}}>{moment.unix(post.data.created).format('DD-MM-YYYY')}</div>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }

}