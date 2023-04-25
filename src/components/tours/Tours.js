import './Tours.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/card';
import { useState } from 'react';
function Tours(prop){
    const detailes = ((props) => {
        return(
            {item}
        )

    })
    
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
                    <Card.Text>
                        <p>{item.age}</p>
                        <p>age: {takenToys}</p>
                    </Card.Text>
                    <Button onClick={detailes} variant="primary">Detailes</Button>
                </Card.Body>
                </Card>
               </>
            )
        })
    }</div>
    </>
)
}
export default Tours;
