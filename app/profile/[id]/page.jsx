"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const ProfilePage = () => {
  const router = useRouter();

  const { id } = useParams();
  const name = useSearchParams().get("name");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${id}/posts`);
      const data = await response.json();
      setPosts(data);
    };

    if (id) fetchPosts();
  }, []);

  const handleTagClick = (tag) => {
    router.push(`/?search=${tag}`);
  };

  return (
    <Profile
      name={name}
      desc={`Welcome to ${name}'s personalized profile page. Explored ${name}'s exceptional prompts and be inspired by the power of their imagination.`}
      data={posts}
      handleTagClick={handleTagClick}
    />
  );
};

export default ProfilePage;
