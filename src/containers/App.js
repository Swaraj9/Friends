import React, {Component}  from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from "../components/Scroll"
import ErrorBoundry from '../components/ErrorBoundry';  
import "./App.css";
import { robots } from '../robots';


class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        };
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => {return response.json()})
    //     .then(robots =>{this.setState({robots: robots})});
        
    //   }

    onSearchChange = (event) => { 
        this.setState({ searchfield: event.target.value})
    }
    render(){
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ? 
           <h1>Loading</h1> :
         (
                <div className='tc'>
                    <div className='header'>
                        <h1 className='f1'>RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                    </div>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        } 
    }
    

export default App;
