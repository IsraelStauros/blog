import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as S from "./styled"

const Avatar = () => {
  return (
  <S.AvatarWrapper>
    <StaticImage 
   src="../../images/logo.png" 
   alt="logo Stauros Development Front-end" 
   placeholder="blurred"  
   />
  </S.AvatarWrapper>
  )
}

export default Avatar