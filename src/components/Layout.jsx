import Nav from './Nav';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header>
        <nav id="category-nav">
          <Nav />
        </nav>
      </header>
      <main>
        <section id="resource-list">
          <Outlet />
        </section>
      </main>
    </>
  );
}

export default Layout;