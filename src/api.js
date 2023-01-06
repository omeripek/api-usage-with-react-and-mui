import axios from "axios";

const baseEndspoint = "https://api.covid19api.com";

export const fetchCountries = async () => {
    const {data} = await axios.get(`${baseEndspoint}/countries`);
    return data;
}

export const fetchDailyData = async (country) => {
    const {data} = await axios.get(`${baseEndspoint}/dayone/country/${country}`);
    return data;
}