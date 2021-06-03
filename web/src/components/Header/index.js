import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

import { AuthContext } from '../../contexts/AuthContext';

import { Container, LogoContainer, Logo, Line, NavContainer } from './styles';
import { Button, Title } from '../../styles/global';

const Header = (props) => {
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    authContext.logout();
    history.push('/');
  };

  return (
    <>
      <Container>
        <LogoContainer>
          <Logo>TGL</Logo>
        </LogoContainer>
        {props.showHomeButton && (
          <Button color="transparent" onClick={() => history.push('/home')}>
            <Title fontSize={20}>Home</Title>
          </Button>
        )}
        <NavContainer>
          <Button color="transparent" onClick={() => {}}>
            <Title fontSize={20}>Account</Title>
          </Button>
          <Button
            style={{
              marginLeft: 60,
            }}
            onClick={handleLogout}
          >
            <Title
              fontSize={20}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Log out
              <FaArrowRight
                size={20}
                style={{
                  marginLeft: 15,
                }}
              />
            </Title>
          </Button>
        </NavContainer>
      </Container>
      <Line />
    </>
  );
};

export default Header;
