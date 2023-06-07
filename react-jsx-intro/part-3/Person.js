const MAX_NAME_LENGTH_TO_SHOW = 6;


function Person ({name, age, hobbies}) {
const voteText = age >= 18 ? "please go Vote!" : "you must be 18";

const hobbies = hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
            <p> Learn Some information about this person </p>
            <ul>
                <li> Name: {name.slice(0, MAX_NAME_LENGTH_TO_SHOW)}</li>
                <li>Age: {age} </li>
                <ul>
                    Hobbies: 
                    {hobbies}
                </ul>
            </ul>
            <h3>{voteText}</h3>
        </div>
    );
}