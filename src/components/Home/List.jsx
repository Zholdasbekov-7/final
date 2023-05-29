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
            <Stack direction="horizontal" className="justify-content-start" style={{ flexWrap: "wrap" }} gap={2}>
                {global.countries.map((country, index) => (
                    <Link key={index} to="/country" className="border p-1" onClick={() => dispatch(setCountry(country))}>
                        {country.name}
                    </Link>
                ))}
            </Stack>
        )}

        </>
    )
}