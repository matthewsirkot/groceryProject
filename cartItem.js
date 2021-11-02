function cartItem() {
    return(
        <div className="shopping-cart">
            <div className="title">
                Shopping Cart
            </div>
        <div className="item">
            <div className="image" >
                <img src="apple.png" alt="" border="3" style={{width:"auto", height:"100%"}}/>
            </div>
            <div className="description">
                <p>Apple</p>
                <p>Price: $1.99</p>
            </div>
        </div>
        </div>
    );
}
export default cartItem()