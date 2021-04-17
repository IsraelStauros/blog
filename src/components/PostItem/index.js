import React from 'react'
import PropTypes from 'Prop-types'

import * as S from './styled'

const PostItem = ({
  slug,
  category,
  date,
  timeToRead,
  title,
  description
  }) => (
<S.PostItemLink to={slug}>
  <S.PostItemWrapper>
    <S.PostItemTag background=" #1fa1f2">(category)</S.PostItemTag>
    <S.PostItemInfo>
      <S.PostItemDate>
        {date} | {timeToRead}min de leitura
      </S.PostItemDate>
      <S.PostItemTitle>
        {title}
      </S.PostItemTitle>
      <S.PostItemDescription>
        {description}
      </S.PostItemDescription>
    </S.PostItemInfo>
 </S.PostItemWrapper>
</S.PostItemLink>
)

PostIem.propTypes ={
  slug: PropTypes.string.isRequired,
  background: PropTypes. string,
  category: PropTypes.string.isRequired,
  date:PropTypes.string.isRequired,
  timetoRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}


export default PostItem

