import { useEffect, useState } from "react";

const useRole = (email) => {
  const [role, setRole] = useState("");

  useEffect(() => {
    if (email) {
      fetch(`https://server-jfjubaer.vercel.app/role/${email}`)
        .then((res) => res.json())
        .then((data) => { setRole(data.role); });
    }
    setRole("");
  }, [email]);
  return [role];
};

export default useRole;
