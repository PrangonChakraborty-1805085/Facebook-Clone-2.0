
// Here we will use a new way of grabing info from firebase cloud storage named react-firebase hooks. We could grab items from storage in the same way as we upload info in the storage in inputBox section. We could access the db collections and posts section and then we could access the data by doc id..But here we will use hooks that will make our life more easier. So we have to install react-firebase-hooks

import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase';
import Post from './Post';
import firebase from 'firebase'
function Posts({posts}) {
    const [realtimePosts,loading,error]= useCollection(
         db.collection('posts').orderBy('timeStamp','desc')
    );
    return (
        <div>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        { realtimePosts?
          ( 
            realtimePosts.docs.map((post)=>(
               <Post
                key={post.id}
                message={post.data().message}
                name={post.data().name}
                email={post.data().email}
                image={post.data().image}
                timestamp={post.data().timeStamp}
                postImage={post.data().postImage}
               />
           ))):
           ( 
            posts.map((post)=>(
               <Post
                key={post.id}
                message={post.message}
                name={post.name}
                email={post.email}
                image={post.image}
                timestamp={post.timeStamp}
                postImage={post.postImage}
               />
           )))
           }
        </div>
    )
}

export default Posts
