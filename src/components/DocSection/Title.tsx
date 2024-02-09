interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return <h3 className="text-gray-600 font-semibold text-3xl">{title}</h3>;
}
