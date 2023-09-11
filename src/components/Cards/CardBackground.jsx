import "./cardStyles.css"

function CardBackground(props) {
    return ( 
        <div className="card-background">
            {props.children}
        </div>
     );
}

export default CardBackground;