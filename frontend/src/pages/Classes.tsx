import { Suspense, useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { BE_SERVER_PORT } from "@/constants";
import { useNavigate } from "react-router-dom";

const Classes = () => {
  type Class = {
    _id: string;
    code: string;
    institution: string;
    name: string;
  };

  const [classes, setClasses] = useState<Class[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Get classes to display
    fetch(`http://localhost:${BE_SERVER_PORT}/api/courses`)
      .then((response) => response.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

  return (
    <div className="px-32 mt-12">
      <h1 className="text-5xl font-bold mb-6">Find Classes</h1>
      <div className="flex flex-row justify-between mb-8">
        <h3>
          <b>Term:</b> Winter 2025
        </h3>
        <Input type="text" placeholder="Search" className="w-[300px]" />
      </div>
      <Suspense fallback={<h1>Loading</h1>}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 max-w-6xl w-full mx-auto mb-6">
          {classes.map((course) => (
            <Card
              className="hover:shadow-2xl cursor-pointer"
              onClick={() => navigate("/classes/" + course._id)}
            >
              <CardHeader>
                <CardTitle>{course.code}</CardTitle>
                <CardDescription>{course.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <p></p>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Classes;
