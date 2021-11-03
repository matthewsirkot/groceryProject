function navBar() {
    return(
        <div style={{position:"fixed", top:0, left:0,width:"100%"}}>
            <div className="topnav">
                <a href={'home'} style={{float:"left", fontSize:"30px", color:"white", padding:"10px"}}>
                    Nittany Marketplace</a>
                <a href={'contact-us'}>Contact</a>
                <a href={'my-account'}>Account</a>
                <a href={'cart'}>Cart</a>
            </div>
        </div>
    );
}

export default navBar;