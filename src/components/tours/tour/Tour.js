import "./Tour.css"
import Card from 'react-bootstrap/card';

function Tour(prop){
    return(
        <>
        <h2>
        
        </h2>
        <div id='toursSec'>{
            prop.arrayData.map((item,i) => {
                return(
                   <>
                   <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
        
                    </Card.Body>
                    </Card>
                   </>
                )
            })
        }</div>
        </>
    )
    }
    export default Tour;