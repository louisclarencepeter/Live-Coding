import { useRef } from "react";

function RefObject() {

    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const messageInputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const name = nameInputRef.current.value;
        const email = emailInputRef.current.value;
        const message = messageInputRef.current.value;

        console.log(name, email, message);
    };

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <div > </div>
                <div > </div>
                <div > </div>
            </form>
        </div>

    );
};

export default RefObject