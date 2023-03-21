import Stacked from "../../components/Stacked"
import Row from "../../components/Row"
import ScoreInput from "./ScoreInput"

export default function Game(){

    return (
        <Stacked>
            <h1>
                Gin Scorekeeper
            </h1>
            <Row>
                <ScoreInput/>
            </Row>
        </Stacked>
    )
}