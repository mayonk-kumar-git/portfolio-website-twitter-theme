export default function ProfilePic({ profilePic }) {
  return (
    <img
      src={profilePic}
      alt="Profile Picture"
      className="rounded-full h-12 w-12 mt-2"
    />
  );
}
