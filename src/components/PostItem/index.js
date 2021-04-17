import React from 'react'

import * as S from './styled'

const PostItem = () => (
<S.PostItemLink to="/slug/">
  <S.PostItemWrapper>
    <S.PostItemTag background=" #1fa1f2">Misc</S.PostItemTag>
    <S.PostItemInfo>
      <S.PostItemDate>
        17 de Julho de 2021 | 4min de leitura
      </S.PostItemDate>
      <S.PostItemTitle>
        Coloque sua marca e seus produtos na Web
      </S.PostItemTitle>
      <S.PostItemDescription>
        Se você está aqui, é por que já entendeu o poder da web para seu empreendimento
      </S.PostItemDescription>
    </S.PostItemInfo>
 </S.PostItemWrapper>
</S.PostItemLink>
)

export default PostItem
