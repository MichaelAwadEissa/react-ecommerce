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
import { Link } from 'react-router-dom';
import { changeLanguage } from '../../store/actions/lang_action';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../store/actions/theme_action';

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
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/login">log in</Nav.Link>
            <Nav.Link as={Link} to="/cart">cart</Nav.Link>
            <Nav.Link onClick={handleLangChange}>{MyLang}</Nav.Link>
            <Nav.Link onClick={handleThemeChange}>{Theme}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
