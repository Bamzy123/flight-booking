import {useState} from "react";
import axios from "axios";

const FlightSearch = () => {
    const [fromId, setFromId] = useState('');
    const [toId, setToId] = useState('');
    const [departDate, setDepartDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const searchFlights = async () => {
        if (!fromId || !toId || !departDate || !returnDate) {
            setError('Please fill in all required fields: departure airport, arrival airport, departure date, and return date');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const params = {
                fromId: fromId.includes('.') ? fromId : fromId + '.AIRPORT',
                toId: toId.includes('.') ? toId : toId + '.AIRPORT',
                departDate: departDate, // Try YYYY-MM-DD format
                returnDate: returnDate,
                stops: 'none',
                pageNo: 1,
                adults: 1,
                children: '0',
                sort: 'BEST',
                cabinClass: 'ECONOMY',
                currency_code: 'AED'
            };

            console.log('Sending params:', params); // Debug the exact params being sent

            const response = await axios.request({
                method: 'GET',
                url: 'https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights',
                params: params,
                headers: {
                    'x-rapidapi-key': 'add5f3f7aemsh348d74d97b76edcp15e726jsn6b9d0cf8ecd2',
                    'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
                }
            });

            console.log('Full response:', response.data);

            if (response.data.status === false) {
                setError('API Error: ' + JSON.stringify(response.data.message));
                setFlights([]);
            } else {
                setFlights(response.data.flights || response.data.data || []);
            }
        } catch(err) {
            console.error('Flight search error', err);
            setError('Network error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4">Flight Search</h2>
            <div className="flex flex-col gap-4">
                <input
                    className="border rounded p-2"
                    placeholder="From (e.g, BOM)"
                    value={fromId}
                    onChange={(e) => setFromId(e.target.value.toUpperCase())}
                />
                <input
                    className="border rounded p-2"
                    placeholder="To (e.g, DEL)"
                    value={toId}
                    onChange={(e) => setToId(e.target.value.toUpperCase())}
                />
                <input
                    type="date"
                    className="border rounded p-2"
                    placeholder="Departure Date"
                    value={departDate}
                    onChange={(e) => setDepartDate(e.target.value)}
                />
                <input
                    type="date"
                    className="border rounded p-2"
                    placeholder="Return Date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                />
                <button
                    onClick={searchFlights}
                    disabled={loading}
                    className="bg-blue-600 text-white font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50">
                    {loading ? 'Searching...' : 'Search Flights'}
                </button>
            </div>

            {error && (
                <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                    {error}
                </div>
            )}

            <div className="mt-6">
                {flights.length > 0 ? (
                    <ul className="space-y-2">
                        {flights.map((flight, i) => (
                            <li key={i} className="border p-4 rounded shadow">
                                <div className="font-semibold">
                                    Flight {i + 1}
                                </div>
                                <div className="text-sm text-gray-600 mt-2">
                                    {JSON.stringify(flight, null, 2)}
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    !loading && <p className="text-gray-500 mt-4">No flights found yet.</p>
                )}
            </div>
        </div>
    );
};

export default FlightSearch;