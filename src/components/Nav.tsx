import { NavLink } from 'solid-app-router';
import { Component } from 'solid-js';

const Nav: Component = () => {
  return (
    <nav class="mt-5 mb-3">
      <NavLink
        href="/"
        end
        class="btn btn-primary me-2"
        activeClass="btn-success"
      >
        Grammar helper
      </NavLink>
    </nav>
  );
};

export default Nav;
