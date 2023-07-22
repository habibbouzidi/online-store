import { getGame } from "@/libs/apis";

const GameDetailsServer: any = async (props: { slug: string }) => {
    const { slug } = props;
    const game = await getGame(slug);

    return (
        <>
      <h2 className={classNames.name}>{game.name}</h2>
      <p className={classNames.price}>{game.price} $</p>
      <h2 className={classNames.description}>{game.description}</h2>
    </>
    )
}

export default GameDetailsServer

const classNames = {
    description: "text-lg text-gray-300 mb-2",
    name: "text-4xl pt-5 text-gray-300 font-bold mb-2",
    price: "text-2xl text-primary font-bold",
  };