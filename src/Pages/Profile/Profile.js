import React, { useContext } from "react";
import ProfileCard from "./ProfileCard";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading";
import { AuthContext } from "../../Contexts/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="px-3 flex flex-row justify-center items-center">
      {isLoading && <Loading></Loading>}
      {users.map((user) => (
        <ProfileCard key={user._id} user={user}>
          refetch={refetch}
        </ProfileCard>
      ))}
    </div>
  );
};

export default Profile;
