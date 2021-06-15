import React, { useState, useEffect } from "react";
import "../styles/SearchBar.scss";
import Axios from "axios";
import Results from "./Results";
import Map from "./Map";

export interface DetailsState {
    details: {
        ip: string,
        city: string,
        region: string, 
        isp: string,
        timezone: string,
    }
}

export interface PositionState {
    position: {
        lat: string,
        lng: string
    }
}

function SearchBar() {
    const [address, setAddress] = useState<string>("");
    const [details, setDetails] = useState<DetailsState["details"]>({
        ip: "",
        city: "",
        region: "", 
        isp: "",
        timezone: ""
    });
    const [position, setPosition] = useState<PositionState["position"]>({
        lat: "",
        lng: ""
    });

    const [click, setClick] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setAddress(event.target.value);
        console.log(address);
    }

    const handleClick = () => {
        setClick(!click);
        console.log(click);
    }

    useEffect(() => {
        const displayAddress = async (): Promise<void> => {
            try {
                let res = await Axios.get(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_KEY}&ipAddress=${address}`);
                let data = res.data;
                setDetails({
                    ip: data.ip,
                    city: data.location.city,
                    region: data.location.region,
                    isp: data.isp,
                    timezone: data.location.timezone
                });
                setPosition({
                    lat: data.location.lat,
                    lng: data.location.lng
                })
                console.log(data);
            } catch(error) {
                console.error(error);
            }
        };

        displayAddress();
    }, [click]);

    return (
        <div>
            <section id="search-container">
                <h1>IP Address Tracker</h1>
                <input
                type="text"
                placeholder="Search for any IP address"
                value={address}
                onChange={handleChange}
                />
                <button type="submit" onClick={handleClick}>&#62;</button>
             </section>
            { position.lat && position.lng && (
                <Map position={position}/>
            )}
             <Results details={details}/>
        </div>
    )
};

export default SearchBar;