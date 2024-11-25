import * as dao from "./dao.js";
export default function EnrollmentRoutes(app) {
    app.post("/api/enrollments", (req, res) => {
        const { userId, courseId } = req.body;
        dao.enrollUserInCourse(userId, courseId);
        res.send("Enrolled");
    });

    app.get("/api/enrollments", (req, res) => {
        const enrollments = dao.findAllEnrollments();
        res.send(enrollments);
    });

    app.get("/api/enrollments/:enrollmentId", (req, res) => {
        const { enrollmentId } = req.params;
        const enrollment = dao.findEnrollmentById(enrollmentId);
        res.send(enrollment);
    });

    app.delete("/api/enrollments/:enrollmentId", (req, res) => {
        const { enrollmentId } = req.params;
        dao.deleteEnrollment(enrollmentId);
        res.send("Deleted");
    });

    app.put("/api/enrollments/:enrollmentId", (req, res) => {
        const { enrollmentId } = req.params;
        const updates = req.body;
        dao.updateEnrollment(enrollmentId, updates);
        res.send("Updated");
    });

    app.get("/api/enrollments/:enrollmentId/user", (req, res) => {
        const { enrollmentId } = req.params;
        const user = dao.findUserForEnrollment(enrollmentId);
        res.send(user);
    }); 

    app.get("/api/enrollments/:enrollmentId/course", (req, res) => {
        const { enrollmentId } = req.params;
        const course = dao.findCourseForEnrollment(enrollmentId);
        res.send(course);
    }); 
}





