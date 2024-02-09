interface CardProps {
  children: JSX.Element;
}

function Card({ children }: CardProps) {
  return (
    <article className="bg-white p-5 rounded-xl shadow-xl h-full">
      {children}
    </article>
  );
}

export default Card;
