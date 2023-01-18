export const alertBoxData: AlertBoxDataType[] = [
    {
        title: "E-Mail Abo einrichten",
        description: "Alle Infos via E-Mail erhalten.",
        iconUrl: "assets/icons/icon-copy-mail.svg",
        bgColor: "#E87664",
    },
    {
        title: "Jetzt Notify-Abo einrichten",
        description: "Alle Infos per Notify direkt aufs Smartphone erhalten",
        iconUrl: "assets/icons/icon-copy-notify.svg",
        bgColor: "#C9DC89",
    },
    {
        title: "Web-Push",
        description: "Jetzt Web-Push-Abo einrichten",
        iconUrl: "assets/icons/icon-copy-webabo.svg",
        bgColor: "#D3DCE6",
    }
]

export type AlertBoxDataType = {
    title: string;
    description: string;
    iconUrl: string;
    bgColor: string;
}

export const getAlertBoxData = ():AlertBoxDataType[] => alertBoxData;