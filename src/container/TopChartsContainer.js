import React from 'react';
import TopChartsList from '../components/TopChartsList.js';
import TopChartsListItem from '../components/TopChartsListItem.js';

class TopChartsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: [],
      selectedSong: null,
    };
    this.handleSongSelected = this.handleSongSelected.bind(this);
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    fetch(url)
     .then((res) => {
       return res.json();
     })
     .then((data) => {
       this.setState({ song: data});
       console.log(data);
     })
  }

  handleSongSelected(index) {
    const selectedSong = this.state.song[index];
    this.setState({selectedSong: selectedSong});
  }

  render(){
    return (
      <div>
        <h2>Itunes</h2>
        <TopChartsList
          song={this.state.song}
          onCharacterSelected={this.handleSongSelected}
        />
        <TopChartsListItem selectedSong={this.state.selectedSong} />
      </div>
    );
  }


}

export default TopChartsContainer;
