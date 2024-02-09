interface CardProps {
  icon: string;
  title: string;
  link: string;
  children: JSX.Element;
}

function Card({ children, icon, title, link }: CardProps) {
  return (
    <article
      className="bg-white p-5 rounded-xl shadow-xl h-full cursor-pointer hover:shadow-2xl duration-200"
      onClick={() => window.open(link, "_blank")}
    >
      <div className="w-full flex items-center">
        <img src={icon} alt="SVG Icon" className="w-24" />
        <h3 className="font-medium text-xl text-gray-600 mx-auto">{title}</h3>
      </div>
      <hr className="my-3" />
      <div className="text-start">{children}</div>
    </article>
  );
}

export default Card;
