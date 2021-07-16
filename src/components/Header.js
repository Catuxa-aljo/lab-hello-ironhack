import React from 'react';
import Nav from './Nav'
import Button from './Button';

class Header extends React.Component {
    render() {
        return (
            
            <header className="Header">
                <div className="container">
                    <Nav></Nav>
                    <h1>Say hello to ReactJS</h1>
                    <h2>You will learn how to use the most popular frontend library, and become a super Ninja developer.</h2>
                    <Button></Button>
                </div> 
            </header> 
                      
        )
    }
}

export default Header