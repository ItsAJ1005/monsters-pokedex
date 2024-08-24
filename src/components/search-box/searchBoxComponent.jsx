import { Component } from "react";
<<<<<<< HEAD
import './searchBox.css';
=======
>>>>>>> 617d32905b7951a159022bc220cb1cce7b60ad8f

class SearchBox extends Component {

    render(){
        const { placeholder, onChangeHandler, className } = this.props;

        return (
            <input
            className={className}
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler}
            />
        )
    }
}

export default SearchBox;