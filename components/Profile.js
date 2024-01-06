import FooterNav from "./common/FooterNav";
import ProfileHeader from "./ProfileHeader";

const Profile = ({ goProfileAndWithdraw }) => {
  return (
    <div>
      <ProfileHeader goProfileAndWithdraw={goProfileAndWithdraw} />
      <FooterNav />
    </div>
  );
};

export default Profile;
