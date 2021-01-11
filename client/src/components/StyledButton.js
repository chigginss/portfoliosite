
import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
    color: #FFCF99;
    backgroundColor: transparent;
    border: 1px solid #FFCF99;
    borderRadius: 10px;
    fontSize: 18px;
    fontFamily: 'Bungee', cursive;
    padding: 10px;
    textDecoration: none;
    marginTop: 20px;

    :hover {
        color: #354674;
        border: 1px solid #354674;
        textDecoration: none
    }

    @media (max-width: 600px) {
        marginTop: 90px;
    }
`;

export default StyledButton;