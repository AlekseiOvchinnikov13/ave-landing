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
    signingMessage: "Sign in using Moralis"
  }

  const buttonConnectRef = useRef(null);
  const buttonSignInRef = useRef(null);
  const [btnSignInVisible, setBtnSignInVisible] = useState(true);
  const btnSignInVisibleHandler = () => setBtnSignInVisible(!btnSignInVisible);
  const clearAnimation = () => {
    setTimeout(() => {
      buttonConnectRef.current && buttonConnectRef.current.classList.remove('button-flip-in-x', 'button-flip-out-x');
      buttonSignInRef.current && buttonSignInRef.current.classList.remove('button-flip-out-x', 'button-flip-in-x');
    }, 500);
  }

  const buttonsVisibilityChange = () =>
    setTimeout(() => {
      btnSignInVisibleHandler();
      clearAnimation();
    }, 400);

  useEffect(() => {
    btnSignInVisible
      ? buttonConnectRef.current && buttonConnectRef.current.classList.add('button-flip-in-x')
      : buttonSignInRef.current && buttonSignInRef.current.classList.add('button-flip-in-x');
  }, [buttonConnectRef, btnSignInVisible])

  const buttonSignInHandler = () => {
    buttonSignInRef.current && buttonSignInRef.current.classList.add('button-flip-out-x');
    buttonsVisibilityChange();
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

  const buttonConnectHandler = async () => {
    if (email.length <= 0) return;
    buttonConnectRef.current && buttonConnectRef.current.classList.add('button-flip-out-x');
    buttonsVisibilityChange();
    await login();
  }

  if (isAuthenticated) return <p className='registered-text button-view'>You have successfully registered!</p>

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
            onClick={buttonConnectHandler}
          >
            Connect
          </button>
        </Flex>)
      }
    </>
  )
}

export default SignInButton;