import React, { Component } from "react";
import "./App.css";
import CardList from "./components/cardlist";
import Search from "./components/search";
import { connect } from "react-redux";

import { setSearchAction, fetchDataAction } from "./components/redux/action";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchReducer.searchField,
    isPendding: state.fetchReducer.isPendding,
    robots: state.fetchReducer.robots,
    error: state.fetchReducer.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchAction(event.target.value)),
    onRequestRobots: () => dispatch(fetchDataAction())
  };
};

class Monster extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPendding } = this.props;
    const filterBox = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPendding ? (
      <h1 className="tc">Loading App .....</h1>
    ) : (
      <div className="monster">
        <Search searchChange={onSearchChange} />
        <CardList monster={filterBox} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Monster);
