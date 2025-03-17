import { useEffect, useState } from "react";
import ProfileForm from "../components/profile/ProfileForm";
import ProfileDisplay from "../components/profile/ProfileDisplay";
import { ProfileData } from "../components/profile/types";
import { useNavigate } from "react-router-dom";

// Using dummy data for now
const INITIAL_PROFILE: ProfileData = {
  name: "Jason Wei",
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus tempor risus et ornare.",
  skills: ["Algorithms", "Public Speaking", "Operating Systems"],
  additionalInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

export default function Profile() {
  const [profile, setProfile] = useState<ProfileData>(INITIAL_PROFILE);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("myProfile");
      if (stored) {
        try {
          const localProfile = JSON.parse(stored) as ProfileData;
          setProfile(localProfile);
        } catch {
          // no-op
        }
      }
    }
  }, []);

  // Persist to localStorage on changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("myProfile", JSON.stringify(profile));
    }
  }, [profile]);

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleSave(newProfile: ProfileData) {
    setProfile(newProfile);
    setIsEditing(false);
  }

  function handleCancel() {
    setIsEditing(false);
  }

  // The actual logout logic
  function handleLogout() {
    console.log("Logging out...");
    localStorage.removeItem("myProfile");
    navigate("/");
  }

  return (
    <div className="px-32 mt-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-5xl font-bold">My Profile</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded bg-gray-900 text-white hover:bg-gray-500 transition-colors"
        >
          Log out
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center py-8 px-4">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl p-8 min-h-[600px] border-1 border-black">
          {isEditing ? (
            <ProfileForm
              defaultValues={profile}
              onSave={handleSave}
              onCancel={handleCancel}
              error={error}
              setError={setError}
            />
          ) : (
            <ProfileDisplay profile={profile} onEdit={handleEditClick} />
          )}
        </div>
      </div>
    </div>
  );
}