import { getRandomUsers } from "@/actions/user.actions"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import { Avatar, AvatarImage } from "./ui/avatar";
import FollowButton from "./FollowButton";
import Link from "next/link";



async function WhoToFollow() {
  const users = await getRandomUsers();
  if (users?.length === 0) return null
  return (
    <Card>
      <CardHeader>
        <CardTitle>Who to Follow</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {users.map((user) => (
            <div key={user.id} className="flex gap-2 items-center justify-between ">
              <div className="flex items-center gap-1">
                <Link href={`/profile/${user.username}`}>
                  <Avatar>

                    <AvatarImage
                      src={user.image ?? "/avatar.png"}
                      alt={`${user.name}'s avatar`}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </Avatar>

                </Link>
                <div className="text-xs">
                  <Link href={`/profile/${user.username}`} className="font-medium cursor-pointer">
                    {user.name}
                  </Link>
                  <p className="text-muted-foreground">@{user.username}</p>
                  <p className="text-muted-foreground">{user._count.follwers} follwers</p>
                </div>
              </div>
              <FollowButton userId={user.id} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
export default WhoToFollow;