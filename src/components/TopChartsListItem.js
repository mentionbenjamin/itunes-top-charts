import React from 'react';

const TopChartsListItem = (props) => {
  if (!props.selectedSong) return null;


  return (
    <div>
      <h2> Name: {props.selectedSong.title.label}</h2>
    </div>
  )
}

export default TopChartsListItem;
