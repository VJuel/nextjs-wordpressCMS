import Image from 'next/image'
import {Hero} from '../components/hero'
import {getPostList} from '../lib/posts'

export default async function Home() {
  const allPosts = await getPostList();

  console.log(allPosts);

  return (
    <main className="">
    <Hero/>
     {allPosts && allPosts.nodes.map((post) => (
        <div key={post.slug} className="flex flex-col">
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
        </div>
      ))  
    }
    </main>
  )
}
