import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Feeds from "./Feeds";
import { fetchAllFeeds } from "../../../redux/actions/feeds";

const FeedsContainer = props => {
  const [inputValue, setInputValue] = useState("");
  const [allFeeds, setAllFeeds] = useState({});

  useEffect(() => {
    if (Object.keys(allFeeds).length == 0) {
      props.fetchAllFeeds().then(feeds => setAllFeeds(feeds));
    } else {
      return; 
    }
  }, [setAllFeeds]);

  const onChange = event => {
    let search = event.nativeEvent.text;
    setInputValue(search);
  };
  return <Feeds feeds={allFeeds ? allFeeds.feeds : {}} onChange={onChange} />;
};
const mapStateToProps = function(state, ownProps) {
  return {};
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    fetchFeeds: search => dispatch(fetchFeeds(search)),
    fetchAllFeeds: () => dispatch(fetchAllFeeds())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedsContainer)
