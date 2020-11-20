import { Link } from 'react-router-dom';
import React from 'react';
import userService from "../../services/userService";
import { connect } from 'react-redux';
import actionCreators from "../../actionCreators";
import { Button } from "antd";
import { store } from "../../store";
import { push } from "react-router-redux";
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';

const mapDispatchToProps = dispatch => ({
    onClickDelete: payload =>
        dispatch(actionCreators.doArticleDelete(payload)),
});

const ArticleActions = props => {
    const { article } = props;
    const del = () => {
        props.onClickDelete(userService.articles.del(article.slug));
        store.dispatch(push(`/`));
    };

    return (
        <div className="articlePage__buttons">
            <Link to={`/article/${article.slug}/edit`}>
                <Button
                    className="actionBtn"
                    type="primary"
                    icon={<EditTwoTone />}
                    ghost
                >
                    Edit
                </Button>
            </Link>
            <Button
                className="actionBtn"
                onClick={del}
                icon={<DeleteTwoTone twoToneColor={'red'} />}
                danger
            >
                Delete
            </Button>
        </div>
    );
};

export default connect(() => ({}), mapDispatchToProps)(ArticleActions);

