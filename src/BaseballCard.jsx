import { useState } from "react"

function BaseballCard(props) {
    const [showPicture, setShowPicture] = useState(true)
    const toggleCard = () => {
        setShowPicture(!showPicture)}

    if (showPicture) {
        return (
        <div className="card" onClick={toggleCard}>
            <h2>{props.name}</h2>
            <img src={props.imgUrl} alt={props.name} />
        </div>
        );
    } else {
        const statsDisplay = Object.entries(props.stats).map(([statsName, statsValue]) => (
            <p key={statsName}>
                {statsName}:{statsValue}
            </p>
        ));

        return (
            <div className="card" onClick={toggleCard}>
                <h2>{props.name}</h2>
                <p>{props.team}</p>
                <p>{props.position}</p>
                {statsDisplay}
            </div>
        )
    }

    // return (
    //   <div className="card">
    //     <h2>{props.name}</h2>
    //     <img src={props.imgUrl} alt={props.name} />
    //   </div>
    // );
}

  export default BaseballCard