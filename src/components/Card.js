import React, { Component } from 'react';
import styled from 'styled-components'

const figureCard = styled.figure`
    color:red;
    /* img{
        width:100%
    }* /`
class Card extends Component {
    render() {
        return (
            <figureCard className="figure" style={{ textAlign: "center" }}>
                <img src={this.props.sylviyalikeavatar} alt="girl" />
                <figcaption>
                    <h3>Name: {this.props.uname}</h3>
                    <h2>Email: {this.props.email}</h2>

                </figcaption>

            </figureCard>);
    }
}

export default Card;