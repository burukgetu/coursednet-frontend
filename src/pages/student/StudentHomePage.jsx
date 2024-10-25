import { courseCategories } from "@/config";
import banner from "/images/banner-img.jpg";
import { Button } from "@/components/ui/button";
import { useContext, useEffect } from "react";
import { StudentContext } from "@/context/student-context";
import {
  // checkCoursePurchaseInfoService,
  fetchStudentViewCourseListService,
} from "@/services";
import { AuthContext } from "@/context/auth-context";
import { useNavigate } from "react-router-dom";
import Hero from "@/components/common-ui/Hero";
import Card from "@/components/common-ui/Card";
import Footer from "@/components/common-ui/Footer";

function StudentHomePage() {
  const { studentViewCoursesList, setStudentViewCoursesList } =
    useContext(StudentContext);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleNavigateToCoursesPage(getCurrentId) {
    console.log(getCurrentId);
    sessionStorage.removeItem("filters");
    const currentFilter = {
      category: [getCurrentId],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));

    navigate("/courses");
  }

  async function fetchAllStudentViewCourses() {
    const response = await fetchStudentViewCourseListService();
    if (response?.success) setStudentViewCoursesList(response?.data);
  }

  async function handleCourseNavigate(getCurrentCourseId) {
    // const response = await checkCoursePurchaseInfoService(
    //   getCurrentCourseId,
    //   auth?.user?._id
    // );

    // if (response?.success) {
    //   if (response?.data) {
    //     navigate(`/course-progress/${getCurrentCourseId}`);
      // } else {
        navigate(`/course/details/${getCurrentCourseId}`);
      // }
    // }
  }

  useEffect(() => {
    fetchAllStudentViewCourses();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="flex flex-col lg:flex-row items-center justify-between">
        {/* <div className="lg:w-1/2 lg:pr-12">
          <h1 className="text-4xl font-bold mb-4">Learning thet gets you</h1>
          <p className="text-xl">
            Skills for your present and your future. Get Started with US
          </p>
        </div>
        <div className="lg:w-full mb-8 lg:mb-0">
          <img
            src={banner}
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div> */}

        <Hero />

      </section>
      <section className="py-8 px-4 lg:px-8 bg-gray-100">
        <h2 className="moulpali text-2xl font-bold mb-6">Course Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {courseCategories.map((categoryItem) => (
            <Button
              className="justify-center moulpali text-lg md:text-xl rounded-full py-6"
              variant="outline"
              key={categoryItem.id}
              onClick={() => handleNavigateToCoursesPage(categoryItem.id)}
            >
              {categoryItem.label}
            </Button>
          ))}
        </div>
      </section>
      <section className="py-12 px-4 lg:px-8">
        <h2 className="text-2xl font-bold mb-6">Featured Courses</h2>
        <div className="flex sm:gap-2.5 gap-8 flex-wrap justify-start">
          {studentViewCoursesList && studentViewCoursesList.length > 0 ? (
            studentViewCoursesList.map((courseItem, index) => (
              <div
              key={index}
                onClick={() => handleCourseNavigate(courseItem?._id)}
                className="rounded-lg cursor-pointer"
              >
                {/* <img
                  src={courseItem?.image}
                  width={300}
                  height={150}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold mb-2">{courseItem?.title}</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    {courseItem?.instructorName}
                  </p>
                  <p className="font-bold text-[16px]">
                    ${courseItem?.pricing}
                  </p>
                </div> */}

              <Card
                src={courseItem?.image}
                title={courseItem?.title}
                instructor={courseItem?.instructorName}
                price={courseItem?.pricing}
                students={courseItem?.students.length}
              />

              </div>
            ))
          ) : (
            <h1>No Courses Found</h1>
          )}
        </div>

        <Footer />
      </section>
    </div>
  );
}

export default StudentHomePage;
