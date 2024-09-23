
/***********************
  Nav Component
 ***********************/

  const Nav = props => {
    return (
        <nav id="navbar">
          <div className="nav-wrapper">
            <p className="brand">
              Jose
              <strong>Ant</strong>
            </p>
            <a
              onClick={props.toggleMenu}
              className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
            >
              <span />
            </a>
          </div>
        </nav>
    );
  };

  
  export default Nav;