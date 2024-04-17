function Tweet({ username, date, message }) {
    return (
        <div className="tweet">
            <span className="username">{username}</span>
            <span className="date">{date}</span>
            <p>{message}</p>
        </div>
    )
}