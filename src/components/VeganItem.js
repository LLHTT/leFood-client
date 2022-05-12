import AddToCardButton from "./AddToCardButton";

function veganItem({ veganFoodItem }) {
  return (
    <div className="veganItem">
      <div className="veganItem-grid">
        {veganFoodItem.map((item) => {
          return (
            <div className="veganItem__card" key={item.id}>
              <div className="veganItem__image">
                <img src={item.image} alt={item.name} />
              </div>
              <ul>
                <h4>
                  {item.name} - {item.size}
                </h4>
                <p>{item.price}</p>
                <h5>{item.shipping}</h5>
                <h5>{item.stock}</h5>
              </ul>
              <AddToCardButton />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default veganItem;
