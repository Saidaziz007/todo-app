import React, { useState } from "react";
import "./Hero.css";
import { RiDeleteBin6Line } from "react-icons/ri";

function Hero() {
  const [info, setInfo] = useState("");
  const [data, setData] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    let newUser = {
      id: `user-${new Date().getTime()}`,
      info: info,
    };
    setData((p) => [...p, newUser]);
    setInfo("");
  };

  const handleDelete = (id) => {
    let filteredData = data?.filter((user) => user.id !== id);
    setData(filteredData);
  };

  let cards = data?.map((user) => (
    <div key={user.id} className="info-title">
      <h2>{user.info}</h2>
      <button onClick={() => handleDelete(user.id)}>
        <RiDeleteBin6Line />
      </button>
    </div>
  ));
  return (
    <div className="container">
      <div className="hero-all">
        <form onSubmit={handleSubmit} action="">
          <input
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            type="text"
          />
          <button>Add</button>
        </form>
        <div className="wrapper">{cards}</div>
        {data.length === 0 ? (
          <div className="empty">
            <img
              src="https://www.dictionary.com/e/wp-content/uploads/2020/01/Zip_Zero_Zilch_1000x700_jpg_2ZuoCxRf.jpg"
              alt=""
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Hero;
