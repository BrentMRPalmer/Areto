import { FormEvent } from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

import { allSkillOptions, DEFAULT_PFP } from "./constants";
import { ProfileData } from "./types";

interface ProfileFormProps {
  defaultValues: ProfileData;
  onSave: (data: ProfileData) => void;
  onCancel: () => void;
  error: string | null;
  setError: (error: string | null) => void;
}

const ProfileForm = ({
  defaultValues,
  onSave,
  onCancel,
  error,
  setError,
}: ProfileFormProps) => {
  // Setup react-hook-form with given default values
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProfileData>({
    defaultValues,
  });

  // Handler for form submission
  const onSubmit: SubmitHandler<ProfileData> = (data) => {
    setError(null);
    onSave(data);
  };

  // We wrap handleSubmit to allow preventDefault
  function handleSave(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleSubmit(onSubmit)(e);
  }

  return (
    <form onSubmit={handleSave}>
      {/* Display any error up top */}
      {error && (
        <div className="p-4 mb-4 bg-red-100 text-red-800 border border-red-300 rounded">
          {error}
        </div>
      )}

      {/* Profile Picture & Name (read-only) */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <img
          src={DEFAULT_PFP}
          alt="Profile Picture"
          className="h-[80px] w-[80px] rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">Name</p>
          <input
            readOnly
            className="mt-1 p-2 border rounded w-full max-w-sm bg-gray-100"
            {...register("name")}
          />
        </div>
      </div>

      {/* About Me */}
      <div className="mb-6">
        <label className="block font-semibold mb-1" htmlFor="about">
          About Me
        </label>
        <textarea
          id="about"
          rows={4}
          className="w-full max-w-2xl p-2 border rounded"
          {...register("about", {
            required: "About Me is required.",
          })}
        />
        {errors.about && (
          <p className="text-red-600 text-sm mt-1">{errors.about.message}</p>
        )}
      </div>

      {/* Skills */}
      <div className="mb-6">
        <label className="block font-semibold mb-1" htmlFor="skills">
          Top Skills
        </label>
        <div className="max-w-sm">
          <Controller
            control={control}
            name="skills"
            render={({ field }) => {
              const selectedOptions = (field.value || []).map((skill) => ({
                value: skill,
                label: skill,
              }));

              return (
                <CreatableSelect
                  id="skills"
                  isMulti
                  options={allSkillOptions}
                  value={selectedOptions}
                  onChange={(newValue) => {
                    field.onChange(newValue.map((opt) => opt.value));
                  }}
                  onCreateOption={(inputValue) => {
                    const newSkill = inputValue.trim();
                    if (!newSkill) return;
                    const current = field.value || [];
                    if (!current.includes(newSkill)) {
                      field.onChange([...current, newSkill]);
                    }
                  }}
                />
              );
            }}
          />
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Type to add new skills, or select from existing suggestions.
        </p>
      </div>

      {/* Additional Info */}
      <div className="mb-6">
        <label
          className="block font-semibold mb-1"
          htmlFor="additionalInfo"
        >
          Additional Info
        </label>
        <textarea
          id="additionalInfo"
          rows={2}
          className="w-full max-w-2xl p-2 border rounded"
          {...register("additionalInfo")}
        />
      </div>

      {/* Transcript Upload & Get Verified Upsell */}
      <div className="mb-6">
        <label className="block font-semibold mb-1">Transcript</label>
        <div className="flex items-center gap-4">
          <button
            type="button"
            disabled
            title="Get Verified to upload transcript"
            className="px-4 py-2 border border-gray-300 rounded bg-gray-100 text-gray-500 cursor-not-allowed"
          >
            Upload Transcript
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-black text-white rounded font-medium"
          >
            Get Verified
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Verify your profile to upload your transcript.
        </p>
      </div>

      {/* Form Buttons */}
      <div className="flex gap-4">
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded"
        >
          Save
        </button>
        <button
          type="button"
          className="p-2 bg-gray-200 text-black rounded"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ProfileForm;