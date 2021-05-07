import styled from 'styled-components';

const Login = (props) => {
    return (
        <Container>
            <Nav>
                <a href='/'>
                    <img src='/images/login-logo.svg' alt='logo'></img>
                </a> 
                <div>
                    <Join>Join Now</Join>
                    <SignIn>Sign In</SignIn>
                </div>
            </Nav>
        </Container>
    )
}

const Container = styled.div`
    padding: 0px;

`

const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0px 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between; /* */
    flex-wrap: nowrap; /* no wrap becuase we don't want to wrap and go to new lines */

    & > a {
        width: 135px;
        height: 34px;
        @media (max-width: 768px) {
            padding: 0 5px;
        }
    }
`;

const Join = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    background-color: rgb(99,187,183);
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none; /* no underlines for link tag */
    color: rgba(0, 0 ,0 , 0.6);
    margin-right: 12px;
    text-align: center;
    border-radius: 40px;
    transition-duration: 167ms;
    font-weight: 600;
    line-height: 40px;

    &:hover{
        background-color: rgba(99,187,183,0.5);
        color: rgba(0,0,0,0.9);
        text-decoration: none;
    }
`

const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    background-color: rgb(99,187,183);
    padding: 10px 12px;
    font-size: 16px;
    border-radius: 40px;
    text-decoration: none;
    margin-right: 12px;
    color: rgba(0, 0 ,0 , 0.6);
    transition-duration: 167ms;
    font-weight: 600;
    line-height: 40px;
    text-align: center;


    &:hover{
        background-color: rgba(99,187,183,0.5);
        color: rgba(0,0,0,0.9);
        text-decoration: none;
    }
`

export default Login