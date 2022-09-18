import React from 'react';
import { ChangeEvent } from 'react';

import "../search-box/search-box.styles.css";

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

function SearchBox({ className, placeholder, onChangeHandler }: SearchBoxProps) {
    
    return (
        <input 
            className="search-box" 
            type="search" 
            placeholder="search monsters" 
            onChange={onChangeHandler}
        />
    ); 
}

// Class Component

// class SearchBox extends Component {
//     render() {
//         const { onChangeHandler } = this.props;
        
//         return (
//             <input className="search-box" type="search" placeholder="search monsters" onChange={onChangeHandler}/>
//         );
//     }
// }

export default SearchBox;