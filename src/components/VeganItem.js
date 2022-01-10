
function veganItem({ veganFoodItem }) {
    return (
        <div className="veganItem">
            <div className="veganItem-grid">
                {
                    veganFoodItem.map(item => {
                        return (
                            <div className="veganItem__card" key={item.id}>
                                <div className="veganItem__image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <ul>
                                    <h5>{item.name}</h5>
                                    <p>{item.price}</p>
                                </ul>
                                <button className="add-cart-btn">Add To Card</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default veganItem
