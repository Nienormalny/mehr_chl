import React, { useState } from 'react';
import AlertCard from '../../../components/alert-card.component';
import { AlertBoxDataType, getAlertBoxData } from '../../../utils/alert.data';

const HeroSection = () => {
    const [alertsData, setAlertsData] = useState<AlertBoxDataType[]>(getAlertBoxData);
    const socialContacts = [
        {
            title: "facebook",
            url: "https://facebook.com",
            iconUrl: "assets/icons/icon-facebook.svg"
        },
        {
            title: "twitter",
            url: "https://twitter.com",
            iconUrl: "assets/icons/icon-twitter.svg"
        },
        {
            title: "e-mail",
            url: "info@email.com",
            iconUrl: "assets/icons/icon-mail.svg"
        }
    ]
    return <section id="hero">
        <img src={`assets/images/hero-cover-lg.png`} alt="Hero Cover - Smartphone" className="hero-cover"/>
        <div className="hero-blob-container">
            <div className="icon-box">
                <img src="assets/icons/icon-clock.svg" alt="Verschwenden Sie nicht Ihre Zeit" />
            </div>
            <h2 className="hero-blob-text">Wenn’s auf deiner Linie mal nicht läuft, erfährst du’s sofort.</h2>
            <button className="hero-blob-btn btn-primary">Jetzt kostenlos abonnieren</button>
        </div>
        <img src="assets/icons/red-bar.svg" alt="red bar" className="hero-red-bar"/>
        <div className="hero-alerts-container">
            {alertsData.map((alert: AlertBoxDataType, key: number) => <AlertCard {...alert} key={key} onClose={() => setAlertsData(old => old.filter((a, index) => key !== index))}/>)}
        </div>
        <div className="social-contacts-container">
            {socialContacts.map((contact, key) => <a href={contact.url} target="_blank" className="social-contact-box" key={key}>
                <img src={contact.iconUrl} alt={contact.title}/>
            </a>)}
        </div>
    </section>
}

export default HeroSection;