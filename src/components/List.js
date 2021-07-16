import React from 'react'

class List extends React.Component {
    render() {
        return (           
                <li>
                    <img src={this.props.img}></img>
                    <h3>{this.props.h3}</h3>
                    <p>{this.props.text}</p>
                    
                </li>               
        )
    }
}

export default List