function cartHeader() {
    return(
        <div style={{display: "flex", justifyContent: "center", marginTop: '100px' }}>
            <div className="cartHeader">
                <a  style={{float:"left", fontSize:"30px", color:"black", padding:"10px"}}>
                    Shopping Cart</a>
            </div>
        </div>
    );
}

export default cartHeader()