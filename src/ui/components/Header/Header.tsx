import {HeaderContainer, Logo} from "./Header.style";

const Header = () => (
    <HeaderContainer>
        <Logo src={"/images/logo.svg"} alt={"Adote um Pet"}/>
    </HeaderContainer>
);

export default Header;
