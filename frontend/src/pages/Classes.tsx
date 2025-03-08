import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Classes = () => {
  const dummyCourses = [
    {
      code: "CSI2132",
      institution: "uOttawa",
      name: "Databases",
    },
    {
      code: "CSI2132",
      institution: "uOttawa",
      name: "Databases",
    },
    {
      code: "CSI2132",
      institution: "uOttawa",
      name: "Databases",
    },
  ];
  return (
    <div className="px-32 mt-12">
      <h1 className="text-5xl font-bold mb-6">My Classes</h1>
      <div className="flex flex-row justify-between mb-8">
        <h3>
          <b>Term:</b> Winter 2025
        </h3>
        <h3>[Search Placeholder]</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 max-w-6xl w-full mx-auto">
        {dummyCourses.map((course) => (
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
    </div>
  );
};

export default Classes;
