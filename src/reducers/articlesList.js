import {
    HOME_PAGE_LOADED,
    HOME_PAGE_UNLOADED,
    SET_PAGE,
    APPLY_TAG_FILTER,
    CHANGE_ARTICLES_LIST,
    ARTICLE_LIKE,
    ARTICLE_UNLIKE,
} from '../actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case ARTICLE_LIKE:
        case ARTICLE_UNLIKE:
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
        case APPLY_TAG_FILTER:
            return {
                ...state,
                pager: action.pager,
                articles: action.payload.articles,
                articlesCount: action.payload.articlesCount,
                tab: null,
                tag: action.tag,
                currentPage: 0
            };
        case HOME_PAGE_LOADED:
            return {
                ...state,
                articles: action.payload[1].articles,
                articlesCount: action.payload[1].articlesCount,
                pager: action.pager,
                currentPage: 0,
            };
        case HOME_PAGE_UNLOADED:
            return {};
        case CHANGE_ARTICLES_LIST:
            return {
                ...state,
                articles: action.payload.articles,
                articlesCount: action.payload.articlesCount,
                tab: action.tab,
                pager: action.pager,
                currentPage: 0,
                tag: null
            };
        default:
            return state;
    }
};
