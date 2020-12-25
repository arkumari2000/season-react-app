import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: 'Not a good Season, it is summer',
        iconName: 'sun'
    },
    winter: {
        text: 'I love winters, it is my favourite season',
        iconName: 'snowflake'
    }
};
 
const getSeason = (lat,month) => {
    if(month>2 && month<9){
        return lat > 0 ? 'summer' : 'winter';
    } else{
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) =>{
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName} = seasonConfig[season]
    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon-left massive icon`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon-right massive icon`} />
        </div>
    ); 
};

export default SeasonDisplay;