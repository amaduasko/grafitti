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
`

const Button = ({ children, ...props }) => <Btn {...props}>{children}</Btn>

export default Button
