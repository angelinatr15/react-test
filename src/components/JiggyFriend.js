const JiggyFriend = (props) => {
  return (
    <div>
      {props.id + " "}
      {"Friend: " + props.name + " "}
      {"Parents: " + props.parents + " "}
      <button onClick={() => props.deleteJiggyFriend(props.id)}>
        Delete Friend
      </button>
    </div>
  );
};

export default JiggyFriend;
