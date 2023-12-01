"use client";

import { useState, useEffect, useCallback } from "react";

import PromptCard from "@components/PromptCard";
import { debounce } from "@utils/debounce";
import { useRouter, useSearchParams } from "next/navigation";
import Skeleton from "react-loading-skeleton";

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
  const router = useRouter();
  const params = useSearchParams();
  const searchValue = params.get("search");

  const [searchText, setSearchText] = useState(searchValue ?? "");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const debounceSearch = useCallback(
    debounce(async (value) => {
      try {
        setLoading(true);
        const response = await fetch(`/api/prompt/search?query=${value}`, {
          method: "GET",
        });
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }),
    []
  );

  const handleTagClick = (tag) => {
    setSearchText(tag);
    router.push(`/?search=${tag}`);
  };

  useEffect(() => {
    debounceSearch(searchText);
  }, [searchText]);

  useEffect(() => {
    if (searchValue !== searchText) {
      setSearchText(searchValue ?? "");
    }
  }, [searchValue]);

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

      {loading && (
        <div className="flex max-md:w-full">
          <Skeleton
            count={
              typeof window !== "undefined" && window.innerWidth > 1279.99
                ? 24
                : 12
            }
            containerClassName="mt-24 w-full sm:columns-2 xl:columns-3"
            className="md:!w-[360px]"
          />
        </div>
      )}
      <PromptCardList data={posts} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;
