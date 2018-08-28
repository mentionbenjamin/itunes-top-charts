import React from 'react';

const TopChartsList = (props) => {

  function handleChange(event) {
    props.onSongSelected(event.target.value);
  }

  console.log(props.song);

  const options = props.song.map((song, index) => {
    return <option value={index} key={index}>
              {song['im:name'].label}
           </option>
  });

  return (<select
            id="song-selected"
            defaultValue="default"
            onChange={handleChange}
            >
              <option disabled value="default">
                Choose a song...
              </option>
              {options}
            </select>)

}

export default TopChartsList;
