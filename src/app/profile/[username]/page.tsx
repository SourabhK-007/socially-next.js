
import { getProfileByUsername, getUserLikedPosts, getUserPosts, isFollowing } from "@/actions/profile.action";
import { notFound } from "next/navigation";
import { console } from "node:inspector/promises";
import { title } from "node:process";
import { setTimeout } from "node:timers";
import ProfilePageClient from "./ProfilePageClient";

export async function generateMetadata({ params }: { params: { username: string } }) {
    const user = await getProfileByUsername(params.username);
    if (!user) return;
    return {
        title: `${user.name ?? user.username}`,
        description: user.bio || `Check out ${user.username}'s profile`
    }

}

async function ProfilePageServer({ params }: { params: { username: string } }) {
    const user = await getProfileByUsername(params.username);
    if (!user) notFound();
    const [posts, likedPost, isCurrentUserFollowing] = await Promise.all([
        getUserPosts(user.id),
        getUserLikedPosts(user.id),
        isFollowing(user.id)
    ])

    return <div><ProfilePageClient
    user={user}
    posts={posts}
    likedPosts={likedPost}
    isFollowing={isCurrentUserFollowing}
    /></div>


}
export default ProfilePageServer;