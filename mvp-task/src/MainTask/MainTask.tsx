import "./MainTask.scss";

export const MainTask = () => {
  return (
    <>
      <div className="main-container">
        <div className="box-container">
          <div className="header-container">
            <h2 className="header-firts">Healthy Meal Planner</h2>
            <h3 className="meals-header">Today's Meals</h3>
          </div>
          <div className="meals-container">
            <div className="meals-dish">
              <h4>Breakfst</h4>
              <p>Oatmeal with barries</p>
            </div>
            <div className="meals-dish">
              <h4>Lunch</h4>
              <p>Quinoa salad</p>
            </div>
            <div className="meals-dish">
              <h4>Dinner</h4>
              <p>Grilled salmon with vegetables</p>
            </div>
            <div className="meals-dish">
              <h4>Snack</h4>
              <p>Greek yogurt with honey</p>
            </div>
          </div>
          <div className="button-container">
            <button className="meal-button">Add Meal</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainTask;
