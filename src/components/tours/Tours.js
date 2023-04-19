import './Tours.css'
function Tours(prop){
return(
    <>
    <h2>
    
    </h2>
    <div id='toursSec'>{
        prop.arrayData.map((item,i) => {
            return(
                <div >
                    <h3>{item.name}</h3>
                    <img src={item.image} alt={item.name} />
                </div>
            )
        })
    }</div>
    </>
)
}
export default Tours;
