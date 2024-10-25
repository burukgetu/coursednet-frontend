import InputForm from "@/components/InputForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { courseLandingPageFormControls } from "@/config";
import { InstructorContext } from "@/context/instructor-context";
import { useContext } from "react";

function CourseLanding() {
  const { courseLandingFormData, setCourseLandingFormData } =
    useContext(InstructorContext);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Landing Page</CardTitle>
      </CardHeader>
      <CardContent>
         {courseLandingPageFormControls.map((data) => (
          <div key={data.name}>
            <InputForm 
            data={data}
            formData={courseLandingFormData}
            setFormData={setCourseLandingFormData}
            />
        </div>))}
      </CardContent>
    </Card>
  );
}

export default CourseLanding;
