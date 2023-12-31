import PromptCard from "./PromptCard";

const Profile = ({
  name,
  desc,
  data,
  handleEdit,
  handleDelete,
  handleTagClick,
}) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      <section className="max-w-fit">
        <div className="mt-10 prompt_layout">
          {data.map((post) => (
            <PromptCard
              key={post._id}
              post={post}
              handleEdit={() => handleEdit && handleEdit(post)}
              handleDelete={() => handleDelete && handleDelete(post)}
              handleTagClick={() => handleTagClick && handleTagClick(post.tag)}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Profile;
