export default function FoodOrderComponent(props) {
    return (
        <div className="food-order">
            <img src="../images/headline.png" alt="Headline and a noodles bowl" className="headline"/>
            <h1>Breakfast Order</h1>

            <form className="food-content" onSubmit={props.addToList}>
                <div>
                    <label htmlFor="food">Food Name</label>
                    <input
                        type="text" 
                        placeholder="Example: Pho"
                        name="food"
                        value={props.foodName}
                        onChange={(event) => {
                            props.setFoodName(event.target.value);
                        }}
                        required
                        className="input-food"
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="day">For Day</label>
                    <input 
                        name="day"
                        type="date"
                        value={props.day}
                        onChange={(event) => {
                            props.setDay(event.target.value);
                        }}
                        required
                        className="input-day"
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="time">At</label>
                    <input 
                        name="time"
                        type="time"
                        value={props.time}
                        onChange={(event) => {
                            props.setTime(event.target.value);
                        }}
                        required
                        className="input-time"
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="request">Special Requests</label>
                    <input
                        type="text"
                        placeholder="Optional"
                        name="request"
                        value={props.specialRequest}
                        onChange={(event) => {
                            props.setSpecialRequest(event.target.value);
                        }}
                        className="input-food"                        
                    />
                </div>
                <button className="btn-add">Add to List</button>
            </form>
        </div>
    )
}