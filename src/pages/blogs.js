import React from 'react'
import { createClient } from 'next-sanity'
const blogs = ({blogs}) => {
    console.log(blogs)
  return (
    <div>
    <div>
        <h1>{blogs[0].title}</h1>
        <p>{blogs[0].context}</p>
    </div>
    </div>
  )
}


export async function getServerSideProps() {
  const client = createClient({
    projectId: '4moy4hq6',
    dataset: 'production'
    })
    const query = '*[_type == "post"]'
    const blogs = await client.fetch(query)
    return {
        props: {
            blogs
        }
    }
}

export default blogs