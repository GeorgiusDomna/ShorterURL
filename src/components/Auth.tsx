import { FormEvent, useState } from "react";
import { auth } from "../api/authService";

interface IAuthProps {
  toggleIsAuth: () => void;
}

const Auth: React.FC<IAuthProps> = ({toggleIsAuth}) => {
  const [signMode, setSignMode] = useState(true);
  const [inpName, setInpName] = useState('');
  const [inpPassword, setInpPassword] = useState('');

  const hundelSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const res = await auth(signMode, inpName, inpPassword);
    if (res) {
      localStorage.setItem('token', `${res.token_type} ${res.access_token}`);
      setInpPassword('');
      setInpName('');
      toggleIsAuth();
    }
  }

  return (
    <div className="auth">
      <div className="signMode_switcher">
        <span className={signMode ? 'signMode_btn active' : 'signMode_btn'} onClick={() => setSignMode(true)}>
          Sign in
        </span>
        <span className={!signMode ? 'signMode_btn active' : 'signMode_btn'} onClick={() => setSignMode(false)}>
          Sign up
        </span>
      </div>
      <form className="auth_form" onSubmit={(e) => hundelSubmit(e)} action="">
        <input value={inpName} onChange={(e) => setInpName(e.target.value)} placeholder="username"/>
        <input value={inpPassword} onChange={(e) => setInpPassword(e.target.value)} placeholder="password"/>
        <button disabled={!inpName || !inpPassword} type="submit">
          {signMode ? 'SIGN IN' : 'SIGN UP'}
        </button>
      </form>
      <span></span>
    </div>
  )
}

export default Auth;