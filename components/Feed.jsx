"use client";

import { useState, useEffect, useCallback } from "react";

import PromptCard from "@components/PromptCard";
import { debounce } from "@utils/debounce";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const debounceSearch = useCallback(
    debounce(async (value) => {
      const response = await fetch(`/api/prompt/search?query=${value}`, {
        method: "GET",
      });
      const data = await response.json();
      setPosts(data);
    }),
    []
  );

  useEffect(() => {
    debounceSearch(searchText);
  }, [searchText]);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for prompts"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList
        data={posts}
        handleTagClick={(tag) => setSearchText(tag)}
      />
    </section>
  );
};

export default Feed;
