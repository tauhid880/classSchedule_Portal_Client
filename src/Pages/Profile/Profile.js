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
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://schedule-app-server.vercel.app/users?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="grid grid-cols-1 justify-items-center py-8 lg:p-16 items-center min-h-screen">
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
