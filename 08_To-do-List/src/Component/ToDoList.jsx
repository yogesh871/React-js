import { useState } from "react";
import "./ToDoList.css";


const Todo = () => {

    const [input, setInput] = useState({
        todo: ""
    })

    const [Todolist, setTodolist] = useState([]);



    const HandleInput = (e) => {
        const { name, value } = e.target

        setInput({ ...input, [name]: value })

    }

    const HandleClick = (e) => {
        e.preventDefault()

        setTodolist([...Todolist, input]);
         setInput({todo : " "})
    }

    return (
        <>
            <div className="input-Detail">
                <input type="text" name="todo" value={input.todo} onChange={HandleInput} />
                <button type="submit" onClick={HandleClick} >Submit</button>
            </div>


            <div className="ToDoList">
                <h3>To Do List </h3>
                {Todolist.map((Todo, index) => {

                    return (
                        <div key={index} className="List_show">
                            <h4>{Todo.todo}</h4>
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}

export default Todo;






























// **"Hello, my name is Yogesh Rathod, and I’m 22 years old. I completed my B.Sc. in Chemistry in 2023 from Shree Parekh Science College, Mahuva, but my true passion lies in the world of technology. Currently, I'm pursuing Full Stack Web Development at Red & White Multimedia Education, where I’m sharpening my skills every day.

// I come from a farming background — my father is a farmer who has always inspired me with his hard work and dedication. With that same spirit, I have built a strong foundation in frontend technologies like HTML, CSS, JavaScript, Bootstrap, jQuery, and Tailwind CSS.

// Right now, I'm diving deeper into backend technologies, aiming to become a complete full-stack developer. I'm excited about creating dynamic, user-friendly web applications and eager to bring my energy, creativity, and commitment to the tech industry."**