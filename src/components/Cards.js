import React, { Component } from 'react';


import styled from 'styled-components'
import Card from "./Card";

const CardsSection = styled.section`
    display: grid;
    grid-template-columns: repeat(4,1fr);
   
    
    color:red;
`


class Cards extends Component {
    state = {}
    render() {
        return (<CardsSection /* style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            width: "100%"
        }} */>{this.props.users.map(item => <Card key={item.id} uname={item.username} email={item.email} sylviyalikeavatar={item.avatar} />)}</CardsSection>);
    }
}

export default Cards;