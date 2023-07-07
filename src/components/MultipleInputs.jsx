import { useState } from react;

function MultipleInputs() {
    const [formValues, seFormValues] = useState({
        username: "",
        password: "",
        age: "",
    })

    const inputChange = (event) => {
        const { name, value } = event.target;

        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formValues);

        // console.log(formValues);

        // if you want to send the data to backend

        //     try {
        //       const response = await fetch(
        //         "https://jsonplaceholder.typicode.com/posts",
        //         {
        //           method: "POST",
        //           body: JSON.stringify({ formValues }),
        //           headers:{
        //             "Content-type": "application/json; charset=UTF-8",
        //           }
        //         }
        //       );

        //       const data = await response.json();
        //       console.log(data);
        //     } catch (error) {
        //       console.log(error);
        //     }
    };

    return (
        <div>
            <form>

                <div>
                    <label>UserName</label>
                    <input type="text" name="username" value={formValues.username} onChange={inputChange} />
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={formValues.password} onChange={inputChange} />
                </div>

                <div>
                    <label>Age</label>
                    <input type="text" name="age" value={formValues.age} onChange={inputChange} />
                </div>

                <button type="submit" onClick={handleSubmit}></button>

            </form>
        </div>
    );
};

export default MultipleInputs;