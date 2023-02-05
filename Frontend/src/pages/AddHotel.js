import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const AddHotelSchema = Yup.object().shape({
    restaurant_name: Yup.string().required('Required').trim(),
    contact_name: Yup.string().required('Required').trim(),
    pincode: Yup.string().required('Required').trim(),
    phone_number: Yup.string().required('Required').trim(),
    location: Yup.string().required('Required').trim(),
    website: Yup.string().required('Required').trim(),
    average_daily_transaction: Yup.string().required('Required').trim(),
})

const AddHotel = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    const handleSubmit = (values) => {
        // e.preventDefault();
        // window.alert(JSON.stringify(values))
        try {
            async function fetchData() {
                const res = await fetch('http://192.168.1.8:3003/addRestaurant', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                })
                const json = await res.json()
                if (res.status === 201) {
                    setData(json)
                    window.alert(json.message)
                    // navigate("/signin")
                    window.location.href = '/hotelList'
                } else {
                    setError(json.message)
                }
            }
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white font-karla">Add a new Restaurants</h2>
                <Formik
                    initialValues={{
                        restaurant_name: '',
                        contact_name: '',
                        phone_number: '',
                        location: '',
                        website: '',
                        average_daily_transaction: '',
                    }}
                    validationSchema={AddHotelSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched }) => (
                        <Form className='font-inter'>
                            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div class="w-full">
                                    <label for="restaurant_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Restaurant Name</label>
                                    <Field type="text" name="restaurant_name" id="restaurant_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Restaurant Name" required="" />
                                    {errors.restaurant_name && touched.restaurant_name && (
                                        <div className="text-danger">{errors.restaurant_name}</div>
                                    )}
                                </div>
                                <div class="w-full">
                                    <label for="contact_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Name</label>
                                    <Field type="text" name="contact_name" id="contact_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Contact Name" required="" />
                                    {errors.contact_name && touched.contact_name && (
                                        <div className="text-danger">{errors.contact_name}</div>
                                    )}
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="location" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                                    <Field type="text" name="location" id="location" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="DR-120, 4th Block, New York" required="" />
                                    {errors.location && touched.location && (
                                        <div className="text-danger">{errors.location}</div>
                                    )}
                                </div>
                                <div>
                                    <label for="pin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pin Code</label>
                                    <Field type="number" name="pincode" id="pin" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="710236" required="" />
                                    {errors.number && touched.number && (
                                        <div className="text-danger">{errors.number}</div>
                                    )}
                                </div>
                                <div>
                                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                                    <Field type="tel" name="phone_number" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+91 65414 23987" required="" />
                                    {errors.phone_number && touched.phone_number && (
                                        <div className="text-danger">{errors.phone_number}</div>
                                    )}
                                </div>
                                <div>
                                    <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website</label>
                                    <Field type="text" name="website" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://www.example.com" required="" />
                                    {errors.website && touched.website && (
                                        <div className="text-danger">{errors.website}</div>
                                    )}
                                </div>
                                <div>
                                    <label for="avg_daily" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Average Daily</label>
                                    <Field type="number" name="average_daily_transaction" id="avg_daily" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$ 14,500" required="" />
                                    {errors.restaurant_name && touched.restaurant_name && (
                                        <div className="text-danger">{errors.restaurant_name}</div>
                                    )}
                                </div>
                            </div>
                            <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                Add hotel
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
}

export default AddHotel