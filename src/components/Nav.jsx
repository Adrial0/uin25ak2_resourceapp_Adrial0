import { NavLink } from 'react-router-dom';

function Nav() {
  const categories = [
    { path: '/html', name: 'HTML' },
    { path: '/css', name: 'CSS' },
    { path: '/javascript', name: 'JavaScript' },
    { path: '/react', name: 'React' },
    { path: '/sanity', name: 'Sanity' }
  ];

  return (
    <>
      {categories.map(category => (
        <NavLink
          key={category.path}
          to={category.path}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {category.name}
        </NavLink>
      ))}
    </>
  );
}

export default Nav;