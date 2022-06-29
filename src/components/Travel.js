import locmark from "../images/loc.png";

export default function Travel(props) {
  return (
    <div className="Travel">
      <div className="image-div">
        <img src={props.item.image} className="travel-image"></img>
      </div>
      <div className="content-div">
        <h3 className="country">
          <img src={locmark} className="locmark" />
          {props.item.country.toUpperCase()}
        </h3>
        <h2 className="name">{props.item.name}</h2>
        <p className="date">{props.item.date}</p>
        <p className="description">{props.item.description}</p>
      </div>
    </div>
  );
}
