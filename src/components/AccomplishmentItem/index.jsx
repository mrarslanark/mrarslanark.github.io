import { useState } from 'react'
import styled from 'styled-components'
import { device } from '../../constants/theme'

const AccomplishmentItem = ({ item }) => {
  const [showMore, setShowMore] = useState(false)

  const toggleShowMore = () => {
    setShowMore((prevState) => !prevState)
  }

  return (
    <div>
      <Poster src={item.featuredImage} alt={'Poster'} />
      <ItemContainer showMore={showMore} className="item-container">
        <HeaderContainer>
          <h3>{item.title}</h3>
          {item.topic && <Subtitle>{item.topic}</Subtitle>}
          <LinkContainer>
            {item.links
              ? item.links.map((item, index) => {
                  return (
                    <Link
                      target={'_blank'}
                      href={item.to}
                      rel="noreferrer"
                      key={item.id}>
                      <LinkText>{item.title}</LinkText> &nbsp;
                    </Link>
                  )
                })
              : null}
          </LinkContainer>
        </HeaderContainer>
        <Description showMore={showMore}>{item.description}</Description>
        <ShowMore onClick={toggleShowMore}>
          {showMore ? 'Show Less' : 'Show More'}
        </ShowMore>
      </ItemContainer>
    </div>
  )
}

export default AccomplishmentItem

const Poster = styled.img`
  height: 200px;
  object-fit: cover;
  @media ${device.mobileS} {
    width: 270px;
  }
  @media ${device.mobileM} {
    width: 340px;
  }
  @media ${device.mobileL} {
    width: 380px;
  }
  @media ${device.tablet} {
    width: 400px;
  }
`

const HeaderContainer = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
`

const ItemContainer = styled.div`
  padding: 16px 24px;
  &:hover {
    background-color: ${({ theme }) => theme.item_container_bg_hover};
  }
  @media ${device.mobileS} {
    width: 270px;
    height: ${({ showMore }) => (showMore ? 'auto' : '360px')};
  }
  @media ${device.mobileM} {
    width: 340px;
  }
  @media ${device.mobileL} {
    width: 380px;
  }
  @media ${device.tablet} {
    width: 400px;
    height: ${({ showMore }) => (showMore ? 'auto' : '280px')};
  }
`

const Subtitle = styled.p`
  font-weight: 500;
  font-size: medium;
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
`

const LinkText = styled.span`
  text-decoration: underline;
`

const Description = styled.p`
  overflow: ${({ showMore }) => (showMore ? 'visible' : 'hidden')};
  display: ${({ showMore }) => (showMore ? 'block' : '-webkit-box')};
  -webkit-line-clamp: ${({ showMore }) => (showMore ? 'none' : '4')};
  -webkit-box-orient: ${({ showMore }) => (showMore ? 'none' : 'vertical')};
  font-size: medium;
  height: ${({ showMore }) => (showMore ? 'auto' : '100px')};
  @media ${device.mobileS} {
    height: auto;
  }
`

const ShowMore = styled.p`
  font-size: medium;
  color: #1c6ff2;
  cursor: pointer;
`
