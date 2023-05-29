import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Stack } from "react-bootstrap";

export const City = () => {
    const country = useSelector((state) => state.global.country);
    return(
        <Stack>
            <Link to="/">
                Go back
            </Link>
            <h1>
                {country.name}
            </h1>
            <div>
                Currency - {country.currency.name} | {country.currency.code}
            </div>
            <div>
                Population - {country.population.toLocaleString('ru-RU')}M
            </div>
            <div>
                GDP - ${country.gdp.toLocaleString('ru-RU')}M
            </div>
            <div>
                Capital - {country.capital}
            </div>
            <div>
                Life expectancy (female) - {country.life_expectancy_female}
            </div>
            <div>
                Life expectancy (male) - {country.life_expectancy_male}
            </div>
        </Stack>
    )
}