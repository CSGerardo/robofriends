import React, {Component} from "react";
import { connect } from "react-redux";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundary from "../Components/ErrorBoundary";
import "./App.css";

import { requestRobots, setSearchField } from "../actions.js";

const mapStateToProps=state=>{
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    };
};

const mapDispatchToProps=(dispatch)=>{
    return {
        onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
        onRequestRobots:()=>dispatch(requestRobots())
    };
};

class App extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //         robots: []
    //         // searchfield:""
    //     };
    // }

    // onSearchChange=(event)=>{
    //     this.setState({searchfield: event.target.value});
    // };

    render(){
        const { searchField, onSearchChange, robots, isPending }=this.props;
        const filteredRobots=robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return isPending ?
            <h1>Loading</h1> :
            (
                <div className="tc">
                    <h1 className="f2">RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    };

    componentDidMount(){
        this.props.onRequestRobots();
        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then(response=>response.json())
        // .then(users=>this.setState({robots: users}));
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);