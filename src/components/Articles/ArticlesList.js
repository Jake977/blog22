import React from 'react';
import userService from "../../services/userService"; //
import { connect } from 'react-redux'; //
import ArticlesPreview from './ArticlesPreview';
import ArticlesPagination from "./ArticlesPagination";
import {Pagination} from 'antd';
import '../../css/loadspiner.css';
import actionCreators from "../../actionCreators";

///
const mapDispatchToProps = (dispatch) => ({
    onSetPage: (page, payload) =>
        dispatch(actionCreators.doSetPage(page, payload))
});
///

const ArticlesList = (props) => {
    const articles = props.articles;
    const {pager, articlesCount, currentPage, isUserLoggedIn} = props;
    console.log('pager', pager);

    ///
    const setPage = (page) => {
        if(props.pager) {
            props.onSetPage(page, props.pager(page));
        } else {
            props.onSetPage(page, userService.articles.all(page))
        }
    };
    ///

    if (!articles) {
        return (
            <div className="articlePreview">
                <div className="loadingPlaceHolder">
                    Loading
                    <div className="spinner">
                        <div className="bounce1" />
                        <div className="bounce2" />
                        <div className="bounce3" />
                    </div>
                </div>
            </div>
        );
    }

    if (articles.length === 0) {
        return (
            <div className="articlePreview">
                Have no articles
            </div>
        );
    }

    return (
        <div>
            { articles.map(article => {
                    return (
                        <ArticlesPreview
                            key={article.slug}
                            article={article}
                            isUserLoggedIn={isUserLoggedIn}
                        />
                    );
                })
            }

            <Pagination
                defaultCurrent={1}
                current={currentPage}
                onChange={setPage(currentPage)}
                total={articlesCount}
            />

            {/*<ArticlesPagination*/}
            {/*    pager={pager}*/}
            {/*    articlesCount={articlesCount}*/}
            {/*    currentPage={currentPage}*/}
            {/*/>*/}
        </div>
    );
};

export default connect(() => ({}), mapDispatchToProps)(ArticlesList);

//export default ArticlesList;
