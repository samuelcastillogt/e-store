import React from 'react'

function MiniBannerWithOutImg(props:any) {
    const { title, url, action } = props
  return (
                  <article>
                <h3>{title}</h3>
                <button type="button">{action}</button>
              </article>
  )
}

export default MiniBannerWithOutImg