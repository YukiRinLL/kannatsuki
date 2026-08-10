import { useEffect } from "react";

export default function TitleAnimation() {
  useEffect(() => {
    const originalTitle = "(ノ￣▽￣) Kannatsuki !";
    document.title = originalTitle;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "( * ￣▽￣)／肿么不看了呢？";
      } else {
        document.title = "(～￣▽￣)～咦！又开始看了！";
        setTimeout(() => {
          document.title = originalTitle;
        }, 2000);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return null;
}
