import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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
        <footer>
            <small>©{data.site.siteMetadata.author} 2020 </small>
        </footer>
    )
}

export default Footer