import React, { Component } from "react";
import giphy from "giphy-api";
import SearchBar from "./search-bar";
import Gif from "./gif";
import GiftList from "./gif-list";

const apiKey = "vfNVG5yQ3Xo1NnTZXdeNKBSvDjMxCnIr";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      selectedGifId: 'xT9IgDEI1iZyb2wqo8'
    };
  }

  search = (query) => {
    giphy(apiKey).search(
      {
        q: query,
        rating: "g",
        limit: 4
      },
      (err, res) => {
        this.setState({ list: res.data });
      }
    );
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GiftList selectGif={this.selectGif} gifs={this.state.list} />
        </div>
      </div>
    );
  }
}

export default App;
