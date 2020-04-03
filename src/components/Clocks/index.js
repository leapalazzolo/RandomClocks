import React from "react";
import ClockTimezone from "../Clock";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

export default class Clocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: false,
      items: [],
      classes: {
        root: {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          overflow: "hidden",
        },
        gridList: {
          width: 300,
          height: 300,
        },
      },
    };
  }

  fetchTimeZones() {
    fetch(`http://worldtimeapi.org/api/timezone`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          items: data,
          isLoading: false,
        });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }
  componentDidMount() {
    this.fetchTimeZones();
  }
  render() {
    const { isLoading, items, error, classes } = this.state;
    const newItems = items.sort(() => Math.random() - 0.5).filter((timezone) => timezone.includes("/")).slice(1,9);
    return (
      <React.Fragment>
        <h2>Clocks</h2>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          <div className={classes.root}>
            <GridList cellHeight={300} className={classes.gridList} cols={4}>
              {newItems.map((timezone) => (
                <GridListTile key={timezone} cols={1}>
                  <p align="justify">Timezone: {timezone}</p>
                  <ClockTimezone timezone={timezone} />
                </GridListTile>
              ))}
            </GridList>
          </div>
        ) : (
          // If there is a delay in data, let's let the user know it's loading
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    );
  }
}
