import {
    ARTICLE_PAGE_LOADED,
    ARTICLE_PAGE_UNLOADED,
    // ARTICLE_LIKE,
    // ARTICLE_UNLIKE,
} from '../actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        // case ARTICLE_LIKE:
        // case ARTICLE_UNLIKE:
        //     return {
        //         ...state,
        //         article: action.payload[0].article,
        //         favorited: action.payload[0].article.favorited,
        //         favoritesCount: action.payload[0].article.favoritesCount
        //     };

        case ARTICLE_PAGE_LOADED:
            return {
                ...state,
                article: action.payload[0].article,
            };
        case ARTICLE_PAGE_UNLOADED:
            return {};
        default:
            return state;
    }
};
