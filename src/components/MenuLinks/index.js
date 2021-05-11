import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import ReactGA from 'react-ga'

import links from './content'
import * as S from './styled'



const MenuLinks = ({ setIsMenuOpen, isMenuOpen }) => {
  const menuLinkClickTrack = link => {
    setIsMenuOpen(!isMenuOpen)

    ReactGA.event({
      category: 'menu link',
      action: 'click',
      label: `Menu Link - ${link}`
    })
  }

  return (
    <S.MenuLinksWrapper>
      <S.MenuLinksList>
        {links.map((link, i) => (
          <S.MenuLinksItem key={i}>
            <AniLink
              fade
              direction="left"
              bg="var (--background)"
              to={link.url}
              onClick={() => menuLinkClickTrack(link.label)}
              activeClassName="active"
            >
              {link.label}
            </AniLink>
          </S.MenuLinksItem>
        ))}
      </S.MenuLinksList>
    </S.MenuLinksWrapper>
  )
}

export default MenuLinks
