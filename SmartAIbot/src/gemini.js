import { prevUser } from "./context/UserContext";

const Api_Url="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=Api key"

export async function generateResponse() {

    let RequestOption={

        method:"POST",
        Headers:{
            'Content-type' : 'application/json'
        },
        body:JSON.stringify({
            "contents": [
    {
      "parts": [
        {
          "text": prevUser.prompt
        },

        prevUser.data?[  {
          "inline_data": {
            "mime_type": prevUser.mime_type,
            "data": prevUser.data
          }
        }]:[]
      
      ]
    }
  ]
        })

    }

    try{
        
        let response= await fetch(Api_Url,RequestOption)
        
        let data=await response.json()

        console.log("API Response:", data);  // 🟢 Log the entire response

        // Check if 'candidates' exists and has elements
        if (!data.candidates || data.candidates.length === 0) {
          throw new Error("No response from API. Check API Key and request structure.");
      }

        let apiResponse=data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g,"$1").trim()




       // console.log(data);

        //return data

        return apiResponse




    }

    catch(error){
      console.error("Error in API call:", error);
      return "Error: Unable to fetch response";
        
    }

    
}
