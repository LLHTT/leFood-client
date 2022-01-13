function AddToCardButton() {
    const handleClick = () => {
        alert("Your item was added to the cart!")
    }
    
    return (
        <button 
            className="add-cart-btn"
            onClick={handleClick}
        >
            Add To Card
        </button>
    )
}

export default AddToCardButton
