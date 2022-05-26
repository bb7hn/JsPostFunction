/*This is a basic post function for posting formdata or json object
function needs only 2 parameters url and data(Json Object or FormData())
*/
const Post = async (url,data)=>{
    //check is data FormData()
    is_formdata = data instanceof FormData;
    //if it is not FormData create a FormData, loop json and append all into formdata then replace data with new formdata
    if(!is_formdata){
        let form_data = new FormData();
        for ( var key in data ) {
            form_data.append(key, data[key]);
        }
        data = form_data;
    }
    //if it is FormData just post it.
    const response = await fetch(url,{
        method:'POST',
        body:data,      
    })
    return response.json();
}
