import { Route, Routes } from 'react-router-dom'
// import { Button } from './components/ui/button'
import AuthPage from './pages/AuthPage'
import RouteGuard from './components/RouteGuard'
import StudentViewCommonLayout from './components/sudent-view/StudentViewCommonLayout';
import StudentHomePage from './pages/student/StudentHomePage';
import InstructorDashboardPage from './pages/InstructorDashboardPage';
import NotFoundPage from './pages/NotFound';
import AddNewCoursePage from './pages/instructor/AddNewCoursePage';
import StudentViewCoursesPage from './pages/student/CoursesPage';
import StudentViewCourseDetailsPage from './pages/student/CourseDetailsPage';
import PaypalPaymentReturnPage from './pages/student/PaypalPaymentReturnPage';
import StudentCoursesPage from './pages/student/StudentCourses';
import StudentViewCourseProgressPage from './pages/student/CourseProgressPage';
import Footer from './components/common-ui/Footer';

function App() {
  const auth = JSON.parse(sessionStorage.getItem('auth'));

  return (
    <>
      <Routes>
      <Route
        path="/hero"
        element={<Footer/>}
      />

      <Route
        path="/auth"
        element={
          <RouteGuard
            element={<AuthPage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />

      <Route
        path="/instructor"
        element={
          <RouteGuard
            element={<InstructorDashboardPage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />

      <Route
        path="/instructor/create-new-course"
        element={
          <RouteGuard
            element={<AddNewCoursePage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />

      <Route
        path="/instructor/edit-course/:courseId"
        element={
          <RouteGuard
            element={<AddNewCoursePage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />

      <Route
        path="/"
        element={
          <RouteGuard
            element={<StudentViewCommonLayout />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />

      <Route
        path="/"
        element={
          <RouteGuard
            element={<StudentViewCommonLayout />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      >
        <Route path="" element={<StudentHomePage />} />
        <Route path="home" element={<StudentHomePage />} />
        <Route path="courses" element={<StudentViewCoursesPage />} />
        <Route
          path="course/details/:id"
          element={<StudentViewCourseDetailsPage />}
        />
        <Route path="payment-return" element={<PaypalPaymentReturnPage />} />
        <Route path="student-courses" element={<StudentCoursesPage />} />
        <Route
          path="course-progress/:id"
          element={<StudentViewCourseProgressPage />}
        />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
