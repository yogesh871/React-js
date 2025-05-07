import "./card.css"
import Singalcard from "./singalcard";

function Card(props) {

    return (
        <div>
            <div class="container">
                <div class="card-grid">
                    <Singalcard name=" Premium Card" discripson=" device or apparatus used by a magician to achieve the illusion of magic in a trick" />
                    <Singalcard name= "Khushal"  discripson="deceive (an opponent) in a sports contest by means of a fak" />
                    <Singalcard name="Rahul"  discripson="one loop of a coil (as of ship's rope or a fire hose) coiled free for running"/>
                    <Singalcard name="Dhoni"  discripson="fake news, misinformation and hate rhetoric are causing harm to many individuals."/>
                </div>
            </div>
        </div>
    )
}

export default Card;