export default function Toast() {
    return (
        <div>
            <h1>Congratulations, you successfully logged in!</h1>
            <h2>Your email: </h2>
            <h2>Your password: </h2>
        </div>
    )
}

// export default function Toast(props: any) {
//     return (
//         <div>
//             <h1>Congratulations, you successfully logged in!</h1>
//             <h2>Your email: {props.email}</h2>
//             <h2>Your password {props.password}</h2>
//         </div>
//     )
// }