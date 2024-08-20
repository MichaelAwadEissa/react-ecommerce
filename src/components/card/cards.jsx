import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BasicExample(props) {

  const handleAddToCart = () => {
    if (props.onAddToCart) {
      props.onAddToCart(props.product); // Pass the product details to the function
    }
  };

  return (
    <Card >
      <Card.Img variant="top" src={props.logo}/>
      <Card.Body>
        <Card.Title title={props.name}>{props.name.slice(0,10)}..</Card.Title>
        {props.about && <Card.Text>{props.about}</Card.Text>}
        <Card.Text>{props.date}</Card.Text>
        {/* <Card.Text>
          {props.location}
        </Card.Text> */}
        {/* {props.size && <Card.Text>number of employee:{props.size}</Card.Text>} */}
        {props.btnName && <button className='w-100 rounded-5 btn btn-outline-success' as={Link} to={props.url} >{props.btnName}</button>}
        <button className='my-2 w-100 rounded-5 btn btn-outline-success' onClick={handleAddToCart}> WatchList </button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;