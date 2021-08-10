import { useRef, useState } from 'react';
import './login.css'
import {Spinner} from 'react-bootstrap';
import {useDispatch} from 'react-redux'
import { actions } from '../redux/actions';
import { useHistory } from 'react-router';

function Login() {
	const addressRef= useRef();
	const [spinner, setSpinner]= useState(false);
	const dispatch = useDispatch();
	const history= useHistory();

	const enter=(e)=>{
		e.preventDefault();
		let address= addressRef.current.value;
		dispatch(actions.setUserProp({key:'accountAdress', value:address}))
		setSpinner(true);
		dispatch(actions.getTokensList({address})).then(()=>{
			setSpinner(false);
			history.push('/tokens');
		});
	}
  return (
    <div>
        <div className="container login">
		{spinner &&<Spinner animation="border" role="status">
  			<span className="visually-hidden">Loading...</span>
			</Spinner>}
		<div className="row main-content bg-success text-center">
			<div className="col text-center company__info">
				<span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
				<h4 className="company_title">Fuse.io</h4>
			</div>
			<div className="col login_form ">
				<div className="container-fluid">
					<div className="row">
						<h2>Log In</h2>
						<h6>Enter your account address</h6>
					</div>
					<div className="row">
						<form control="" className="form-group">
							<div className="row">
								<input type="text" ref={addressRef} name="username" id="username" className="form__input" placeholder="account address"/>
							</div>
							
							<div className="row">
								<input type="submit" onClick={(e)=>enter(e)} value="Send" className="btn"/>
							</div>
						</form>
					</div>
					
				</div>
			</div>
		</div>
	</div>
    </div>
  );
}

export default Login;