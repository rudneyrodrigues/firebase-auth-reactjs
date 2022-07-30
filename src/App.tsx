import { FormEvent, useState } from "react";
import { createUserWithEmailAndPassword, EmailAuthCredential, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./services/firebase";

// import { app } from "./services/firebase";

export const App = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.alert("User created")
      })
      .catch((error) => {
        console.log(error)
        window.alert(error.message)
      })
  }

  const loginWithEmailAndPassword = (e: FormEvent) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        window.alert(`Welcome ${userCredential.user.email}`)
      })
      .catch(error => {
        console.log(error)
        window.alert(error.message)
      })
  }
  
  return (
    <div>
      <h1>Cadastrar com Firebase</h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={e => setEmail(e.target.value)} />

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" onChange={e => setPassword(e.target.value)} />

        <button type="submit">Entrar</button>
      </form>
      
      <h1>Login com Firebase</h1>

      <form onSubmit={loginWithEmailAndPassword}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={e => setEmail(e.target.value)} />

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" onChange={e => setPassword(e.target.value)} />

        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}
