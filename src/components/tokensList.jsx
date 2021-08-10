import React from 'react'
import { Accordion, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import TokenDetails from './tokenDetails';

function TokensList() {
    const { tokens } = useSelector(state => state.userReducer);
    return  (
    <Container>
      <h1 className="m-3">Your tokens</h1> 
      <Accordion defaultActiveKey="0" className="my-4">
        {tokens.map((token, key) => {
            return <TokenDetails token = {token} key={key}
            />
        })}
      </Accordion>
    </Container>
  )
}

export default TokensList;