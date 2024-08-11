import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utilis/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utilis/UserSlice";
import {
  DEFAULT_PROFILE_PHOTO,
  NETFLIX_LOGO,
  SUPPORTED_LANGUAGES,
} from "../utilis/Constant";
import { toggleGptSearchView } from "../utilis/gptSlice";
import { changeLanguage } from "../utilis/ConfigSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptToggle = useSelector((store) => store.gpt);
  // const langChange = useSelector((store) => store.config);
  const showGpt = useSelector((store) => store.gpt.showGptSearch);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-[100%] px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44 p-2" src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 justify-center items-center">
          {showGpt && (
            <select
              className="px-2 py-1 m-2 rounded-md bg-yellow-100 bg-transparent bg-opacity-45"
              onClick={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  className="bg-gray-400"
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className="px-2 py-1 m-2 rounded-md bg-yellow-100 bg-transparent bg-opacity-45"
          >
            GPT search
          </button>
          <img
            className="p-2 w-12 h-auto"
            alt="userIcon"
            // src= {user.photoURL}
            src={user.photoURL ? user.photoURL : DEFAULT_PROFILE_PHOTO}
          />
          <button onClick={handleSignout} className="text-red-400 p-2">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
