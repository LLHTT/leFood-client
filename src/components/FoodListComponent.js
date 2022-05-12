import FoodListTable from "./FoodListTable";

export default function FoodListComponent(props) {
  return (
    <div className="food-list">
      <h2>Your Breakfast List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Food name</th>
            <th>Time</th>
            <th>Special requests</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.foodList.length > 0 &&
            props.foodList.map((val, key) => {
              return <FoodListTable val={val} key={key} />;
            })}
        </tbody>
      </table>
    </div>
  );
}
