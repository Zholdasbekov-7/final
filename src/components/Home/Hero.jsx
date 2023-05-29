import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getCountries } from "../../store/globalReduces";
export const Hero = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            search && dispatch(getCountries(search));
        }, 500);
        return () => clearTimeout(delayDebounceFn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])
    useEffect(() => {
        (!global.countries || global.countries.length < 1) && dispatch(getCountries());
    }, []);
    return (
        <div class="input-group mb-3 w-50">
            <input 
                type="search" 
                class="form-control" 
                placeholder="Search by country code(for example: kz, us)" 
                aria-label="Search by models" 
                aria-describedby="basic-addon2" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" onClick={() => setSearch('')}>Clear</button>
            </div>
        </div>
    )
}