import {
    HOME_PAGE_LOADED,
    HOME_PAGE_UNLOADED,
    SET_PAGE,
    ARTICLE_LIKE,
    ARTICLE_UNLIKE,
} from '../actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case ARTICLE_LIKE:
        case ARTICLE_UNLIKE:
            // return {
            //     ...state,
            //     article: article => {
            //         console.log('qewqew444', article);
            //         if (article.slug === action.payload.article.slug) {
            //             return {
            //                 ...article,
            //                 favorited: action.payload.article.favorited,
            //                 favoritesCount: action.payload.article.favoritesCount
            //             };
            //         }
            //         return article;
            //     }
            // };

            return {
                ...state,
                articles: state.articles.map(article => {
                        if (article.slug === action.payload.article.slug) {
                            return {
                                ...article,
                                favorited: action.payload.article.favorited,
                                favoritesCount: action.payload.article.favoritesCount
                            };
                        }
                        return article;
                })
            };

        case SET_PAGE:
            return {
                ...state,
                articles: action.payload.articles,
                articlesCount: action.payload.articlesCount,
                currentPage: action.page
            };
        case HOME_PAGE_LOADED:
            return {
                ...state,
                articles: action.payload[1].articles,
                articlesCount: action.payload[1].articlesCount,
                currentPage: 1,
            };
        case HOME_PAGE_UNLOADED:
            return {};
        default:
            return state;
    }
};
