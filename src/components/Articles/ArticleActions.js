import { Link } from 'react-router-dom';
import React from 'react';
import userService from "../../services/userService";
import { connect } from 'react-redux';
import actionCreators from "../../actionCreators";
import { Button } from "antd";
import {store} from "../../store";
import {push} from "react-router-redux";

const mapDispatchToProps = dispatch => ({
    onClickDelete: payload =>
        dispatch(actionCreators.doArticleDelete(payload)),
});

const ArticleActions = props => {
    const article = props.article;
    const del = () => {
        props.onClickDelete(userService.articles.del(article.slug));
        store.dispatch(push(`/`));
    };

    return (
        <div className="articlePage__buttons">
            <Link to={`/article/${article.slug}/edit`}>
                <Button className="actionBtn">Edit</Button>
            </Link>
            <Button className="actionBtn" onClick={del} danger>Delete</Button>
        </div>
    );
};

export default connect(() => ({}), mapDispatchToProps)(ArticleActions);

