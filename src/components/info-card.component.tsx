import React, { useEffect } from 'react';

const InfoCard = (props: InfoCardProps) => {
    const {title, description, iconUrl, key} = props;
    useEffect(() => {
        console.log(iconUrl);
    }, [])
    return <div className="info-card-container" key={key}>
        <div className="icon-box">
            <img src={iconUrl} alt={title} />
        </div>
        <div className="info-card-details-container">
            <p className="info-card-title">{title}</p>
            <p className="info-card-description">{description}</p>
        </div>
        <img src="assets/icons/red-bar.svg" alt="Red bar" className="info-card-bottom"/>
    </div>
}

type InfoCardProps = {
    title: string;
    description: string;
    iconUrl: string;
    key?: string | number;
}

export default InfoCard;