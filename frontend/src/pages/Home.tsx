import { Suspense, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BE_SERVER_PORT } from "@/constants";

const Home = () => {
  type Class = {
    code: string;
    institution: string;
    name: string;
  };

  const [classes, setClasses] = useState<Class[]>([]);

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
      <h1 className="text-5xl font-bold mb-6">My Classes</h1>
      <div className="flex flex-row justify-between mb-8">
        <h3>
          <b>Term:</b> Winter 2025
        </h3>
        <h3>[Search Placeholder]</h3>
      </div>
      <Suspense fallback={<h1>Loading</h1>}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 max-w-6xl w-full mx-auto">
          {classes.map((course) => (
            <Card>
              <CardHeader>
                <CardTitle>{course.code}</CardTitle>
                <CardDescription>{course.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <p></p>
              </CardContent>
              <CardFooter>
                <p>1 Joined Group</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
