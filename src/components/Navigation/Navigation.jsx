import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLink type="button" to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink type="button" to="/contacts" variant="text">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
