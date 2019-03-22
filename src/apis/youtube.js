import axios from 'axios';
const KEY = 'AIzaSyBMD8xa-7Fg2BWLqtzLDL-E6mzUHEUSBJ0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})