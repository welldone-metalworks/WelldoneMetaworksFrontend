import BlogForm from "../components/BlogForm";

const CreateBlogPage = () => {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-black text-gray-800">
          Create Blog
        </h1>

        <p className="text-gray-500 mt-2">
          Create SEO optimized blog content for your website.
        </p>
      </div>

      <BlogForm />
    </div>
  );
};

export default CreateBlogPage;