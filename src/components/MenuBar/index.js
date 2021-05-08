import React, { useState, useEffect } from "react"


import { HomeHeart as Home } from '@styled-icons/boxicons-solid/HomeHeart'
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2'
import { UpArrowCircle as Arrow } from '@styled-icons/boxicons-regular/UpArrowCircle'
import { Flash } from '@styled-icons/entypo/Flash'
import { Grid } from '@styled-icons/boxicons-solid/Grid'

import { ThList as List } from "@styled-icons/typicons/ThList"


import * as S from "./styled"
import * as GA from "./trackers"



const MenuBar = () => {
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

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink to="/" title="Voltar para Home"
        cover
        direction= "right"
        bg="var(--background)"
        duration= {0.6}>
          <S.MenuBarItem>
          <Home/>
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink to="/search/" title="Pesquisar" cover
          direction= "left"
          bg="var(--background)"
          duration= {0.6}>
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? "flash" : "dark")
          }}
          className={theme}
        >
          <Flash />
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Mudar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? "grid" : "list")
          }}
          className="display"
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenuBarItem>
        <S.MenuBarItem title="Ir para o Topo"
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
