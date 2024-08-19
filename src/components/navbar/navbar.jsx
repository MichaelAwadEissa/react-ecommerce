// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from'react-router-dom'; // Import Link from react-router-dom
// import { changeLanguage } from '../../store/actions/lang_action';
// import { useDispatch, useSelector } from 'react-redux';
// import { changeTheme } from '../../store/actions/theme_action';


// function ColorSchemesExample() {

//   const MyLang=useSelector((state)=>state.myLang.lang)
//   const  Theme = useSelector((state) => state.myTheme.theme);

//   const dispatch = useDispatch();
//  const  handleLangChange =() =>{
//    dispatch(changeLanguage(MyLang==="EN"?"AR":"EN"));
//  }
//  const handleThemeChange = () => {
  
//   dispatch(changeTheme(Theme === "light" ? "dark" : "light")); // Ensure consistent case
// };

//   return (
//     <>
//       <Navbar bg="dark" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="/register">Register</Nav.Link>
//             <Nav.Link as={Link} to="/login">log in</Nav.Link>
//             <Nav.Link  as={Link} to="/cart">cart</Nav.Link>
//             <Nav.Link onClick={handleLangChange}>{MyLang}</Nav.Link>
//             <Nav.Link  onClick={handleThemeChange}>{Theme}</Nav.Link>


//           </Nav>
//         </Container>
//       </Navbar>
      
//     </>
//   );
// }

// export default ColorSchemesExample;

//NavBar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,NavLink } from 'react-router-dom';
import { changeLanguage } from '../../store/actions/lang_action';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../store/actions/theme_action';
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
function ColorSchemesExample() {
  const MyLang = useSelector((state) => state.myLang.lang);
  const Theme = useSelector((state) => state.myTheme.theme);

  const dispatch = useDispatch();

  const handleLangChange = () => {
    dispatch(changeLanguage(MyLang === "EN" ? "AR" : "EN"));
  };

  const handleThemeChange = () => {
    console.log("clicked");
    dispatch(changeTheme(Theme === "light" ? "dark" : "light"));
  };

  return (
    <>
      {/* <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/login">login</Nav.Link>
            <Nav.Link as={Link} to="/cart">cart</Nav.Link>
            <Nav.Link onClick={handleLangChange}>{MyLang}</Nav.Link>
            <Nav.Link onClick={handleThemeChange}>{Theme}</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}

      {/* start navbar */}
      <nav>
        <div className="container d-flex justify-content-between">
          <NavLink className="text-decoration-none text-black" to="/"><h4 className='fw-bold py-2' >Movie App</h4></NavLink>
          <ul className='d-flex list-unstyled text-black align-items-center justify-content-around'>
            <li className='px-2 pt-2'>
              <NavLink className="text-decoration-none text-black" onClick={handleLangChange}>{MyLang}</NavLink>
            </li>
            <li className='px-2 pt-2'>
              <NavLink className="text-decoration-none text-black" to="/watchlist"><FontAwesomeIcon icon="fa-solid fa-heart" /> watchlist</NavLink>
            </li>
            <li className='px-2 pt-2'>
              <NavLink className="text-decoration-none text-black" to="/login">login</NavLink>
            </li>
            <li className='px-2 pt-2'>
              <NavLink className="text-decoration-none text-black" to="/register">Register</NavLink>
            </li>
            <li className='px-2 pt-2'>
              <NavLink className="text-decoration-none text-black" to="/cart">cart</NavLink>
            </li>
            <li className='px-2 pt-2'>
              <NavLink className="text-decoration-none text-black" onClick={handleThemeChange}>{Theme}</NavLink>
            </li>
          </ul>
        </div>

      </nav>
      {/* end navbar */}
    </>
  );
}

export default ColorSchemesExample;
