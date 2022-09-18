// eslint-disable-next-line
import React, { ChangeEvent, useEffect, useState } from "react";
import Cardlist from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { getData } from "./utils/data.utils";

import "./App.css";

export type Monster = {
    id: string;
    name: string;
    email: string;
}

function App() {
    
    const [searchField, setSearchField] = useState("");
    const [monsters, setMonsters] = useState<Monster[]>([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    console.log(searchField);

    useEffect(() => {
        // Fetch monster data -- uncomment for fetch without typescript version
        // fetch('http://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then((users) => setMonsters(users));
        const fetchUsers = async() => {
            const users = await getData<Monster[]>('http://jsonplaceholder.typicode.com/users');
            setMonsters(users);
        }

        fetchUsers();

    }, [])  // run this piece of code only once when monsters array is empty i.e., the first time

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    }

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });

        setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchField]);    // run this piece of code iff state of monsters or searchField changes

    return (
        <div className="container">
            <h1 className="app-title">Monsters Inc.</h1>
            <SearchBox 
                className="monster-search-box" 
                onChangeHandler={onSearchChange} 
                placeholder='search monsters' />
            <Cardlist filteredMonsters={filteredMonsters} />
         </div>
    );
}

//Class Component

// class App extends Component {
//     constructor() {
//         super();

//         this.state = {
//             monsters: [],
//             targetMonster: ""
//         };
//     }

//     componentDidMount() {
//         fetch('http://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then((users) => this.setState(() => {
//             return { monsters: users};
//         }, () => {
//             console.log(this.state);
//         }));
//     }

//     onSearchChange = (event) => {
//         const searchField = event.target.value.toLocaleLowerCase();
//         this.setState(() => {
//             return { targetMonster: searchField };
//         })
//     }

//     render() {

//         const { monsters,targetMonster } = this.state;
//         const { onSearchChange } = this;

//         const filteredMonsters = monsters.filter((monster) => {
//             return monster.name.toLocaleLowerCase().includes(targetMonster);
//         });

//         return (
//             <div className="container">
//             <h1 className="app-title">Monsters Inc.</h1>
//             <SearchBox onChangeHandler={onSearchChange} />
//             <Cardlist filteredMonsters={filteredMonsters} />
//           </div>
//         );
//     }
// }

export default App;