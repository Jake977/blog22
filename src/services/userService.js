import superagent from 'superagent';

const API_URL = 'https://conduit.productionready.io/api';
const defaultPageSize = 10; //default articles number per page

const responseBody = (res) => res.body;
let token = null;

const tokenPlugin = (req) => {
    if (token) {
        req.set('authorization', `Token ${token}`);
    }
};

const authorization = {
    current: () =>
        requests.get('/user'),
    login: (email, password) =>
        requests.post('/users/login', { user: { email, password } }),
    signup: (username, email, password) =>
        requests.post('/users', { user: { username, email, password } }),
};

const requests = {
    del: url =>
        superagent.del(`${API_URL}${url}`).use(tokenPlugin).then(responseBody),
    get: url =>
        superagent.get(`${API_URL}${url}`).use(tokenPlugin).then(responseBody),
    put: (url, body) =>
        superagent.put(`${API_URL}${url}`, body).use(tokenPlugin).then(responseBody),
    post: (url, body) =>
        superagent.post(`${API_URL}${url}`, body).use(tokenPlugin).then(responseBody)
};

const tags = {
    getTags: () => requests.get('/tags')
};

const limit = (count, page) => `limit=${count}&offset=${page ? page * count : 0}`;
const omitSlug = (article) => Object.assign({}, article, { slug: undefined });

const articles = {
    all: (page, pageSize = defaultPageSize) =>
        requests.get(`/articles?${limit(pageSize, page)}`),
    get: slug =>
        requests.get(`/articles/${slug}`),
    create: article =>
        requests.post('/articles', { article }),
    update: article =>
        requests.put(`/articles/${article.slug}`, { article: omitSlug(article) }),
    del: slug =>
        requests.del(`/articles/${slug}`),
    favorite: slug =>
        requests.post(`/articles/${slug}/favorite`),
    unfavorite: slug =>
        requests.del(`/articles/${slug}/favorite`),
};

export default {
    authorization,
    articles,
    tags,
    setToken: _token => { token = _token; }
};
