import React from "react";
import { Monster } from "../../App";
import Card from "../card/card.component";

import "./card-list.styles.css";

type CardListProps = {
    filteredMonsters: Monster[];
}

function Cardlist({ filteredMonsters }: CardListProps) {
    return (
        <div className="card-list">
            { filteredMonsters.map(monster => {
                return ( <Card key={monster.id} monster={monster} />);
            }) }
        </div>
    );   
}

// Class Component

// class Cardlist extends Component {
//     render() {
//         const { filteredMonsters } = this.props;
        
//         return (
//             <div className="card-list">
//                 { filteredMonsters.map(monster => {
//                     const { name,email,id } = monster;
//                     return ( <Card name={name} email={email} id={id} />);
//                 }) }
//             </div>
//         );
//     }
// }

export default Cardlist;
