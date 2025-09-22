import CreateBlogForm from "@/components/modules/Blogs/CreateBlogForm";

const create = async (data: FormData) => {
  "use server";
  console.log(data);
};

const CreateBlog = () => {
  return (
    <div className="container flex justify-center items-center">
      <CreateBlogForm />
    </div>
  );
};

export default CreateBlog;
