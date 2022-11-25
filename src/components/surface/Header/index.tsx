import { Separator } from '../../fundation/Separator';
import NotificationsNav from './NotificationsNav';
import { Profile } from './Profile';
import { Container, MenuIcon } from './styles';


interface HeaderProps {
  toggle?: () => void
}

export function Header({toggle}: HeaderProps) {

  return (
    <Container>
      <div>
        <MenuIcon onClick={toggle}/>
      </div>
      <NotificationsNav/>
      <Separator/>
      <Profile />
    </Container>
  );
}

export default Header;