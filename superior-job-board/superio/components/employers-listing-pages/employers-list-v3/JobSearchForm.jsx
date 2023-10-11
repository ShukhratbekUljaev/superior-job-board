import { useDispatch, useSelector } from "react-redux";
import { addFoundationDate } from "../../../features/filter/employerFilterSlice";
import Categories from "../components/Categories";
import LocationBox from "../components/LocationBox";
import SearchBox from "../components/SearchBox";

const JobSearchForm = () => {
    const { foundationDate } = useSelector((state) => state.employerFilter);
    const dispatch = useDispatch();

    // founded handler
    const foundedHandler = (e) => {
        const data = JSON.parse(e.target.value);
        dispatch(addFoundationDate(data));
    };

    return (
        <>
            <div className="job-search-form">
                <div className="row">
                    <div className="form-group col-lg-4 col-md-12 col-sm-12">
                        <SearchBox />
                    </div>
                    {/* <!-- Form Group --> */}

                    <div className="form-group col-lg-3 col-md-12 col-sm-12 location">
                        <LocationBox />
                    </div>
                    {/* <!-- Form Group --> */}

                    <div className="form-group col-lg-3 col-md-12 col-sm-12 location">
                        <Categories />
                    </div>
                    {/* <!-- Form Group --> */}

                    <div className="form-group col-lg-2 col-md-12 col-sm-12 text-right">
                        <button
                            type="submit"
                            className="theme-btn btn-style-one"
                        >
                            Find Jobs
                        </button>
                    </div>
                    {/* <!-- Form Group --> */}
                </div>
            </div>

            <div className="top-filters">
                <div className="form-group">
                    <select
                        className="chosen-single form-select"
                        onChange={foundedHandler}
                        value={JSON.stringify(foundationDate)}
                    >
                        <option
                            value={JSON.stringify({
                                min: 1900,
                                max: 2028,
                            })}
                        >
                            Founded Date
                        </option>
                        <option
                            value={JSON.stringify({
                                min: 1900,
                                max: 1950,
                            })}
                        >
                            1900 - 1950
                        </option>
                        <option
                            value={JSON.stringify({
                                min: 1950,
                                max: 2000,
                            })}
                        >
                            1950 - 2000
                        </option>
                        <option
                            value={JSON.stringify({
                                min: 2000,
                                max: 2028,
                            })}
                        >
                            2000 - 2028
                        </option>
                    </select>
                </div>
                {/* End founded date filter */}
            </div>
        </>
    );
};

export default JobSearchForm;
