interface PerformerType {
  id: string;
  imgsrc: string;
  name: string;
  post: string;
  pname: string;
  status: string;
  score: string;
}

const TopPerformerData: PerformerType[] = [
  {
    id: "1",
    imgsrc: "/images/profile/user-1.jpg",
    name: "8Horas",
    post: "Web Designer",
    pname: "Elite Admin",
    status: "Low",
    score: "6",
  },
  {
    id: "2",
    imgsrc: "/images/profile/user-2.jpg",
    name: "Bilboquê",
    post: "Web Developer",
    pname: "Flexy Admin",
    status: "Medium",
    score: "6",
  },
  {
    id: "3",
    imgsrc: "/images/profile/user-3.jpg",
    name: "Bordô Gastro Vino",
    post: "Web Manager",
    pname: "Material Pro",
    status: "High",
    score: "3",
  },
  {
    id: "4",
    imgsrc: "/images/profile/user-4.jpg",
    name: "Expolumen",
    post: "Project Manager",
    pname: "Xtreme Admin",
    status: "Very High",
    score: "0",
  },
  {
    id: "5",
    imgsrc: "/images/profile/user-5.jpg",
    name: "Hub of Business",
    post: "Project Manager",
    pname: "Xtreme Admin",
    status: "Very High",
    score: "5",
  },
];

export default TopPerformerData;
