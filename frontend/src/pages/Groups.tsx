import { Suspense, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Plus } from "lucide-react";

import { BE_SERVER_PORT } from "@/constants";
import { Class, Section } from "@/types/data";

import { useAuth } from "@/context/AuthContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Groups = () => {
  const [course, setCourse] = useState<Class>();
  const [section, setSection] = useState<Section>();

  const navigate = useNavigate();
  const auth = useAuth();

  const params = useParams();

  useEffect(() => {
    // Get class by code
    fetch(
      `http://localhost:${BE_SERVER_PORT}/api/courses?ids=${params.courseId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCourse(data[0]);
      });

    // Get class sections
    fetch(
      `http://localhost:${BE_SERVER_PORT}/api/sections?ids=${params.sectionId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSection(data[0]);
      });
  }, []);

  return (
    <div className="px-32 mt-12">
      <h1 className="text-5xl font-bold mb-6">
        {course?.code}: {course?.name}
      </h1>
      <div className="flex flex-row justify-between mb-8">
        <h3>
          Section: <b>{section?.code}</b>
        </h3>
        <h3>
          <b>Institution:</b> {course?.institution}
        </h3>
      </div>
      <h2 className="text-3xl font-bold mb-6">My Groups</h2>
      <div className="mb-6">No joined groups.</div>
      <div className="flex gap-6">
        <h2 className="text-3xl font-bold mb-6">Matching Pools</h2>
        <Button className="bg-gray-900 text-white cursor-pointer hover:bg-gray-700">
          <Plus className="h-5 w-5" />
          Create Pool
        </Button>
      </div>
      {/* <Suspense fallback={<h1>Loading</h1>}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 max-w-6xl w-full mx-auto">
          {sections.map((section) => (
            <Card>
              <CardHeader>
                <CardTitle>
                  Section {section.code}: {section.professor}
                </CardTitle>
                <CardDescription>
                  Enrolled Students: {section.numStudents}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p></p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button
                  className="bg-gray-900 text-white cursor-pointer hover:bg-gray-700"
                  onClick={() => enrollSection(section)}
                >
                  Enroll
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Suspense> */}
    </div>
  );
};

export default Groups;
