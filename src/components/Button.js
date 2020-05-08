import React from 'react'

import styled from 'styled-components'

const Btn = styled.button`
  border-radius: 5px;
  background-color: #f7087a;
  border: none;
  padding: 0.5rem 3rem;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
  margin-right: 1rem;
  margin-left: 1rem;
  &:focus {
    outline: none;
  }
  @media only screen and (max-width: 1199px) and (min-width: 1024px) {
    padding: 0.5rem 2rem;
    margin-left: 0;
  }
`

const Button = ({ children, ...props }) => <Btn {...props}>{children}</Btn>

export default Button
