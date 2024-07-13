import React, {Component} from "react";

import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundary from "../Components/ErrorBoundary";
import Header from "../Components/Header";
import "./MainPage.css";

class MainPage extends Component{
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

    filteredRobots=()=>{
        return this.props.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        });
    };

    render(){
        const { onSearchChange, isPending }=this.props;

        return ( 
                <div className="tc">
                    <Header/>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        { isPending ? <h1>Loading</h1> :
                        <ErrorBoundary>
                            <CardList robots={this.filteredRobots()}/>
                        </ErrorBoundary>
                        }   
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

export default MainPage;
