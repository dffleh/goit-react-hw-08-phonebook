import { useAuth } from 'hooks/useAuth';
import { LinkNav } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <LinkNav type="button" to="/">
        Home
      </LinkNav>
      {isLoggedIn && (
        <LinkNav type="button" to="/contacts" variant="text">
          Contacts
        </LinkNav>
      )}
    </nav>
  );
};
