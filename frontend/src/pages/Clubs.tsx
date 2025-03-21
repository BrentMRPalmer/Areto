import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Clubs = () => {
  const dummyClubs = [
    {
      institution: "uOttawa",
      name: "Computer Science Club",
    },
    {
      institution: "uOttawa",
      name: "Badminton Club",
    },
    {
      institution: "uOttawa",
      name: "Rowing Club",
    },
  ];

  return (
    <div className="px-32 mt-12">
      <h1 className="text-5xl font-bold mb-6">Find Clubs</h1>
      <div className="flex flex-row justify-end mb-8">
        <h3>[Search Placeholder]</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 max-w-6xl w-full mx-auto">
        {dummyClubs.map((club) => (
          <Card>
            <CardHeader>
              <CardTitle>{club.name}</CardTitle>
              <CardDescription>[description]</CardDescription>
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

export default Clubs;
