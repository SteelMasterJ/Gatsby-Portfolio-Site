import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
            siteMetadata {
                author
            }
            }
        }
    `)

    return (
        <footer className={footerStyles.footer}>
            <small>©{data.site.siteMetadata.author} 2020 </small>
        </footer>
    )
}

export default Footer