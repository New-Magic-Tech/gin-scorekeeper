import Section from "../../components/Section";

interface GameData {
  player1Name: string;
  player2Name: string;
  player1Score: string;
  player2Score: string;
  winner: string;
}

export default function GameInfo({ data }: { data: GameData }) {
  return (
    <div className="">
        <p className="text-darkGreen">{data.player1Name} <span className="text-blue">{data.player1Score}</span> vs. {data.player2Name} <span className='text-red'>{data.player2Score}</span></p>
    </div>
  )
}