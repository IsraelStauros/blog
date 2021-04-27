import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as S from "./styled"

const Avatar = () => {
  return (
    <S.AvatarWrapper>
      <StaticImage
        src="../../images/logo_transparent.png"
        alt="Logo Stauros Developer"
        placeholder="blurred"
      />
    </S.AvatarWrapper>
  )
}

export default Avatar
