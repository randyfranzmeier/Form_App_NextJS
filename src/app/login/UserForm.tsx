import  Toast  from '../@modal/(.)login/toast'
export default function UserForm() {
 let isVal: boolean
    let validateData = (email: string, password: string) =>{
        if (email == null || email == '' || password == null || password == '') {
            isVal = false
        }
        isVal = true
    }

    let valid = () =>{
        return isVal
    }

    function callToast() {
        <Toast Email="myName@example.com" Password="12345"></Toast>
    }
    
    return (
        <div>
            <form className="text-3xl font-bold rounded-md flex:auto justify-center items-center rounded bg-black">
                <h2 className="text-white mb-1.5 py-2">Please enter login credentials</h2> <br></br>
                <label className="text-white">Email:</label>
                <input id="Email" name="Email" type="text" className="my-1 w-50 mr-1"></input> <br></br> <br></br>
                <label className="text-white">Password:</label>
                <input id="password" name="password" type="text" className="w-48 mr-1"></input> <br></br> <br></br>
                <button id="submit" type="submit" className="rounded-md hover:rounded-lg bg-red-700 mb-2 ml-1.5" onSubmit={callToast}>Sign in</button>
                {/* onSubmit={ validateData(document.getElementById('Email':string).value, document.getElementById('password':string).value)}>Sign in</button> */}

            </form>
        </div>
    )
}