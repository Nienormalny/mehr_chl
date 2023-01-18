import React from 'react';

const AlertCard = (props: AlertCardProps) => {
    const {bgColor, title, description, iconUrl, onClose, key} = props;

    return <div className="alert-card-container" style={{backgroundColor: bgColor}} key={key}>
        <img src={iconUrl} alt={title} className="alert-card-icon" />
        <div className="alert-card-info-container">
            <p className="alert-card-title">{title}</p>
            <p className="alert-card-description">{description}</p>
        </div>
        <img src="assets/icons/icon-close.svg" alt="close" className="alert-card-close-btn" onClick={onClose}/>
    </div>
}

type AlertCardProps = {
    bgColor: string;
    title: string;
    description: string;
    iconUrl: string;
    onClose?: () => void;
    key?: string | number;
}

export default AlertCard;