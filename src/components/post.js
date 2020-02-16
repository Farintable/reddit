import React from 'react';
import ReactHtmlParser from "react-html-parser";
import moment from "moment";

export default class Post extends React.Component{

    render(){

        const { data } = this.props;

        return(
            <div style={{marginTop: '20px'}}>
                <a target={'blank'} href={data.url} style={{marginBottom: '10px'}}>{data.title}</a>
                <div style={{marginBottom: '10px'}}>{ReactHtmlParser(ReactHtmlParser(data.selftext_html ? data.selftext_html.substring(0, 299) : null))}</div>
                <div style={{marginBottom: '10px'}}>{data.author_fullname}</div>
                <div style={{marginBottom: '10px'}}>{moment.unix(data.created).format('DD-MM-YYYY')}</div>
            </div>
        )

    }
}