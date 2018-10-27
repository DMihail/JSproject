import React from 'react'
import Article from './Article'

export default function List({articles}) {
    const Elem = articles.map(article =>
        <li key={article.id}><Article article = {article}/></li>);
    return(
        <ul>
            {Elem}
        </ul>
    )
}