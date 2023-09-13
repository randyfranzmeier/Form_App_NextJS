export default function UserForm() {
    return (
        <div>
            <h1>Sign in</h1>
            <form className="text-3xl font-bold rounded-md flex:auto justify-center items-center">
                <label>Email:</label>
                <input id="Email" name="Email" type="text"></input>
            </form>
        </div>
    )
}