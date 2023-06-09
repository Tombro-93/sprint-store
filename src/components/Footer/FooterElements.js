import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
background-color: #808080;

`

export const FooterWrapper = styled.div`
padding: 40px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin 0 auto;

`

export const FooterLinksContainer = styled.div`
display: flex;
justify-content: center;

@media screen and (max-width: 820px){
  padding-top: 32px;

}
`
export const FooterLinksWrapper = styled.div`
display:flex;

@media screen and (max-width: 820px){
 flex-direction: column;

}

`

export const FooterLinkItems = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 margin: 16px;
 text-align: left;
 width: 160px;
 box-sizing: border-box;
 color:#fff;
 
 @media screen and (max-width: 420px){
  margin: 0;
  padding: 10px;
  width: 100%;
 
 }

`

export const FooterLinkTitle = styled.h1`
font-size: 14px;
margin-bottom: 16px;
`
export const FooterLink = styled(Link)`
color: #fff;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;

&:hover{
  color: #1d1f4b;
  transition: 0.2s ease-out;
}
`

export const SocialMedia = styled.section`
width: 100%;
`

export const SocialMediaWrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto;

@media screen and (max-width: 820px){
  flex-direction: column;
 
 }
`

export const SocialLogo = styled(Link)`
color: #fff;
justify-self: start;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
mrgin-bottom: 16px;
font-weight: bold;
`

export const FooterLogoImg = styled.img`
max-width: 125px;
margin-bottom: 20px;
`

export const WebsiteLegal = styled.small`
color: #fff;
margin-bottom: 16px;
`


export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`

export const SocialIconLink = styled.a`
color: #fff;
font-size: 24px;
`