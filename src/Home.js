import { useState } from "react";

const Home = () => {

  const[name,setName]=useState("Qasem")
  const[age,setAge]=useState(30)

  const handleChangeName=()=>{
    setName("ALI")
  }

  const handleAge=()=>{
      const tr= prompt('Enter your age ')
      setAge(tr)
  }

  return (
    <div className="content">
      <h1>Home</h1>
      <h2>Hello {name} and your age is {age}</h2>
      <button onClick={handleChangeName}>Change name</button>
      <button onClick={handleAge}>Change age</button>
    </div>
  );
};

export default Home;
