import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField, requestRobots } from '../actions';
import Header from '../components/Header';

import './App.css';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField, 
        robots: state.requestRobots.robots,
        pending: state.requestRobots.pending,
        error: state.requestRobots.error
    }
};

const mapDispatchToProps = (dispatch) => ({
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
});

class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, pending } = this.props;
        debugger;
        const filteredRobots = robots.filter((robot => robot.name.toLowerCase().includes(searchField.toLowerCase())));
        return pending ?
            <h1>Robots Activating</h1> :
            <div className='tc'>
                <Header />
                <SearchBox searchChange = {onSearchChange}/>   
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots = {filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);