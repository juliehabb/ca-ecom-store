import React from "react";

import { HeaderContainer, Nav, Logo,  NavLinks, CartIcon, SearchBar } from "./header.styles";

const Header = () => {
    return (
        <HeaderContainer>
            <Logo>
                <img src="" ></img>
            </Logo>
            <SearchBar> placeholder="Search products..." </SearchBar>
            <Nav>
                <NavLinks>
                    <a href="/" >Home</a>
                    <a href="/" >Shop</a>
                    <a href="/contact" >Contact</a>
                </NavLinks>
                <CartIcon>
                    <span>Cart (0)</span> {/* Cart count */}
                </CartIcon>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;