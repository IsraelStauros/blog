import styled from 'styled-components'
import {Link} from 'gatsby'

export const MenuBarWrapper = styled.aside`
align-items: center;
background: #192734;
border-left: 1px solid #38444d;
diplay: flex;
flex-direction: colum;
height: 100vh;
justify-content: space-between;
padding: 0.8rem 0;
position: fixed;
right: 0;
width: 3.75rem;
`

export const MenuBarGroup = styled.div`
display: flex;
flex-direction: colum;
`

export const MenuBarLink = styled(Link)`
display: bock;
`

export const MenuBarItem = styled.span`
color: #8899a6;
cursor: pointer;
display: block;
height: 3.75rem;
padding: 1.1rem;
`