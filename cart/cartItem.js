//do {cartItem("imageName.png","itemName",number,number)}
var quantity;
function add(quantity){
    return quantity++;
}

function remove(quantity){
    return quantity--;
}
function cartItem(image,item,price,quantity) {
    return (
        <div className="shopping-cart">
            <div className="title">
                Shopping Cart
            </div>
            <div className="item">
                <div className="image">
                    <img src={image} alt="" border="3" style={{width: "auto", height: "100%"}}/>
                </div>
                <div className="description">
                    <p>{item}</p>
                    <p>${price}</p>
                </div>
                <div style={{justifyContent: "right", marginLeft: 200}}>
                    <button onClick={add(quantity)} style={{borderRadius: 12}}>+</button>
                </div>
                <p style={{textAlign:"center",marginLeft:12}}>{quantity}</p>
                <div style={{justifyContent: "right", marginLeft: 15}}>
                    <button onClick={remove(quantity)} style={{borderRadius: 12}}>-</button>
                </div>
                <div style={{justifyContent: "right", marginLeft: 230}}>
                    <button style={{borderRadius: 12}}>Remove Item</button>
                </div>

            </div>
        </div>
    );
}
export default cartItem

