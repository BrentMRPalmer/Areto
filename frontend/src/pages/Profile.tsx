import { Skeleton } from "@/components/ui/skeleton";

const Profile = () => {
  return (
    <div className="px-32 mt-12">
      <h1 className="text-5xl font-bold mb-6">My Profile</h1>

      <div className="border-t border-gray-200 pt-6">
        {/* Profile Picture */}
        <div className="flex flex-row justify-start items-center gap-8">
        <Skeleton className="h-[80px] w-[80px] rounded-full bg-gray-300 mb-6" />
        <h1 className="text-3xl font-bold mb-6">Jason Wei</h1>
        </div>

        {/* Profile Info */}
        <h3 className="mb-3 text-xl font-semibold">About Me</h3>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          finibus tempor risus et ornare. Cras placerat urna nec rutrum commodo.
          Vestibulum in ante vel nisi tempus dignissim ut at ipsum. Quisque
          accumsan rutrum nunc, id blandit mi rhoncus eu.
        </p>
      </div>
      <div className="mt-6">
        <h3 className="mb-3 text-xl font-semibold">Top Skills</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Algorithms",
            "Public Speaking",
            "Operating Systems",
            "UI/UX Design",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="mb-3 text-xl font-semibold">Additional Info</h3>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default Profile;
