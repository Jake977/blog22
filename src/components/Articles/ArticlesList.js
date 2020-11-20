import React from 'react';
import userService from "../../services/userService";
import { connect } from 'react-redux';
import actionCreators from "../../actionCreators";
import ArticlesPreview from './ArticlesPreview';
import {Pagination, Spin} from 'antd';

const mapDispatchToProps = (dispatch) => ({
    onSetPage: (page, payload) =>
        dispatch(actionCreators.doSetPage(page, payload))
});

const ArticlesList = (props) => {
    //const articles = props.articles;
    const {articles, articlesCount, currentPage} = props;

    const onChange = (page, pageSize) => {
        if(props.pager) {
            props.onSetPage(page, props.pager(page, pageSize));
        } else {
            props.onSetPage(page, userService.articles.all(page, pageSize))
        }
    };

    if (!articles) {
        return (
            <div className="loadingPlaceHolder">
                <Spin tip="Loading..." size="large" />
            </div>
        );
    }

    if (articles.length === 0) {
        return (
            <div className="articlePreview">
                Have no articles yet
            </div>
        );
    }

    return (
        <div>
            <div>
            { articles.map( article => {
                    return (
                        <ArticlesPreview
                            key={article.slug}
                            article={article}
                        />
                    );
                })
            }
            </div>
            <div className="pagination">
                <Pagination
                    defaultCurrent={1}
                    current={currentPage}
                    onChange={(page, pageSize) => onChange(page, pageSize)}
                    total={articlesCount}
                    showSizeChanger
                    showQuickJumper
                />
            </div>
        </div>
    );
};

export default connect(() => ({}), mapDispatchToProps)(ArticlesList);
