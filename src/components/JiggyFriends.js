import { useState } from "react/cjs/react.development";
import JiggyFriend from "./JiggyFriend";

const JiggyFriends = () => {
  const [jiggyFriendList, setJiggyFriendList] = useState([
    {
      id: 1,
      name: "Kora",
      parents: "Unknown",
    },
    {
      id: 2,
      name: "Roe",
      parents: "Le & Vu",
    },
    {
      id: 3,
      name: "Goose",
      parents: "Long & Mew",
    },
    {
      id: 4,
      name: "Balls",
      parents: "Long & Mew",
    },
    {
      id: 5,
      name: "Ninja",
      parents: "Christina",
    },
  ]);

  function deleteJiggyFriend(id) {
    let newFriendList = jiggyFriendList.filter((friend) => friend.id !== id);
    setJiggyFriendList(newFriendList);
  }
  return (
    <div>
      {jiggyFriendList.map((jfl) => (
        <JiggyFriend
          key={jfl.id}
          id={jfl.id}
          name={jfl.name}
          parents={jfl.parents}
          deleteJiggyFriend={deleteJiggyFriend}
        />
      ))}
    </div>
  );
};

export default JiggyFriends;
