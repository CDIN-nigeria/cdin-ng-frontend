import React from 'react';

const Blog = ({ posts }) => {
    return (
        <div>
            {posts.map((post, index) => (
                <div key={index}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

const Index = ({ posts }) => {
    return (
        <div>
            <h1>Welcome to My Landing Page</h1>
            <Blog posts={posts} />
        </div>
    );
};

export default Index;

export async function getStaticProps() {
    // Fetch data from an API
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    // Pass data to the page via props
    return { props: { posts } };
}
