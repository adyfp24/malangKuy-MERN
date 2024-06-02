import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import useBlog from '../../hooks/useBlog';

function DetailBlog() {
  const { id } = useParams();
  const { loading, error, blog, getBlogById } = useBlog();
  const baseUrl = 'http://localhost:3000/storage';

  useEffect(() => {
    getBlogById(id);
  }, []);

  return (
    <div>
      <Navbar />
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!blog && <p className="text-center text-gray-500">No blog found</p>}
      <div className="container px-4 py-8 mx-auto">
        <div className="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
          {blog && (
            <>
              <img src={`${baseUrl}/${blog.blogImg}`} alt={blog.title} className="object-cover w-full h-64" />
              <div className="p-4">
                <h1 className="mb-2 text-3xl font-semibold">{blog.title}</h1>
                <div className="mb-4 text-gray-500">
                  <span>By {blog.writer.name}</span> | <span>{new Date(blog.date).toLocaleDateString()}</span>
                </div>
                <p className="text-gray-700">{blog.content}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailBlog;
