import React from 'react';
import ArticlesPreview from './ArticlesPreview';
import ArticlesPagination from "./ArticlesPagination";
import '../../css/loadspiner.css';

const ArticlesList = (props) => {
    const articles = props.articles;
    const {pager, articlesCount, currentPage, isUserLoggedIn} = props;

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
            <ArticlesPagination
                pager={pager}
                articlesCount={articlesCount}
                currentPage={currentPage}
            />
        </div>
    );
};

export default ArticlesList;
