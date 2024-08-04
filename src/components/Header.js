import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utilis/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utilis/UserSlice";
import { DEFAULT_PROFILE_PHOTO, NETFLIX_LOGO } from "../utilis/Constant";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
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
      <img
        className="w-44 p-2"
        src={NETFLIX_LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex p-2 justify-center items-center">
          <img
            className="p-2 w-12 h-auto"
            alt="userIcon"
            // src= {user.photoURL}
            src={
              user.photoURL
                ? user.photoURL
                : DEFAULT_PROFILE_PHOTO
            }
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
