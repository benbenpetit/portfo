import React, { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "src/utils/context";

const Link = ({ path, replace = false, children }) => {
  const linkRef = useRef(null);
  const navigate = useNavigate();
  const { loadingStateRef } = useContext(LoadingContext);

  const handleClick = (e) => {
    e.preventDefault();
    loadingStateRef.current.classList.remove('is-loaded');
    loadingStateRef.current.classList.add('is-loading');
    setTimeout(() => {
      loadingStateRef.current.classList.remove('is-loading');
      loadingStateRef.current.classList.add('is-loaded');
      navigate(path, { replace: replace });
    }, 1300);
  };

  return (
    <a href={path} onClick={handleClick} ref={linkRef}>
      {children}
    </a>
  );
};

export default Link;
