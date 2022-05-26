/*This is a basic post function for posting formdata or json object
function needs only 2 parameters url and data(Json Object or FormData())
*/
const Post = async (url,data)=>{
    //check is data FormData()
    is_formdata = data instanceof FormData;
    typeof_data = typeof data;
    //if it is not FormData create a FormData, loop json (or what ever it is) and append all into formdata then replace data with new formdata
    if(typeof_data == "string"){
        try{
            let json_str = JSON.parse(data);
            let form_data = new FormData();
            for ( var key in json_str ) {
                form_data.append(key, json_str[key]);
            }
            data = form_data;

        }
        catch(e){
            return false;
        }
    }
    else if(!is_formdata){
        let form_data = new FormData();
        for ( var key in data ) {
            form_data.append(key, data[key]);
        }
        data = form_data;
    }
    else if(is_formdata){
        data = data;
    }
    else if( typeof_data == "number" || typeof_data=="undefined"){
        return false;
    }
    //if it is FormData just post it.
    const response = await fetch(url,{
        method:'POST',
        body:data,      
    })
    return response.json();
}
