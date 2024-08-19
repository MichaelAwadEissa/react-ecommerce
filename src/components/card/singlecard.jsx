import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './MovieDetails.css';

function BasicExample(props) {

  const handleAddToCart = () => {
    if (props.onAddToCart) {
      props.onAddToCart(props.product); // Pass the product details to the function
    }
  };

  return (
    <Card style={{ width: props.width }}>
      <Card.Img variant="left" src={props.logo}/>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        {props.about && <Card.Text>
          {props.about}
        </Card.Text>}

        
        {props.size && <Card.Text>
          number of employee:{props.size}
        </Card.Text>}
        <div className="rating">
                    <span className="stars">⭐⭐⭐⭐⭐</span>
                    <span>{props.vote_average}</span>
                    <div>{props.vote_count}</div>
        </div>

         <div className="genres">
                    {props?.genres?.map((genre) => (
                        <Button key={genre.id} variant="warning" className="genre-button">
                            {genre.name}
                        </Button>
                    ))}
                </div>
                <div>
                    duration:{props.duration} min
                    languages:{props.languages}
                </div>
                <div>
                <Card.Img variant="left" src={props.production_company_logo}/>
                  
                </div>

        {props.btnName && <Button as={Link} to={props.url} variant="primary">{props.btnName}</Button>}
        <Button onClick={handleAddToCart} variant="primary">Add to watchlist</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;






