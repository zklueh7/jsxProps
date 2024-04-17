function Person({ name, age, hobbies }) {
    let voteMsg = (age >= 18)
    ? "pls go vote!"
    : "you're not old enough";

    let hobbiesList = hobbies.map(hobby => <li>{hobby}</li>)

    return (
        <div className="person">
            <p>Learn some information about this person:</p>
            <ul>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Hobbies:</p>
                <ul>
                    {hobbiesList}
                </ul>
            </ul>
            
            <h3>{voteMsg}</h3>
        </div>
    )
}