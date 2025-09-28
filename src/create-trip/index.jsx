import React, { useEffect } from 'react'
import GooglePlacesAutoComplete from 'react-google-places-autocomplete'
import { Input } from '../components/ui/input';
import { AI_PROMPT, selectBudgetOptions, selectTravelStyleOptions } from '../constants/options';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';
import { chatSession } from '../service/AIModel.jsx';

function CreateTrip() {
  // setPlace is a state setter function created by React's useState hook
  const [place, setPlace] = React.useState();

  const [formData, setFormData] = React.useState({});

  const handleInputChange = (name, value) => {

    /* if(name === 'noOfDays' && value > 5) {
      console.log("Days should not exceed 5");
      return;
    } */  

    setFormData({...formData, [name]:value})  
  }     

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const onGenerateTrip = async() => {
    // Function to handle trip generation logic
    console.log("Generating trip with data:", formData);

    if (!formData.location || !formData.noOfDays || !formData.travelStyle || !formData.budget) {
      toast("Please fill all the fields");
      return
    } 
    
    const FINAL_PROMPT = AI_PROMPT.replace('{location}', formData.location.label)
                              .replace('{noOfDays}', formData.noOfDays)
                              .replace('{travelStyle}', formData.travelStyle)
                              .replace('{budget}', formData.budget)
                              .replace('{noOfDays}', formData.noOfDays);
    console.log(FINAL_PROMPT);   
    
    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result?.response?.text());  
    return;
  }

  return (
    <>
      <div className='sm:px-10 lg:px-56 xl:px-10 px-5 mt-10'>
        <h2 className='font-bold text-3xl'>Tell us your travel preferences</h2>
        <p className='mt-3 text-gray-500 text-xl'>Provide basic information about your trip and out trip planner will generate a customized itinerary based on your preferences.</p>
        <div className='mt-20 pb-8'>
          <h2 className='font-medium my-3 text-xl'>What is your destination of choice?</h2>
          <GooglePlacesAutoComplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => { setPlace(v); handleInputChange('location',v)}
            }}
          />
        </div>
        <div className='pb-8'>
          <h2 className='font-medium my-3 text-xl'>How long is your trip?</h2>
          <Input type='number' placeholder='Enter number of days' 
            onChange={(e) => handleInputChange('noOfDays', e.target.value)}
          />

        </div>
        <div className='pb-8'>
          <h2 className='font-medium text-xl'>What is your travel style?</h2>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-5'>
            {selectTravelStyleOptions.map((item, index) => (
              <div key={index} 
              onClick={() => handleInputChange('travelStyle', item.people)}
              className={`p-4 cursor-pointer border rounded-lg gap-4 hover:shadow-lg transition-shadow
              ${formData.travelStyle === item.people&&'shadow-lg border-black'}
              `}>
                <h2 className='text-3xl'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <p className='text-gray-500'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='pb-8'>
          <h2 className='font-medium text-xl'>What is your budget?</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-5'>
            {selectBudgetOptions.map((item, index) => (
              <div key={index} 
              onClick={() => handleInputChange('budget', item.title)}
              className={`p-4 cursor-pointer border rounded-lg gap-4 hover:shadow-lg transition-shadow
              ${formData.budget === item.title&&'shadow-lg border-black'}
              `}>
                <h2 className='text-3xl'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <p className='text-gray-500'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='  flex justify-center mb-10'>
        <Button onClick={onGenerateTrip}>Generate trip</Button>
      </div>
    </>
  );
}

export default CreateTrip
