"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef } from "react";
import styled from "styled-components";
import { IoIosClose, IoIosSearch } from "react-icons/io";

import useClickOutside from "@/components/hooks/clickOutside";

const SearchBarContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 35em;
  // margin: 0 auto;
  // min-width: 25em;
  height: 3em;
  background-color: #fff;
  // border-radius: 6px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;

  box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, 0.14);
  overflow: hidden;
  position: absolute;
  z-index: 9999;
`;

const SearchInputContainer = styled.div`
  width: 100%;
  min-hight: 4em;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 18px;
  color: #12112e;
  font-weight: 500;
  border-radius: 6px;
  background-color: transparent;
  padding-right: 10px;

  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }

  &::placeholder {
    color: #bebebe;
    transition: all 250ms ease-in-out;
  }
`;

const SearchIcon = styled.span`
  color: #bebebe;
  font-size: 27px;
  margin-right: 10px;
  margin-top: 6px;
  vertical-align: middle;
`;

const CloseIcon = styled(motion.span)`
  color: #bebebe;
  font-size: 23px;
  vertical-align: middle;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #dfdfdf;
  }
`;

const LineSeperator = styled.span`
  display: flex;
  margin: 0 auto;
  min-width: 95%;
  min-height: 2px;
  background-color: #d8d8d878;
`;

const SearchContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

const containerVariants = {
  expanded: {
    height: "20em",
  },
  collapsed: {
    height: "3em",
  },
};

const containerTransition = {
  type: "spriong",
  damping: 22,
  stiffness: 150,
};

const SearchBar = (props) => {
  const [isExpanded, setExpanded] = useState(false);
  const [iconVisible, setIconVisible] = useState(false);
  const searchExpand = useRef(null);
  const inputRef = useRef("");
  useClickOutside(searchExpand, () => {
    setExpanded(false);
    setIconVisible(false);
    if (inputRef.current) inputRef.current.value = "";
  });
  const expandContainer = () => {
    setExpanded(true);
    setIconVisible(true);
  };
  const collapseContainer = () => {
    setExpanded(false);
    setIconVisible(false);
    if (inputRef.current) inputRef.current.value = "";
  };
  return (
    <div>
      <SearchBarContainer
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={containerVariants}
        transition={containerTransition}
        ref={searchExpand}
        className="SearchContainer"
      >
        <SearchInputContainer>
          <SearchIcon>
            <IoIosSearch className="text-2xl" />
          </SearchIcon>
          <SearchInput
            placeholder="دنبال چی میگردی؟"
            onFocus={expandContainer}
            ref={inputRef}
          />
          {iconVisible && (
            <SearchIcon>
              <AnimatePresence>
                {isExpanded && (
                  <div
                    key="close-icon"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => collapseContainer()}
                    transition={{ duration: 0.2 }}
                  >
                    <IoIosClose />
                  </div>
                )}
              </AnimatePresence>
            </SearchIcon>
          )}
        </SearchInputContainer>
        <LineSeperator />
        <SearchContent></SearchContent>
      </SearchBarContainer>
    </div>
  );
};

export default SearchBar;
