import { Stack } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import { Loader } from "../Loader";
import { Link } from "react-router-dom";
import { setCountry } from "../../store/globalReduces";

export const List = () => {
    const dispatch = useDispatch();
    const global = useSelector((state) => state.global);
    return (
        <>
        {global.status === "loading" && <Loader />}
        {global.status === "failed" && <div>Something went wrong, please try again</div>}
        {global.status === "idle" && global.countries && global.countries.length > 0 && (
            <Stack direction="horizontal" className="justify-content-between" style={{ flexWrap: "wrap" }} gap={3}>
                {global.countries.map((country, index) => (
                    <Link key={index} to="/country" onClick={() => dispatch(setCountry(country))}>
                        <Card border="primary" style={{ width: '18rem' }}>
                            <Card.Header>{index + 1}. {country.region}</Card.Header>
                            <Card.Body>
                            <Card.Title>{country.name}</Card.Title>
                            <Card.Text>
                                Population: {country.population.toLocaleString('ru-RU')}M
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                ))}
            </Stack>
        )}

        </>
    )
}