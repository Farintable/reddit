import React from "react";
import Post from './post'

export default class Posts extends React.Component{

    render(){

        const {loading, posts, error} = this.props;

        const postsTemplate = () => {

            return (
                <React.Fragment>
                    {posts.map((post, index) => {
                        return (
                            <Post key={index} data={post.data} />
                        )
                    })}
                </React.Fragment>
            )};

        const isLoading = loading ? <div>Загрузка</div> : null;
        const postRender = !loading ? postsTemplate() : null;
        const isError = error ? <div>Запрошенные посты не найдены</div> : null;



        return(
            <React.Fragment>
                {isError}
                {isLoading}
                {postRender}
            </React.Fragment>
        )
    }

}