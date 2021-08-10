import React from 'react'
import { Accordion, Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { actions } from '../redux/actions';

function TokenDetails(props) {
    const {balance, contractAddress, decimals, name, symbol,tokenSupply } =props.token;
    const dispatch= useDispatch();

    const calcBalance = (balance)=>{
        let result=balance;
        for (let i=0; i<decimals; i++){
            result/=10;  
        }
        return result;
     }
    
    return (
        <Accordion.Item eventKey={contractAddress}>
        <Accordion.Header onClick={()=>dispatch(actions.getTokenSupply({address:contractAddress}))}>
            <div className="col">{name}</div>
            <div className="col">{symbol}</div>
            <div className="col">{calcBalance(balance)}</div>
        </Accordion.Header>
        <Accordion.Body>
          {tokenSupply===null ?
            <div>something went wrong</div> :
          tokenSupply ? 
              <div>token's total supply: {calcBalance(tokenSupply)}<br/>
              You have: {balance/tokenSupply*100 ||0}%</div>
          : <Spinner animation="border" role="status">
  			    <span className="visually-hidden">Loading...</span>
			      </Spinner>}
        </Accordion.Body>
      </Accordion.Item>
    )
}

export default TokenDetails;