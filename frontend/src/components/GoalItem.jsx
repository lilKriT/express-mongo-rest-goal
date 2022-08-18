const GoalItem = ({ goal }) => {
  return (
    <div className="goal">
      bla
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <h2>{goal.text}</h2>
    </div>
  );
};

export default GoalItem;
