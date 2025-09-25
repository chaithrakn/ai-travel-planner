import React from 'react'
import AutoComplete  from 'react-google-autocomplete'

function CreateTrip() {
  return (
    <div className='sm:px-10 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Tell us your travel preferences</h2>
      <p className='mt-3 text-gray-500 text-xl'>Provide basic information about your trip and out trip planner will generate a customized itinerary based on your preferences.</p>
    
      <div className='mt-20'>
        <h2 className='font-medium text-xl mt-10 mb-5'>What is your destination of choice?</h2>
        <AutoComplete
          apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
          
        />
      </div>
    
    </div>
  )
}

export default CreateTrip
