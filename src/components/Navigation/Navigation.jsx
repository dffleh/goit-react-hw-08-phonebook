import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavigationLink type="button" to="/">
        Home
      </NavigationLink>
      {isLoggedIn && (
        <NavigationLink type="button" to="/contacts" variant="text">
          Contacts
        </NavigationLink>
      )}
    </nav>
  );
};
