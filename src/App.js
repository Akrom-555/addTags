import { useState } from "react";



function App() {

  const [text, setText] = useState('');
  const [arr, setArr] = useState([]);
  const [blur, setBlur] = useState(false);




  const handleBlur = () => {
  setBlur(true) 
  }


  const hadleChangeText = (e) => {
    setText(e.target.value)
  };

  const handleDelete = (i) => {
      const filtred = arr.filter((item,index) => {
        if(index === i) {
          return false
        }
        return true
      })
      setArr(filtred)
  }





  const doMap = arr.map((item, index) => {
    return (
      <div className="item-text">
        {item.text}
        <button onClick={() => handleDelete(index)}>x</button>
        </div>
        
    )
  })


  const handleSumbit = (e) => {
    e.preventDefault();
    setArr([
      ...arr,
      { text }])
    setText('')
    
  }

  return (
    <div className="wrapper" >
     
      <form  onSubmit={handleSumbit} className="block-form" >


        <input  value={text} onBlur = {handleBlur} onChange={hadleChangeText}
         className= "input-text"  type="text" />
        <button disabled = {!text}  className="add-text">Отправить</button>
      </form>
      {blur && !text  ? <p><i>Поле не должно пустым</i></p> : null }
      { <span>{doMap}</span>}

    

    </div>
  );
}

export default App;
