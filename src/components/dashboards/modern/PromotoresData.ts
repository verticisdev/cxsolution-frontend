interface PerformerType {
  id: string;
  imgsrc: string;
  name: string;
  post: string;
  pname: string;
  status: string;
  score: string;
}

const PromotoresData: PerformerType[] = [
  {
    id: "1",
    imgsrc: "/images/profile/user-1.jpg",
    name: "3D Cure",
    post: "Web Designer",
    pname: "Elite Admin",
    status: "Low",
    score: "8",
  },
  {
    id: "2",
    imgsrc: "/images/profile/user-4.jpg",
    name: "A3 Data",
    post: "Web Developer",
    pname: "Flexy Admin",
    status: "Medium",
    score: "8",
  },
  {
    id: "3",
    imgsrc: "/images/profile/user-6.jpg",
    name: "Affemg",
    post: "Web Manager",
    pname: "Material Pro",
    status: "High",
    score: "8",
  },
  {
    id: "4",
    imgsrc: "/images/profile/user-8.jpg",
    name: "Aleva",
    post: "Grupo Aktie",
    pname: "Xtreme Admin",
    status: "Very High",
    score: "7",
  },
  {
    id: "5",
    imgsrc: "/images/profile/user-3.jpg",
    name: "Angher",
    post: "Project Manager",
    pname: "Xtreme Admin",
    status: "Very High",
    score: "8",
  },
];

export default PromotoresData;
