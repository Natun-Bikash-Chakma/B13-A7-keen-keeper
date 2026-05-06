import friendsData from '../../friends.json';
import FriendDetailsClient from './FriendDetailsClient';

export async function generateStaticParams() {
    return friendsData.map((friend) => ({
        id: friend.id.toString(),
    }));
}

export default async function FriendPage({ params }) {
    const { id } = await params;
    const friend = friendsData.find(f => f.id === parseInt(id));

    if (!friend) return <div className="text-center py-20">Friend not found!</div>;

    return <FriendDetailsClient friend={friend} />;
}
