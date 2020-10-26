import React from 'react';
import MainView from "./MainView";
import { connect } from 'react-redux';
import actionCreators from "../../actionCreators";
import userService from "../../services/userService";

const Promise = global.Promise;

const mapStateToProps = (state) => ({
    ...state.home,
    token: state.mainstate.token,
});

const mapDispatchToProps = dispatch => ({
    onLoad: (articlesFilter, pager, payload) =>
        dispatch(actionCreators.doHomeLoaded(pager, payload)),
    onUnload: () =>
        dispatch(actionCreators.doHomeUnloaded()),
});

class Home extends React.Component {

    componentDidMount()  {
        const articlesFilter = 'all';
        const articlesPromise = userService.articles.all;
        this.props.onLoad(
            articlesFilter, articlesPromise, Promise.all([userService.tags.getTags(), articlesPromise()])
        );
    }

    componentWillUnmount() {
        this.props.onUnload();
    }

    render() {
        return (
            <div className="articlesContainer">
                <MainView />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
