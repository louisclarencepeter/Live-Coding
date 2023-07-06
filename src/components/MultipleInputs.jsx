import { Form } from "react-router-dom";
import { useState } from react;

function MultipleInputs() {
    const [formValues, seFormValues] = useState({
        username: "",
        password: "",
        age: "",
    })

    const inputChnage = (event) => {
        const { name, value } = event.target;

        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formValues);
    };

    return (
        <div>
            <form>
                <div>
                    <label></label>

                </div>

                <div>
                    <label></label>
                </div>

                <div>
                    <label></label>
                </div>

            </form>
        </div>
    );
}

export default MultipleInputs