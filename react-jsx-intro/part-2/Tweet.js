const Tweet = ({date, name, username, message}) => {
    return (
        <div className = "tweet">
            <span className="date"> {date} </span>
            <span> {name} </span>
            <span className="username"> {username} </span>
            <p> {message} </p>
        </div>
    );
} 