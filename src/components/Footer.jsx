
/***********************
  Footer Component
 ***********************/
  import SocialLinks from './SocialLinks';
  const Footer = props => {
    return (
      <footer>
        <div className="wrapper">
          <h3>THANKS FOR VISITING</h3>
          <p>© {new Date().getFullYear()} Joseant.</p>
          <SocialLinks />
        </div>
      </footer>
    );
  };
  
  export default Footer;