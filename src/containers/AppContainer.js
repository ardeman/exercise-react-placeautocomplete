import React from "react";
import SearchBar from "../components/SearchBar";
import SearchHistory from "../components/SearchHistory";
import { addPlace } from "../actions/placesActions";
import { connect } from "react-redux";

const AppContainer = ({ searchHistory, dispatchAddPlace }) => {
  const handleSearch = (place) => {
    dispatchAddPlace(place);
  };

  return (
    <div style={{ padding: "0 50px" }}>
      <h1>Google Places Demo</h1>
      <SearchBar onSearch={handleSearch} />
      <SearchHistory history={searchHistory} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchHistory: state.searchHistory,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchAddPlace: (place) => dispatch(addPlace(place)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
