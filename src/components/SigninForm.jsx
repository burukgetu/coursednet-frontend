import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../ui/select";
// import { Textarea } from "../ui/textarea";

function SigninForm({
   formData, 
   setFormData, 
   isButtonDisabled,
   handleSubmit
  }) {
  
  return (
    <div>
      <form onSubmit={handleSubmit}>  
          <div>
              <Label htmlFor="userEmail">Email</Label>
              <Input
                id="userEmail"
                name="userEmail"
                placeholder="Enter your email"
                type="email"
                // eslint-disable-next-line react/prop-types
                value={formData.userEmail}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    userEmail: event.target.value,
                  })
                }
              />
          </div>
        
          <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                placeholder="Enter your password"
                type="password"
                // eslint-disable-next-line react/prop-types
                value={formData.password}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    password: event.target.value,
                  })
                }
              />
          </div>
  
          <Button disabled={isButtonDisabled} type="submit" className="mt-5 w-full">
           Submit
          </Button>
      </form>
    </div>
  )
}

export default SigninForm