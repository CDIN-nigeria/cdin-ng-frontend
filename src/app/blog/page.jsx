"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaThumbsUp, FaShare } from 'react-icons/fa';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Footercomp from '../components/footer';

const Blog = () => {
  const [blogs, setBlogs] = useState([
        {
          id: 1,
          title: 'The Evolution of Cryptography in Nigeria',
          content: `Cryptography has played a crucial role in the evolution of technology in Nigeria. From its early applications in securing communication channels to its pivotal role in modern blockchain technology, cryptography continues to shape the digital landscape of Nigeria. This blog explores the history and impact of cryptography in the Nigerian tech ecosystem, highlighting key milestones and innovations.`,
          author: 'Jane Doe',
          date: '2023-11-01',
          imageUrl: 'https://picsum.photos/800/600?random=1',
          isExpanded: false,
          readTime: '5 mins'
        },
        {
          id: 2,
          title: 'Blockchain Adoption: A Game-Changer for Nigerian Economy',
          content: `The adoption of blockchain technology is poised to revolutionize various sectors of the Nigerian economy. From financial services to supply chain management, the decentralized nature of blockchain offers transparency, security, and efficiency. This blog delves into the potential impact of blockchain adoption in Nigeria, shedding light on the opportunities and challenges that lie ahead.`,
          author: 'John Smith',
          date: '2023-11-05',
          imageUrl: 'https://picsum.photos/800/600?random=2',
          isExpanded: false,
          readTime: '6 mins'
        },
        {
          id: 3,
          title: 'Nigeria: Pioneering Cryptocurrency Innovation in Africa',
          content: `Nigeria has emerged as a trailblazer in cryptocurrency innovation within the African continent. With a thriving community of blockchain enthusiasts, startups, and developers, Nigeria is at the forefront of the cryptocurrency revolution. This blog explores the vibrant cryptocurrency ecosystem in Nigeria, highlighting notable projects and initiatives driving innovation.`,
          author: 'Emily Davis',
          date: '2023-11-10',
          imageUrl: 'https://picsum.photos/800/600?random=3',
          isExpanded: false,
          readTime: '7 mins'
        },
        {
          id: 4,
          title: 'Securing Transactions: Cryptographic Best Practices in Nigeria',
          content: `As the adoption of digital payments and online transactions surges in Nigeria, ensuring the security of financial data is paramount. This blog provides insights into cryptographic best practices for securing transactions in the Nigerian context. From encryption protocols to secure key management, learn how cryptographic techniques are safeguarding digital assets in Nigeria.`,
          author: 'Michael Johnson',
          date: '2023-11-15',
          imageUrl: 'https://picsum.photos/800/600?random=4',
          isExpanded: false,
          readTime: '8 mins'
        },
        {
          id: 5,
          title: 'Empowering Nigerian Entrepreneurs with Blockchain Technology',
          content: `Blockchain technology has the potential to empower Nigerian entrepreneurs by revolutionizing various industries. Through decentralized applications (DApps) and smart contracts, entrepreneurs can create innovative solutions that address local challenges. This blog showcases inspiring examples of Nigerian entrepreneurs leveraging blockchain technology to drive positive change in their communities.`,
          author: 'Sophia Rodriguez',
          date: '2023-11-20',
          imageUrl: 'https://picsum.photos/800/600?random=5',
          isExpanded: false,
          readTime: '6 mins'
        },
        {
          id: 6,
          title: 'Regulatory Frameworks: Navigating the Cryptocurrency Landscape in Nigeria',
          content: `The regulatory landscape for cryptocurrencies in Nigeria has been evolving rapidly. From Central Bank policies to legislative initiatives, understanding the regulatory environment is crucial for stakeholders in the blockchain space. This blog provides an in-depth analysis of the current regulatory frameworks impacting cryptocurrencies in Nigeria, offering insights for industry participants.`,
          author: 'Alex Turner',
          date: '2023-11-25',
          imageUrl: 'https://picsum.photos/800/600?random=6',
          isExpanded: false,
          readTime: '7 mins'
        }
      
  ]);

  const handleLike = (blogId) => {
    console.log(`Liked blog with ID: ${blogId}`);
  };

  const handleShare = (blogId) => {
    console.log(`Shared blog with ID: ${blogId}`);
  };

  const handleContinueReading = (blogId) => {
    const updatedBlogs = blogs.map((blog) => {
      if (blog.id === blogId) {
        return { ...blog, isExpanded: true };
      }
      return blog;
    });
    setBlogs(updatedBlogs);
  };

  return (
    <div className="mx-auto w-full">
              <div className="sticky top-0 flex w-full h-fit items-center">

<Navbar />
</div>
      <div className="p-2">
      <h2 className="text-[3em] flex flex-col  font-bold text-green-900">Blogs</h2>

      {blogs.map((blog) => (
        <motion.div 
          key={blog.id} 
          className="bg-[#5a5a5a8a] p-4 rounded  shadow w-fit sm:w-2/3 flex flex-col mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-2 ">{blog.title}</h3>
          <Image src={blog.imageUrl} alt='Image' width={100} height={100} className='w-full' />
          {blog.isExpanded ? (
            <div>
              <p className="mb-4 ">{blog.content}</p>
            </div>
          ) : (
            <div>
              <p className="mb-4 ">{blog.content.substring(0, 150)}...</p>
              <button
                onClick={() => handleContinueReading(blog.id)}
                className="text-blue-800 font-bold text-[1.2em] font-mono hover:underline"
              >
                Continue Reading
              </button>
            </div>
          )}
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <span className="mr-2 text-white">Author: {blog.author}</span>
              <span className="text-white">Date: {blog.date}</span>
            </div>
            <div className='items-center justify-between flex'>
              <button
                onClick={() => handleLike(blog.id)}
                className="mr-2 text-white w-fit rounded hover:bg-green-600"
              >
                <FaThumbsUp className="text-[1.3em] active:text-blue-500" />
              </button>
              <button
                onClick={() => handleShare(blog.id)}
                className=" text-white w-fit rounded hover:bg-blue-600"
              >
                <FaShare className="text-[1.3em] text-green-400" />
                
              </button>
            </div>
          </div>
        </motion.div>
      ))}
      </div>

      <Footercomp />
    </div>
  );
};

export default Blog;
