interface PerformerType {
  id: string;
  imgsrc: string;
  name: string;
  post: string;
  pname: string;
  status: string;
  score: string;
}

const NeutralData: PerformerType[] = [
  {
    id: "1",
    imgsrc: "/images/profile/user-6.jpg",
    name: "ADS Latin",
    post: "Web Designer",
    pname: "Elite Admin",
    status: "Low",
    score: "8",
  },
  {
    id: "2",
    imgsrc: "/images/profile/user-7.jpg",
    name: "ContaDr.",
    post: "Web Developer",
    pname: "Flexy Admin",
    status: "Medium",
    score: "8",
  },
  {
    id: "3",
    imgsrc: "/images/profile/user-8.jpg",
    name: "Dr Weverton",
    post: "Web Manager",
    pname: "Material Pro",
    status: "High",
    score: "8",
  },
  {
    id: "4",
    imgsrc: "/images/profile/user-9.jpg",
    name: "Expolumen",
    post: "Grupo Aktie",
    pname: "Xtreme Admin",
    status: "Very High",
    score: "7",
  },
  {
    id: "5",
    imgsrc: "/images/profile/user-10.jpg",
    name: "Huawen",
    post: "Project Manager",
    pname: "Xtreme Admin",
    status: "Very High",
    score: "8",
  },
];

export default NeutralData;
