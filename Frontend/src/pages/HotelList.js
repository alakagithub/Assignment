import Axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';

const HotelList = () => {

    const [hotelList, setHotelList] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await Axios.get("http://192.168.1.8:3003/getRestaurant")
                if (res.status === 200) {
                    // setUser(res?.data?.docs)
                    setHotelList(res?.data?.results)
                    // console.log("res", res?.data?.docs)
                }
            } catch (error) { console.log("error", error) }
        }
        getData()
    }, [])

    return (
        <div>

            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="font-karla text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className=''>
                            <th scope="col" class="px-6 py-3">
                                Hotel name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Contact name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Pincode
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Phone
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Location
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Website
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Average daily
                            </th>
                        </tr>
                    </thead>
                    <tbody className='font-inter'>
                        {hotelList && hotelList.length !== 0 && hotelList.map(hotel => (
                            <tr key={hotel._id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {hotel?.restaurant_name}
                                </th>
                                <td class="px-6 py-4">
                                    {hotel?.contact_name}
                                </td>
                                <td class="px-6 py-4">
                                    {hotel?.pincode}
                                </td>
                                <td class="px-6 py-4">
                                    {hotel?.phone_number}
                                </td>
                                <td class="px-6 py-4">
                                    {hotel?.location}
                                </td>
                                <td class="px-6 py-4">
                                    {hotel?.website}
                                </td>
                                <td class="px-6 py-4">
                                    {hotel?.average_daily_transaction}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default HotelList