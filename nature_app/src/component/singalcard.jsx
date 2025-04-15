import "./card.css"


function Singalcard (props) {
return (
    <div class="card">
    <div class="card-content">
      <div class="card-image">
        <div class="glow"></div>
        <i class="fas fa-crown fa-2x"></i>
      </div>
      <h2><i class="fas fa-star"></i>{props.name}</h2>
      <p>{props.discripson}</p>
      <button><i class="fas fa-arrow-right"></i> Learn More</button>
    </div>
  </div>
        )
}

export default Singalcard;