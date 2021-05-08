import React from "react"
import propTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink";


import * as S from "./styled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && <AniLink to={prevPage} rel="prev" cover
          direction= "left"
          bg="var(--background)"
          duration= {0.6}>
          ← Previous Page
        </AniLink>}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && <AniLink to={nextPage} rel="next" cover
          direction= "right"
          bg="var(--background)"
          duration= {0.6}>
          Next Page →
        </AniLink>}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination
