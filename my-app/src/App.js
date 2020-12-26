import React, { Component } from 'react';
import './App.css';
import CardList from './components/cardlist';
import Search from './components/search';
import {connect } from 'react-redux';

import {setSearchAction} from './components/redux/action';

const mapStateToProps = (state) => {
    return {
      searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchAction( event.target.value ))
    }
}

class Monster extends Component {
    constructor(){
        super()

        this.state = {
            monsters: [],
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => this.setState({ monsters: data }))
    }
   
  
    render() {
        const { monsters } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filterBox = monsters.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
         });
        return (
            <div className="monster">
                <Search searchChange={onSearchChange} />
                <CardList monster={filterBox} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Monster);