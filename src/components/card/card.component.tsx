import { Monster } from "../../App";

import "./card.styles.css";

type CardProp = {
    monster: Monster;
}

function Card({ monster }: CardProp) {
    const { id, name, email } = monster;
    
    return (
        <div className="card-container" key={id}>
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );  
}
// Class Component

// class Card extends Component {
//     render() {
//         const { name,id,email } = this.props;
//         return (
//             <div className="card-container" key={id}>
//                 <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         );
//     }
// }

export default Card;