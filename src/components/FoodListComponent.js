export default function FoodListComponent(props) {
    return (
        <div className="food-list">
            <h2>Your Breakfast List</h2>
            <table className="desktop">
                <thead>
                    <tr>
                        <th>Food name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Special requests</th>
                        <th>Change food</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {props.foodList.length > 0 && props.foodList.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.foodName}</td>
                                <td>{val.forDay}</td>
                                <td>{val.atTime}</td>
                                <td>{val.specialRequest}</td>
                                <td>
                                    <input
                                        placeholder="New food name: ..."
                                        type="text"
                                        onChange={(event) => {
                                        props.setNewFoodName(event.target.value);
                                        }}
                                        className="input-food"
                                    />
                                    <button onClick={() => props.updateFood(val._id)} className="btn-food">
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => props.deleteFood(val._id)} className="btn-food">
                                        X
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <table className="tablet">               
                {props.foodList.length > 0 && props.foodList.map((val, key) => {
                    return (
                        <tbody>
                            <tr key={key}>
                                <th>Food name</th>
                                <td>{val.foodName}</td>
                            </tr>
                            <tr key={key}>
                                <th>Date</th>
                                <td>{val.forDay}</td>
                            </tr>
                            <tr key={key}>
                                <th>Time</th>
                                <td>{val.atTime}</td>
                            </tr>
                            {val.specialRequest && <tr key={key}>
                                <th>Special requests</th>
                                <td>{val.specialRequest}</td>
                            </tr>}
                            <tr key={key}>
                                <th>Change food</th>
                                <td>
                                    <input
                                        placeholder="New food name: ..."
                                        type="text"
                                        onChange={(event) => {
                                        props.setNewFoodName(event.target.value);
                                        }}
                                        className="input-food"
                                    />
                                    <button onClick={() => props.updateFood(val._id)} className="btn-food">
                                        Update
                                    </button>
                                </td>
                            </tr>
                            <tr key={key}>
                                <th>Delete</th>
                                <td>
                                    <button onClick={() => props.deleteFood(val._id)} className="btn-food">
                                        X
                                    </button>
                                </td>
                            </tr>
                            <hr className="food-list-hr"/>    
                        </tbody>
                    )
                })}
            </table>
        </div>
    )
}