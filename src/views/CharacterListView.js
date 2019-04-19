import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {getCharacters} from '../actions/index'
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    return (this.props.getCharacters())
  }

  render() {
    console.log("CharacterListViewProps:", this.props)
    if (this.props.fetching) {
      <p>Fetching data...</p>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters
});

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps, {getCharacters}
)(CharacterListView);
