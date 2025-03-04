import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setFilter } from "../redux/jobSlice"
import FilterComponent from "../components/JobFilter";

const Home = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    // On page load, sync filter from URL to Redux
    useEffect(() => {
        const filterFromUrl = searchParams.get("filter") || "all"; // Default to "all"
        dispatch(setFilter(filterFromUrl));
    }, [searchParams, dispatch]);

    return (
        <div>
            <h1>Task Filter</h1>
            <FilterComponent />
        </div>
    );
};

export default Home;
