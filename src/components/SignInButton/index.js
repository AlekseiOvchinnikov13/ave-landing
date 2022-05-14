import Flex from "../Flex";
import {useMoralis} from "react-moralis";
import {useEffect, useRef, useState} from "react";
import classNames from "classnames";
import './style/index.scss';

const SignInButton = ({className}) => {
  const classes = classNames('sign-in-button', 'button-view', className)

  const [email, setEmail] = useState('');
  const inputOnChange = e => setEmail(e.target.value);

  const {authenticate, isAuthenticated, logout} = useMoralis();
  const options = {
    signingMessage: "Sign in using Moralis",
    onComplete: () => alert('You have successfully registered!'),
  }

  const buttonConnectRef = useRef(null);
  const buttonSignInRef = useRef(null);
  const [btnSignInVisible, setBtnSignInVisible] = useState(true);
  const btnSignInVisibleHandler = () => setBtnSignInVisible(!btnSignInVisible);

  useEffect(() => {
    buttonConnectRef.current && buttonConnectRef.current.classList.add('button-flip-in-x');
  }, [buttonConnectRef, btnSignInVisible])

  const buttonSignInHandler = () => {
    buttonSignInRef.current && buttonSignInRef.current.classList.add('button-flip-out-x');
    setTimeout(() => {
      btnSignInVisibleHandler();

    }, 400);
  };

  const login = async () => {
    if (!isAuthenticated) {
      const user = await authenticate(options)
      user.set('email', email);
      await user.save();
    } else {
      await logout();
    }
  }

  return (
    <>
      {btnSignInVisible
        ? (<button
          className={classes}
          onClick={buttonSignInHandler}
          ref={buttonSignInRef}>
          REGISTER with METAMASK
        </button>)
        : (<Flex ref={buttonConnectRef} className='connect-wrapper'>
          <input
            type="email"
            value={email}
            onChange={inputOnChange}
            placeholder='Your Email'
            required
          />
          <button
            className='button-view'
            onClick={login}
          >
            Connect
          </button>
        </Flex>)
      }
    </>
  )
}

export default SignInButton;