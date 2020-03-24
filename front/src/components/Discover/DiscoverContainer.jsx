import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Discover from "./Discover";
import { fetchAllFeeds } from "../../../redux/actions/feeds";

const DiscoverContainer = props => {
  const [inputValue, setInputValue] = useState("");
  const [allFeeds, setAllFeeds] = useState({
    feeds: [
      {
        group: "Marketplace",
        feeds: [
          {
            id: "1",
            name: "Pelotita 1",
            is_suscribed: "false"
          },
          {
            id: "2",
            name: "Pelotita 2",
            is_suscribed: "true"
          },
          {
            id: "3",
            name: "Pelotita 1",
            is_suscribed: "false"
          },
          {
            id: "4",
            name: "Pelotita 2",
            is_suscribed: "true"
          },
          {
            id: "5",
            name: "Pelotita 1",
            is_suscribed: "false"
          },
          {
            id: "6",
            name: "Pelotita 2",
            is_suscribed: "true"
          }
        ]
      },
      {
        group: "MercadoPago",
        feeds: [
          {
            id: "7",
            name: "Pelotita 3",
            is_suscribed: "false"
          },
          {
            id: "8",
            name: "Pelotita 4",
            is_suscribed: "true"
          }
        ]
      },
      {
        group: "MercadoEnvios",
        feeds: [
          {
            id: "9",
            name: "Pelotita 5",
            is_suscribed: "false"
          },
          {
            id: "10",
            name: "Pelotita 6",
            is_suscribed: "true"
          },
          {
            id: "11",
            name: "Pelotita 1",
            is_suscribed: "false"
          },
          {
            id: "12",
            name: "Pelotita 2",
            is_suscribed: "true"
          }
        ]
      },
      {
        group: "MercadoCredito",
        feeds: [
          {
            id: "13",
            name: "Pelotita 7",
            is_suscribed: "false"
          },
          {
            id: "14",
            name: "Pelotita 8",
            is_suscribed: "true"
          }
        ]
      },
      {
        group: "MercadoShops",
        feeds: [
          {
            id: "15",
            name: "Pelotita 9",
            is_suscribed: "false"
          },
          {
            id: "16",
            name: "Pelotita 10",
            is_suscribed: "true"
          },
          {
            id: "17",
            name: "Pelotita 1",
            is_suscribed: "false"
          },
          {
            id: "18",
            name: "Pelotita 2",
            is_suscribed: "true"
          }
        ]
      },
      {
        group: "MercadoLIibreAdvertising",
        feeds: [
          {
            id: "19",
            name: "Pelotita 11",
            is_suscribed: "false"
          },
          {
            id: "20",
            name: "Pelotita 12",
            is_suscribed: "true"
          }
        ]
      },
      {
        group: "MercadoLIibre",
        feeds: [
          {
            id: "21",
            name: "Pelotita 13",
            is_suscribed: "false"
          },
          {
            id: "22",
            name: "Pelotita 14",
            is_suscribed: "true"
          }
        ]
      },
      {
        group: "MercadoLIibre",
        feeds: [
          {
            id: "21",
            name: "Pelotita 13",
            is_suscribed: "false"
          },
          {
            id: "22",
            name: "Pelotita 14",
            is_suscribed: "true"
          }
        ]
      },
      {
        group: "MercadoLIibre",
        feeds: [
          {
            id: "21",
            name: "Pelotita 13",
            is_suscribed: "false"
          },
          {
            id: "22",
            name: "Pelotita 14",
            is_suscribed: "true"
          }
        ]
      },
      {
        group: "MercadoLIibre",
        feeds: [
          {
            id: "21",
            name: "Pelotita 13",
            is_suscribed: "false"
          },
          {
            id: "22",
            name: "Pelotita 14",
            is_suscribed: "true"
          }
        ]
      },
      {
        group: "MercadoLIibre",
        feeds: [
          {
            id: "21",
            name: "Pelotita 13",
            is_suscribed: "false"
          },
          {
            id: "22",
            name: "Pelotita 14",
            is_suscribed: "true"
          }
        ]
      },
      {
        group: "MercadoLIibre",
        feeds: [
          {
            id: "21",
            name: "Pelotita 13",
            is_suscribed: "false"
          },
          {
            id: "22",
            name: "Pelotita 14",
            is_suscribed: "true"
          }
        ]
      },
      {
        group: "MercadoLIibre",
        feeds: [
          {
            id: "21",
            name: "Pelotita 13",
            is_suscribed: "false"
          },
          {
            id: "22",
            name: "Pelotita 14",
            is_suscribed: "true"
          }
        ]
      },
      {
        group: "MercadoLIibre",
        feeds: [
          {
            id: "21",
            name: "Pelotita 13",
            is_suscribed: "false"
          },
          {
            id: "22",
            name: "Pelotita 14",
            is_suscribed: "true"
          }
        ]
      },
      {
        group: "MercadoLIibre",
        feeds: [
          {
            id: "21",
            name: "Pelotita 13",
            is_suscribed: "false"
          },
          {
            id: "22",
            name: "Pelotita 14",
            is_suscribed: "true"
          }
        ]
      }
    ]
  });

  //   useEffect(() => {
  //     if (Object.keys(allFeeds).length == 0) {
  //       props.fetchAllFeeds().then(feeds => setAllFeeds(feeds));
  //     } else {
  //       return;
  //     }
  //   }, [setAllFeeds]);

  const onChange = event => {
    let search = event.nativeEvent.text;
    setInputValue(search);
  };
  return <Discover feeds={allFeeds.feeds} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverContainer);
