export async function postRegisterInfo(name, email, password){
  try{
      const options = {
          method: "post",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              "name": name,
              "email": email, 
              "password": password
            }),
      };

      const response = await fetch(`https://v2.api.noroff.dev/auth/register`, options); 
      //console.log(data);

      if(response.ok){
          const data = await response.json();
          //console.log(data);
          window.alert("User created")
          window.location = "/";
      } else {
          throw new Error(response.statusText);
      }
      
  }
  catch(error){
      console.error(error.message);
      //console.log("hei")
      window.alert("user exist")
   
  }
}


