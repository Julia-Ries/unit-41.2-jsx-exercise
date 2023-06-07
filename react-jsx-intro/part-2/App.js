function App() {
    return (
        <div>
            <Tweet 
                name = "Julia R"
                username = "JULIAR"
                date = {new Date().toDateString()}
                message = "this is my first tweet"/>
            <Tweet 
                name = "Joey Smith"
                username = "joeeyy"
                date = {new Date().toDateString()}
                message = "my recipes are on my blog"/>
            <Tweet 
                name = "Zoey "
                username = "zoewithane"
                date = {new Date().toDateString()}
                message = "its zoe with an e"/>
        </div>
    );
}; 

