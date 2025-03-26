import { Suspense, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { BE_SERVER_PORT } from "@/constants";
import { Class, Section, Pool } from "@/types/data";

import { useAuth } from "@/context/AuthContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PoolPage = () => {
  const [course, setCourse] = useState<Class>();
  const [section, setSection] = useState<Section>();
  const [pool, setPool] = useState<Pool>();

  const skills = [
    "Algorithms",
    "Public Speaking",
    "Operating Systems",
    "UI/UX",
  ];

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

    // Get class section
    fetch(
      `http://localhost:${BE_SERVER_PORT}/api/sections?ids=${params.sectionId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSection(data[0]);
      });

    // Get pool
    fetch(`http://localhost:${BE_SERVER_PORT}/api/pools?id=${params.poolId}`)
      .then((response) => response.json())
      .then((data) => {
        setPool(data[0]);
      });
  }, []);

  return (
    <div className="px-32 mt-12">
      <h1 className="text-5xl font-bold mb-6">Find Optimal People</h1>
      <div>
        <h3 className="mb-1">
          Currently searching in: <b>{pool?.name}</b>
        </h3>
        <div className="flex gap-6 mb-6">
          <div>
            <h3 className="mb-1">
              Course: <b>{course?.code}</b>
            </h3>
            <h3>
              Institution: <b>{course?.institution}</b>
            </h3>
          </div>
          <div>
            <h3 className="mb-1">
              Section: <b>{section?.code}</b>
            </h3>
            <h3>
              Term: <b>{section?.term}</b>
            </h3>
          </div>
        </div>
      </div>
      <Suspense fallback={<h1>Loading</h1>}>
        <div className="w-full flex justify-center">
          <Carousel className="w-full max-w-3xl">
            <CarouselContent>
              <CarouselItem>
                <Card className="min-h-[200px] max-h-[600px] h-[60vh] p-0">
                  <CardContent className="p-0">
                    <div className="pl-6 py-4">
                      <h2 className="text-2xl font-bold mb-1">
                        {auth.user.firstName} {auth.user.lastName}
                      </h2>
                      <h3 className="mb-1">
                        Program: <b>Honours Bsc in Computer Science</b>
                      </h3>
                      <h3 className="mb-1">
                        General Rating: <b>4.8/5</b>
                      </h3>
                      <h3 className="mb-1">
                        Compatibility Score: <b>9.7/10</b>
                      </h3>
                    </div>
                    <hr className="border-dashed"></hr>
                    <div className="p-4">
                      <h3 className="mb-2 text-xl font-semibold">About Me</h3>
                      <p className="text-gray-700 mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean finibus tempor risus et ornare. Cras placerat
                        urna nec rutrum commodo. Vestibulum in ante vel nisi
                        tempus dignissim ut at ipsum. Quisque accumsan rutrum
                        nunc, id blandit mi rhoncus eu.
                      </p>
                      <h3 className="mb-2 text-xl font-semibold">Top Skills</h3>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm flex items-center gap-2"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <h3 className="mb-3 text-xl font-semibold">
                        Additional Info
                      </h3>
                      <p className="text-gray-700">N/A</p>
                      <div className="flex justify-end w-full items-end absolute bottom-4 right-4">
                        <Button className="bg-gray-900 text-white cursor-pointer hover:bg-gray-700 tracking-wide">
                          <b>Connect</b>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>...</CarouselItem>
              <CarouselItem>...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Suspense>
    </div>
  );
};

export default PoolPage;
