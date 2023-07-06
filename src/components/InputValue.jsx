import { useState } from 'react';

function InputValue() {

    const [userName, setUserName] = useState("");

    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    };

    return (
        <div className='form-group m-3'>
            <form>
                <label className='form-lable'>
                    UserName
                </label>
                <input type="text" onChange={handleUserNameChange} value={userName} />
            </form>

        </div>
    );          
}

export default InputValue