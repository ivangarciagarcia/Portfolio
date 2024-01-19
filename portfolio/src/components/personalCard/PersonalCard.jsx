import "./personalCard.css";

export const PersonalCard = () => {
    return(
      <img className="my-photo" src={process.env.PUBLIC_URL + "/img/myself.jpg"} alt="myself"/>
    );
}