import Link from "next/link";

const MenuLink = ({ blok }) => {
  return (
    <Link
      href={`/${blok.link.cached_url}`}
      className="text-base font-clone text-gray-500 hover:text-gray-900 hover:scale-105"
    >
      {blok.name}
    </Link>
  );
};

export default MenuLink;
