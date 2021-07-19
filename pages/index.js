import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Feed from '../components/MainBody/Feed';
import Header from '../components/headerPart/Header'
import Login from '../components/Login';
import Sidebar from '../components/MainBody/Sidebar';
import Widgets from '../components/MainBody/Widgets';
import { db } from '../firebase';

export default function Home({session,posts}) {
  if (!session) return <Login/>;
  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook</title>
      </Head>
      <Header/>
      <main className='flex'>
         <Sidebar/>
         <Feed posts={posts}/>
        <Widgets/>
      </main>
      
    </div>
  )
}

export async function getServerSideProps(context){
  //get the user
  const session= await getSession(context)
  // Here i am fetching the written posts at the time of rendering immediately
  const posts=await db.collection('posts').orderBy('timeStamp','desc').get();
  const docs=posts.docs.map((post)=>(
    {
      id:post.id,
      ...post.data(),
      timeStamp:null,
    }
  ))
  return{
    props:{
      session,
      posts:docs
    }
  }
}