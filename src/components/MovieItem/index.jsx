import { Tags } from "../Tags/index.jsx"
import { StarRating } from "../StarRating/index.jsx"
import { Container } from "./style.js"


export function MovieItem({ title, sumary, score, tags, ...rest }) {
    return (
        <Container {...rest}>
            <h2>{title}</h2>
            <StarRating score={score}/>
            {/* <StarRatings 
                rating={score} 
                numberOfStars={5}
                starEmptyColor='#fcc1cc'
                starRatedColor='rgba(255, 133, 155, 1)'
                starDimension='20px'
            /> */}
            <p>{sumary}</p>
            <div>
                <Tags tags={tags} />
            </div>
        </Container>
    )
}