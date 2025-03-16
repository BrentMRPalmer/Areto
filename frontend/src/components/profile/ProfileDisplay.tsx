import { FaPencilAlt } from "react-icons/fa";
import { DEFAULT_PFP } from "./constants";
import { ProfileData } from "./types";

interface ProfileDisplayProps {
  profile: ProfileData;
  onEdit: () => void;
}

export default function ProfileDisplay({ profile, onEdit }: ProfileDisplayProps) {
  return (
    <div>
      {/* Profile Picture, Name & Edit */}
      <div className="flex flex-row items-center gap-4 mb-6">
        <img
          src={DEFAULT_PFP}
          alt="Profile Picture"
          className="h-[80px] w-[80px] rounded-full object-cover"
        />
        <h2 className="text-2xl font-bold">{profile.name}</h2>

        {/* Pencil icon to trigger edit mode */}
        <div className="cursor-pointer" onClick={onEdit}>
          <FaPencilAlt className="h-5 w-5 text-black" />
        </div>

        <button
          type="button"
          className="px-4 py-2 bg-black text-white rounded font-medium"
        >
          Get Verified
        </button>
      </div>

      {/* About Me */}
      <h3 className="mb-3 text-xl font-semibold">About Me</h3>
      <p className="text-gray-700">{profile.about}</p>

      {/* Top Skills */}
      <div className="mt-6">
        <h3 className="mb-3 text-xl font-semibold">Top Skills</h3>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm flex items-center gap-2"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-6">
        <h3 className="mb-3 text-xl font-semibold">Additional Info</h3>
        <p className="text-gray-700">{profile.additionalInfo}</p>
      </div>
    </div>
  );
}
