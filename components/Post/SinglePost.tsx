import Link from 'next/link';
import React from 'react'

type Props = {
    title:string;
    description:string;
    date:string;
    tags:string[];
    slug:string;
}

const SinglePost = (props: Props) => {

  const {title, description, date, tags, slug} = props;
  
  return (
    <>
    <Link href={`/posts/${slug}`}>
    <section className='bg-sky-900 mb-8 mx-auto rounded-md p-5 shadow-2xl hover:shadow-none'>
        <div className='flex items-center gap-3'>
        <div className='text-gray-100 text-2xl font-medium mb-2'>{title}</div>
        <h2 className='text-gray-100'>{date}</h2>

        {tags.map((tag) => (
            <span className='text-white bg-gray-500 rounded-xl px-2'>{tag}</span>
        ))}
        
        </div>
        <p className='text-gray-100'>{description}</p>
    </section>
    </Link>
    </>
  )
}

export default SinglePost