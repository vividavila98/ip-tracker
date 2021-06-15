import "../styles/Results.scss";
import { DetailsState as DetailsProps } from "./SearchBar";

function Results(props: DetailsProps) {
    const { details } = props;

    return (
        <section id="result-container">
            <div className="box">
                <div className="title">IP Address</div>
                <div className="info">{details.ip}</div>
            </div>
            <div className="box">
                <div className="title">Location</div>
                <div className="info">{details.city}, {details.region}</div>
            </div>
            <div className="box">
                <div className="title">Timezone</div>
                <div className="info">{details.timezone}</div>
            </div>
            <div className="box">
                <div className="title">ISP</div>
                <div className="info">{details.isp}</div>
            </div>
        </section>
    )
};

export default Results;