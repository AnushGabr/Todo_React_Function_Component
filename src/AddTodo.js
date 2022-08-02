import {useState, useRef, useEffect} from 'react'

const AddTodo = ({addTodo}) => {

    const [input, setInput] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current.focus();
    }, [])
    const submitHandler = (e) => {
        e.preventDefault();
        addTodo({
            id: Date.now(),
            title: input,
            done: false
        })

        setInput('');
    }

  return (
    <form className='AddTodo' onSubmit={submitHandler} >
        <input type= "text" value={input} onChange = {(e) => setInput(e.target.value)} ref = {inputRef}/>
        <input type= 'submit' value= 'Add todo'/>
    </form>
  )
}

export default AddTodo