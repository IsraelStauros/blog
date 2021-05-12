import React, { useState, useEffect } from "react"


import { HomeHeart as Home } from '@styled-icons/boxicons-solid/HomeHeart'
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2'
import { UpArrowCircle as Arrow } from '@styled-icons/boxicons-regular/UpArrowCircle'
import { Flash } from '@styled-icons/entypo/Flash'
import { Grid } from '@styled-icons/boxicons-solid/Grid'
import { Menu } from '@styled-icons/boxicons-regular/Menu'
import { ThList as List } from "@styled-icons/typicons/ThList"


import * as S from "./styled"
import * as GA from "./trackers"



const MenuBar = ({ setIsMenuOpen, isMenuOpen }) => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === "dark"
  const isListMode = display === "list"


  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)
    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)


  }, [])

  const openMenu = () => {
    GA.menuTracker()
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
      <S.MenuBarLink
          to="/"
          cover
          direction="right"
          bg="var (--background)"
          duration={0.6}
          title="Voltar para Home"
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          to="/search/"
          cover
          direction="right"
          bg= "var (--background)"
          duration={0.6}
          title="Pesquisar"
        >
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>

        <S.MenuBarGroupMobile>
        <S.MenuBarGroup>
          <S.MenuBarItem title="Abrir Menu" onClick={openMenu}>
            <Menu />
          </S.MenuBarItem>
        </S.MenuBarGroup>
      </S.MenuBarGroupMobile>

      <S.MenuBarGridMobile>
      <S.MenuBarItem
          title="Mudar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? "grid" : "list")
          }}
        >
          {isListMode ? <Grid /> : <List />}
          </S.MenuBarItem>
          </S.MenuBarGridMobile>


      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Mudar o Tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'flash' : 'dark')

            if (window.DISQUS !== undefined) {
              window.setTimeout(() => {
                window.DISQUS.reset({
                  reload: true
                })
              }, 300)
            }
          }}
          className={theme}
          isDarkMode={isDarkMode}
        >
          <Flash />
        </S.MenuBarItem>

      <S.MenuBarItem
          title="Ir para o Topo"
          onClick={() => {
            GA.topClickTrack()
            window.scroll({ top: 0, behavior: 'smooth' })
          }}
        >
          <Arrow />
        </S.MenuBarItem>
        </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}


export default MenuBar
