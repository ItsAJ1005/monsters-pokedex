// import { Component } from "react";
import './card-list.css'
import Card from "../card/cardComponent";


const CardList = (props) => {

    const { monsters } = props;

    return (
        <div className="card-list">
            {monsters.map(monster => {

                return (
                    <Card monster={monster}/>
                )
            })}
        </div>
    )
}

// class CardList extends Component {
//     render() {

//         const { monsters } = this.props;

//         return (
//             <div className="card-list">
//                 {monsters.map(monster => {

//                     return (
//                         <Card monster={monster}/>
//                     )
//                 })}
//             </div>
//         )
//     }
// }

export default CardList;