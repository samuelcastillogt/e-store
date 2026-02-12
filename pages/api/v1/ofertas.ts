// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  res.status(200).json([
    {categoria: "Electronicos", nombre: "TV Holografica", precio: 800, img: "https://png.pngtree.com/png-clipart/20250201/original/pngtree-stunning-sunset-displayed-on-a-modern-flat-screen-tv-png-image_20365887.png"},
    {categoria: "Ropa", nombre: "Novia IA", precio: 1200, img: "https://static.vecteezy.com/system/resources/thumbnails/047/239/155/small/lacy-lingerie-set-delicate-white-lace-bra-and-panties-with-intricate-floral-patterns-and-scalloped-png.png"}
  ]);
}
